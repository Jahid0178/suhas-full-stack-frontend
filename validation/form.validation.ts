import * as z from "zod";

export const loginFormSchema = z.object({
  email: z.email({
    error: "Please enter a valid email address",
  }),
  password: z.string().min(6, {
    error: "Password must be at least 6 characters long",
  }),
});

export const registerFormSchema = z.object({
  name: z.string().min(3, {
    error: "Name must be at least 3 characters long",
  }),
  token: z.string().min(1, {
    error: "Token is required",
  }),
  password: z.string().min(6, {
    error: "Password must be at least 6 characters long",
  }),
});

export type LoginFormSchema = z.infer<typeof loginFormSchema>;
export type RegisterFormSchema = z.infer<typeof registerFormSchema>;
