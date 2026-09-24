"use server";

import { handleContact } from "@/lib/contact/handle-contact";
import { createNotifier } from "@/lib/contact/notifier";
import type { ContactFormState } from "@/lib/contact/form-state";

/**
 * Server Action del formulario de contacto (endpoint público: no requiere auth,
 * pero todo input se valida en servidor con Zod).
 */
export async function sendContactMessage(_prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  return handleContact(formData, createNotifier());
}
