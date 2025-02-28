import { Hono } from "hono";
import { Query } from "node-appwrite";
import { z } from "zod";

import { sessionMiddleware } from "@/lib/session-middleware";
import { zValidator } from "@hono/zod-validator";
import { getMembers } from "@/features/members/util";
import { DATABASE_ID, PROJECT_ID } from "@/config";

const app = new Hono().get(
  "/",
  sessionMiddleware,
  zValidator("query", z.object({ workspaceId: z.string() })),
  async (c) => {
    const user = c.get("user");
    const databases = c.get("databases");

    const { workspaceId } = c.req.valid("query");

    const member = await getMembers({
      databases,
      workspaceId,
      userId: user.$id,
    });

    if (!member) {
      return c.json({ error: "Unauthorized" }, 401);
    }

    const projects = await databases.listDocuments(DATABASE_ID, PROJECT_ID, [
      Query.equal("workspaceId", workspaceId),
      Query.orderDesc("$createdAt"),
    ]);

    return c.json({ data: projects });
  },
);

export default app;
