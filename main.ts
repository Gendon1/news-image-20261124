// news-image-20261124 entry program (Node 22, standard library only, no network).
//
// The entry image is entry.png sitting next to this file. This program copies it
// into the output directory with the name the competition expects: entry.png.
//
// The output directory is communicated through the MAKEFUN_OUTPUT_DIR
// environment variable (inside the grader it is /output). When the variable is
// unset, fall back to /output so the program behaves identically outside the
// grader, e.g.:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Where our entry image lives: the same directory as this program.
const sourceImage = fileURLToPath(new URL('./entry.png', import.meta.url));

// Where the image must be written: the env-communicated output dir, or /output.
const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Make sure the output directory exists before we write into it.
mkdirSync(outputDirectory, { recursive: true });

// Ship the image under its expected filename.
const targetImage = join(outputDirectory, 'entry.png');
copyFileSync(sourceImage, targetImage);

// Confirm the copy landed.
console.log(`entry.png written to ${targetImage}`);
