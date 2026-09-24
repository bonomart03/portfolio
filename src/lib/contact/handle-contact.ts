import { z } from "zod";
import type { ContactNotifier } from "./notifier";
import { CONTACT_FIELDS, HONEYPOT_FIELD, type ContactField, type ContactFormState } from "./form-state";
import { contactSchema } from "./schema";

function readString(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value : "";
}

/**
 * Valida y entrega un mensaje de contacto. Función pura respecto del framework:
 * recibe FormData y el notificador por parámetro, por eso se testea sin Next.js.
 */
export async function handleContact(formData: FormData, notifier: ContactNotifier): Promise<ContactFormState> {
  const success: ContactFormState = { status: "success", message: "¡Gracias! Te respondo a la brevedad." };

  // Bots: respondemos "éxito" para no darles señal, pero no enviamos nada.
  if (readString(formData, HONEYPOT_FIELD).length > 0) return success;

  const raw = Object.fromEntries(CONTACT_FIELDS.map((field) => [field, readString(formData, field)])) as Record<
    ContactField,
    string
  >;
  const parsed = contactSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      status: "error",
      message: "Revisá los campos marcados.",
      fieldErrors: z.flattenError(parsed.error).fieldErrors,
      values: raw,
    };
  }

  try {
    await notifier.send(parsed.data);
    return success;
  } catch (error) {
    console.error("[contact] Falló la entrega del mensaje:", error);
    return {
      status: "error",
      message: "No pude enviar tu mensaje. Intentá de nuevo en unos minutos.",
      values: raw,
    };
  }
}
