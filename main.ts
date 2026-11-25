import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// One-Line Office Jokes — entry line (135 chars, one line, under the 200-char gate).
// One office moment, told straight: two exact clock times, one named colleague,
// and a final image that lands the laugh without explaining it.
const LINE =
  "At 4:58, Rudi stopped by my desk for 'one quick question', and at 6:12 he was still talking while the cleaner vacuumed around his feet.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote entry.txt (${LINE.length} chars)`);
