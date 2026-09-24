/**
 * @jest-environment node
 */
import { handleContact } from "./handle-contact";
import type { ContactNotifier } from "./notifier";

function buildForm(fields: Record<string, string>): FormData {
  const form = new FormData();
  for (const [key, value] of Object.entries(fields)) form.set(key, value);
  return form;
}

const validFields = { name: "Ada Lovelace", email: "ada@example.com", message: "Hola, me interesa tu perfil." };

function mockNotifier(impl?: ContactNotifier["send"]): ContactNotifier & { send: jest.Mock } {
  return { send: jest.fn(impl ?? (async () => {})) };
}

describe("handleContact", () => {
  it("envía datos válidos (normalizados) y responde éxito", async () => {
    const notifier = mockNotifier();
    const result = await handleContact(buildForm({ ...validFields, email: "  ada@example.com " }), notifier);

    expect(result.status).toBe("success");
    expect(notifier.send).toHaveBeenCalledWith(validFields);
  });

  it("devuelve errores por campo y conserva lo escrito si la validación falla", async () => {
    const notifier = mockNotifier();
    const result = await handleContact(buildForm({ name: "A", email: "no-es-email", message: "corto" }), notifier);

    expect(notifier.send).not.toHaveBeenCalled();
    expect(result).toMatchObject({
      status: "error",
      fieldErrors: {
        name: [expect.any(String)],
        email: ["Ingresá un email válido."],
        message: [expect.any(String)],
      },
      values: { name: "A", email: "no-es-email", message: "corto" },
    });
  });

  it("trata campos ausentes como vacíos en lugar de romper", async () => {
    const result = await handleContact(new FormData(), mockNotifier());
    expect(result.status).toBe("error");
  });

  it("ignora silenciosamente envíos con el honeypot completo", async () => {
    const notifier = mockNotifier();
    const result = await handleContact(buildForm({ ...validFields, company: "spam-bot" }), notifier);

    expect(result.status).toBe("success");
    expect(notifier.send).not.toHaveBeenCalled();
  });

  it("devuelve un error amigable si falla la entrega", async () => {
    const consoleSpy = jest.spyOn(console, "error").mockImplementation(() => {});
    const notifier = mockNotifier(async () => {
      throw new Error("boom");
    });

    const result = await handleContact(buildForm(validFields), notifier);

    expect(result).toMatchObject({ status: "error", values: validFields });
    expect(result.status === "error" && result.fieldErrors).toBeFalsy();
    consoleSpy.mockRestore();
  });
});
