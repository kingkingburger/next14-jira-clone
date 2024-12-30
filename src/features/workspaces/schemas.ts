import { z } from "zod";

export const createWorkspacesSchema = z.object({
  name: z.string().trim().min(1, "Required"),
  imageUrl: z
    .union([
      z.instanceof(File),
      z.string().transform((value) => (value === "" ? undefined : value)),
    ])
    .optional(),
});
