import { z } from "zod";
import type { ContactField } from "./form-state";

/**
 * Esquema del formulario de contacto: fuente de verdad de la validación (solo servidor).
 * El cliente usa validación HTML nativa como primera barrera, nunca como única.
 */
export const contactSchema = z.object({
  name: z.string().trim().min(2, "Ingresá al menos 2 caracteres.").max(80, "Máximo 80 caracteres."),
  email: z.string().trim().pipe(z.email("Ingresá un email válido.").max(254, "Email demasiado largo.")),
  message: z
    .string()
    .trim()
    .min(10, "El mensaje debe tener al menos 10 caracteres.")
    .max(2000, "Máximo 2000 caracteres."),
} satisfies Record<ContactField, z.ZodType>);

export type ContactInput = z.infer<typeof contactSchema>;
