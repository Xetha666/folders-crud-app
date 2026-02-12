import { z } from "zod";

export const loginSchema = z.object({
  username: z
    .string()
    .min(4, "El usuario debe tener al menos 4 caracteres"),
  password: z
    .string()
    .min(5, "La contraseña debe tener al menos 5 caracteres"),
});

// Esto te servirá para tipar tus variables en TypeScript
export type loginSchema = z.infer<typeof loginSchema>;