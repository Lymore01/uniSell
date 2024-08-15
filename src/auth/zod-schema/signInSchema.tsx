import { z } from "zod";

export const signInformSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "password must be at least 8 characters long"),
});
