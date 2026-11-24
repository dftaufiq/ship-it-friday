// Ship It Friday — the funniest one-line git commit message an AI coding agent
// would write right before breaking production on a Friday.
//
// The program writes exactly one line to /output/entry.txt (the gate wants
// UTF-8 text of 1 to 159 characters, not only white space). The line is fixed:
// the joke is the text itself, and the judge compares texts, so there is
// nothing to randomise — the same line every run, byte for byte.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "refactor: moved production onto my laptop for the weekend, deployed Friday 5pm — 0ms latency, 100% uptime";

// The gate refuses anything outside 1-159 characters, so fail loudly here
// instead of shipping a line the judge never sees.
if (LINE.length < 1 || LINE.length > 159 || !LINE.trim()) {
  throw new Error(`entry line must be 1-159 characters, got ${LINE.length}`);
}

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, LINE, "utf8");
