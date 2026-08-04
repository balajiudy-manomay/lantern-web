import { ImageResponse } from "next/og";
import { join } from "node:path";
import { readFile } from "node:fs/promises";

export const alt = "Lantern";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(
    join(process.cwd(), "public/images/image_1.png")
  );
  const logoSrc = Uint8Array.from(logoData).buffer;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        {/* @ts-expect-error Satori accepts ArrayBuffer/typed arrays for <img src> at runtime */}
        <img src={logoSrc} width="100%" height="100%" style={{ objectFit: 'cover' }} />
      </div>
    ),
    {
      ...size,
    }
  );
}
