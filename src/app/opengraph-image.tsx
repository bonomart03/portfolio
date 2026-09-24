import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Imagen OG generada en build: se actualiza sola al cambiar `profile`. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#0c0a09",
          color: "#f5f5f4",
        }}
      >
        <div style={{ fontSize: 28, color: "#2dd4bf", marginBottom: 24 }}>{profile.role}</div>
        <div style={{ fontSize: 80, fontWeight: 700, letterSpacing: -2 }}>{profile.name}</div>
        <div style={{ fontSize: 32, color: "#a8a29e", marginTop: 24, maxWidth: 1000 }}>{profile.headline}</div>
      </div>
    ),
    size,
  );
}
