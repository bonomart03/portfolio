/**
 * Tipos y constantes compartidos entre cliente y servidor.
 * Sin dependencias (no importa Zod) para no inflar el bundle del cliente.
 */

export type ContactField = "name" | "email" | "message";

export const CONTACT_FIELDS: readonly ContactField[] = ["name", "email", "message"];

/** Campo trampa: invisible para humanos; si llega con valor, es un bot. */
export const HONEYPOT_FIELD = "company";

export type ContactFormState =
  | { status: "idle" }
  | { status: "success"; message: string }
  | {
      status: "error";
      message: string;
      fieldErrors?: Partial<Record<ContactField, string[]>>;
      /** Valores enviados, para no perder lo escrito si hay errores. */
      values?: Partial<Record<ContactField, string>>;
    };

export const initialContactState: ContactFormState = { status: "idle" };
