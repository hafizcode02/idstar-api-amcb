import { z } from "zod";

export const createTechModuleSchema = z.object({
  name: z.string().min(1),
  slugName: z.string().min(1),
  code: z.string().min(1),
});

export const updateTechModuleSchema = createTechModuleSchema.partial();
