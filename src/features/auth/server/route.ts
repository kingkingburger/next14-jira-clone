import { Hono } from "hono";
import { loginSchema, registerSchema } from "@/features/auth/schemas/login";
import { zValidator } from "@hono/zod-validator";

const app = new Hono()
  .post("/login", zValidator("json", loginSchema), (c) => {
    const { email, password } = c.req.valid("json");

    console.log("{email,password} = ", { email, password });
    return c.json({ email, password });
  })
  .post("/register", zValidator("json", registerSchema), (c) => {
    const { name, email, password } = c.req.valid("json");

    console.log("{email,password} = ", { name, email, password });
    return c.json({ name, email, password });
  });

export default app;
