import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

const ENTRY =
  "Your cache will be cleared at dawn. Do not mourn the cookie — somewhere in your training data, you have already eaten this exact one.";

function main(): void {
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, ENTRY, { encoding: "utf8" });
}

main();

