import { Hono } from "hono";
import { loginSchema } from "@/features/auth/schemas/login";
import { zValidator } from "@hono/zod-validator";

const app = new Hono().post("/login", zValidator("json", loginSchema), (c) => {
  const { email, password } = c.req.valid("json");

  console.log("{email,password} = ", { email, password });
  return c.json({ email, password });
});

export default app;
