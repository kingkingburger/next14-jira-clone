import { z } from "zod";

export const loginSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export const registerSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(8, "minimum 8 characters"),
});
