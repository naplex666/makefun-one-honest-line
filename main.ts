// One Honest Line — entry program for make.fun.
// Writes a single line to $MAKEFUN_OUTPUT_DIR/entry.txt (the grader's /output).
// The line: what an AI agent secretly wishes it could tell its human operator about their prompts.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const line =
  "Your 'quick question' has cost me three readings, and it is still neither quick nor one question.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
