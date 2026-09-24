import type { ContactInput } from "./schema";

/**
 * Abstracción del canal de entrega (Dependency Inversion): la Server Action depende
 * de esta interfaz, no de un proveedor concreto. Cambiar a email/Slack/DB = nueva implementación.
 */
export interface ContactNotifier {
  send(input: ContactInput): Promise<void>;
}

export class ContactDeliveryError extends Error {
  constructor(message: string, options?: { cause?: unknown }) {
    super(message, options);
    this.name = "ContactDeliveryError";
  }
}

/** Envía el mensaje como JSON a un webhook (p. ej. un workflow de n8n). */
export class WebhookNotifier implements ContactNotifier {
  constructor(
    private readonly url: string,
    private readonly options: { timeoutMs?: number; secret?: string; fetchImpl?: typeof fetch } = {},
  ) {}

  async send(input: ContactInput): Promise<void> {
    const { timeoutMs = 8000, secret, fetchImpl = fetch } = this.options;
    let response: Response;
    try {
      response = await fetchImpl(this.url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(secret ? { Authorization: `Bearer ${secret}` } : {}),
        },
        body: JSON.stringify({ ...input, sentAt: new Date().toISOString(), source: "portfolio" }),
        signal: AbortSignal.timeout(timeoutMs),
      });
    } catch (error) {
      throw new ContactDeliveryError("No se pudo contactar al webhook.", { cause: error });
    }
    if (!response.ok) {
      throw new ContactDeliveryError(`El webhook respondió ${response.status}.`);
    }
  }
}

/** Fallback para desarrollo: solo registra en consola. */
export class ConsoleNotifier implements ContactNotifier {
  async send(input: ContactInput): Promise<void> {
    console.info("[contact] Nuevo mensaje (sin CONTACT_WEBHOOK_URL configurado):", {
      name: input.name,
      email: input.email,
      length: input.message.length,
    });
  }
}

interface NotifierEnv {
  CONTACT_WEBHOOK_URL?: string;
  CONTACT_WEBHOOK_SECRET?: string;
  [key: string]: string | undefined;
}

/** Resuelve el notificador según el entorno. */
export function createNotifier(env: NotifierEnv = process.env): ContactNotifier {
  const url = env.CONTACT_WEBHOOK_URL;
  if (url) return new WebhookNotifier(url, { secret: env.CONTACT_WEBHOOK_SECRET });
  return new ConsoleNotifier();
}
