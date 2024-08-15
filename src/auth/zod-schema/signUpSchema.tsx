import { z } from "zod";

const passwordSchema = z
  .string()
  .min(8, "password must be at least 8 characters long");

  export const signUpformSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: passwordSchema,
    confirmPassword: z.string().min(8, "Password must be at least 8 characters long"),
  }).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
