import { z } from "zod";

export const createWorkspacesSchema = z.object({
  name: z.string().trim().min(1, "Required"),
});
