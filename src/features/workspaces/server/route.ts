import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { createWorkspacesSchema } from "@/features/workspaces/schemas";
import { sessionMiddleware } from "@/lib/session-middleware";
import { DATABASE_ID, WORKSPACES_ID } from "@/config";
import { ID } from "node-appwrite";

const app = new Hono().post(
  "/",
  zValidator("json", createWorkspacesSchema),
  sessionMiddleware,
  async (c) => {
    const databases = c.get("databases");
    const user = c.get("user");

    const { name } = c.req.valid("json");

    const workspace = await databases.createDocument(
      DATABASE_ID,
      WORKSPACES_ID,
      ID.unique(),
      {
        name: name,
      },
    );

    return c.json({ data: workspace });
  },
);

export default app;
