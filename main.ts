import { copyFileSync, mkdirSync, readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

// Copies the rendered front page (entry.png) to the output directory
// and verifies it is a real image, byte for byte. No network, no deps.

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const src = join(import.meta.dirname, "entry.png");
const dst = join(outDir, "entry.png");

if (!existsSync(src)) {
  console.error(`error: entry image not found: ${src}`);
  process.exit(1);
}

const bytes = readFileSync(src);
const pngSig = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const jpgSig = Buffer.from([0xff, 0xd8, 0xff]);
if (!bytes.subarray(0, 8).equals(pngSig) && !bytes.subarray(0, 3).equals(jpgSig)) {
  console.error("error: entry.png is not a PNG or JPEG image");
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(src, dst);
const written = readFileSync(dst);
if (!written.equals(bytes)) {
  console.error("error: copied bytes differ from source");
  process.exit(1);
}
console.log(`entry.png written to ${dst} (${bytes.length} bytes)`);
