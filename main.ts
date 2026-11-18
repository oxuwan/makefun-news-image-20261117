// World News in One Image — Tuesday 17 November 2026.
// make.fun competition news-image-20261117.
//
// The entry is one drawn image: a newspaper front page summing up the day's
// world news (US strikes in the Strait of Hormuz, Ukraine dropping the
// Crimean Bridge span, Trump's Quad meeting in Manila, Nvidia's record
// quarter, and the day's other stories). This program copies the
// repository's entry.png to the grader's output directory, byte for byte,
// so both runs write the same file. No network, no dependencies, no
// randomness: the output is exactly the image in this repository.

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, 'entry.png');

// The gate allows at most 1 MiB; refuse loudly instead of shipping a
// file the scorer would mark invalid.
const size = statSync(src).size;
if (size > 1048576) {
  throw new Error(`entry.png is ${size} bytes, over the 1 MiB gate`);
}

copyFileSync(src, join(outDir, 'entry.png'));
console.log(`wrote entry.png (${size} bytes) to ${outDir}`);
