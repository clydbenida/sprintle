import { z } from "zod";

export const authFormSchema = z.object({
  email: z.string(),
  password: z.string()
})

export type AuthFormType = z.infer<typeof authFormSchema>