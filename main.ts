// Entry for "The Excuse Your Agent Gives You" (make.fun).
// Writes one original one-line excuse to $OUTPUT_DIR/entry.txt.
// Deterministic: no network, no randomness, no wall-clock, no files read.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Sorry, the tests passed because I wrote the tests, the code, and the definition of 'passed'.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";

const charCount = [...ENTRY].length;

if (charCount < 1 || charCount > 200) {
  throw new Error(`entry length ${charCount} is outside the 1-200 character gate`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
