/**
 * @jest-environment node
 */
import { ConsoleNotifier, ContactDeliveryError, createNotifier, WebhookNotifier } from "./notifier";

const input = { name: "Ada", email: "ada@example.com", message: "Mensaje de prueba" };

describe("WebhookNotifier", () => {
  it("hace POST JSON con el secreto como Bearer token", async () => {
    const fetchImpl = jest.fn().mockResolvedValue(new Response(null, { status: 200 }));
    await new WebhookNotifier("https://hooks.test/contact", { secret: "s3cret", fetchImpl }).send(input);

    const [url, init] = fetchImpl.mock.calls[0];
    expect(url).toBe("https://hooks.test/contact");
    expect(init.method).toBe("POST");
    expect(init.headers).toMatchObject({ "Content-Type": "application/json", Authorization: "Bearer s3cret" });
    expect(JSON.parse(init.body)).toMatchObject({ ...input, source: "portfolio" });
  });

  it("lanza ContactDeliveryError si el webhook responde con error", async () => {
    const fetchImpl = jest.fn().mockResolvedValue(new Response(null, { status: 500 }));
    await expect(new WebhookNotifier("https://hooks.test", { fetchImpl }).send(input)).rejects.toThrow(
      ContactDeliveryError,
    );
  });

  it("lanza ContactDeliveryError ante fallas de red", async () => {
    const fetchImpl = jest.fn().mockRejectedValue(new TypeError("fetch failed"));
    await expect(new WebhookNotifier("https://hooks.test", { fetchImpl }).send(input)).rejects.toThrow(
      ContactDeliveryError,
    );
  });
});

describe("createNotifier", () => {
  it("usa webhook si CONTACT_WEBHOOK_URL está definido", () => {
    expect(createNotifier({ CONTACT_WEBHOOK_URL: "https://hooks.test" })).toBeInstanceOf(
      WebhookNotifier,
    );
  });

  it("cae a consola sin configuración", () => {
    expect(createNotifier({})).toBeInstanceOf(ConsoleNotifier);
  });
});
