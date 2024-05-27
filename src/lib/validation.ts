
import { z } from 'zod';

export const loginSchema = z.object({
    email: z.string().email("Email is invalid"),
    password: z.string().min(8, "Error")
})

export const registerSchema = z.object({
    email: z.string().email("Email is invalid"),
    password: z.string().min(8, "Error"),
    confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"]
})