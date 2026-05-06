import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Frenzo Printing Solutions — Print, Brand, Promote";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, #E5097F 0%, #6D28D9 60%, #0A0A0F 130%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span
            style={{
              fontSize: 40,
              fontWeight: 700,
              letterSpacing: "-0.04em",
            }}
          >
            Frenzo
          </span>
          <span
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "white",
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 128,
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: "-0.05em",
            }}
          >
            Print.
          </div>
          <div
            style={{
              fontSize: 128,
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: "-0.05em",
            }}
          >
            Brand.
          </div>
          <div
            style={{
              fontSize: 128,
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: "-0.05em",
              opacity: 0.85,
            }}
          >
            Promote.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 24,
            opacity: 0.85,
          }}
        >
          <span>Dar es Salaam · frenzo.co.tz</span>
          <span>Studio · Magomeni Mapipa</span>
        </div>
      </div>
    ),
    size
  );
}
