import { Hono } from "hono";
import { loginSchema } from "@/features/auth/schemas/login";
import { zValidator } from "@hono/zod-validator";

const app = new Hono().post(
  "/login/:userId",
  zValidator("json", loginSchema),
  zValidator("param", z.object({ userId: z.number() })),
  (c) => {
    const { email, password } = c.req.valid("json");
    const { userId } = c.req.valid("param");
    return c.json({ success: "ok" });
  },
);

export default app;
