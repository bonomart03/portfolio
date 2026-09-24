"use client";

import { useActionState } from "react";
import { sendContactMessage } from "@/app/actions/contact";
import { HONEYPOT_FIELD, initialContactState, type ContactField, type ContactFormState } from "@/lib/contact/form-state";

const inputClass =
  "w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30 aria-invalid:border-danger";

function fieldError(state: ContactFormState, field: ContactField): string | undefined {
  return state.status === "error" ? state.fieldErrors?.[field]?.[0] : undefined;
}

function fieldValue(state: ContactFormState, field: ContactField): string | undefined {
  return state.status === "error" ? state.values?.[field] : undefined;
}

interface FieldProps {
  name: ContactField;
  label: string;
  state: ContactFormState;
  children: (props: {
    id: string;
    name: string;
    defaultValue?: string;
    "aria-invalid"?: true;
    "aria-describedby"?: string;
  }) => React.ReactNode;
}

/** Envuelve label + control + error con los atributos ARIA correctos. */
function Field({ name, label, state, children }: FieldProps) {
  const id = `contact-${name}`;
  const error = fieldError(state, name);
  const errorId = `${id}-error`;
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      {children({
        id,
        name,
        defaultValue: fieldValue(state, name),
        ...(error ? { "aria-invalid": true, "aria-describedby": errorId } : {}),
      })}
      {error && (
        <p id={errorId} className="text-xs text-danger">
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendContactMessage, initialContactState);

  return (
    <form action={formAction} className="flex max-w-xl flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field name="name" label="Nombre" state={state}>
          {(props) => <input {...props} type="text" autoComplete="name" required minLength={2} maxLength={80} className={inputClass} />}
        </Field>
        <Field name="email" label="Email" state={state}>
          {(props) => <input {...props} type="email" autoComplete="email" required maxLength={254} className={inputClass} />}
        </Field>
      </div>
      <Field name="message" label="Mensaje" state={state}>
        {(props) => <textarea {...props} rows={5} required minLength={10} maxLength={2000} className={inputClass} />}
      </Field>

      {/* Honeypot: oculto para personas y lectores de pantalla. */}
      <div aria-hidden="true" className="hidden">
        <label htmlFor={HONEYPOT_FIELD}>No completar</label>
        <input id={HONEYPOT_FIELD} name={HONEYPOT_FIELD} type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={isPending}
          className="rounded-lg bg-accent px-5 py-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isPending ? "Enviando…" : "Enviar mensaje"}
        </button>
        <p role="status" aria-live="polite" className={`text-sm ${state.status === "error" ? "text-danger" : "text-accent"}`}>
          {state.status !== "idle" && state.message}
        </p>
      </div>
    </form>
  );
}
