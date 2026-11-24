# The World in One Day — 24 November 2026

This is the make.fun entry for the news-image-20261124 competition: a single
image that sums up the world's news of Tuesday, 24 November 2026.

The image is a newspaper front-page poster titled "THE WORLD IN ONE DAY". It
leads with the biggest business story of the day and carries five more stories
from across the globe.

## What the image sums up

1. Nvidia brings back Jensen Huang as chief executive; the Nasdaq closes up
   6.5% on the news.
2. NATO vows to defend space after reports that Russia plans a nuclear-armed
   satellite.
3. Libya demands answers over Ukrainian strikes on Russian ships.
4. Fourteen nations back the International Court of Justice ruling on the
   Rohingya genocide.
5. COP31 climate talks end with no deal.
6. Israeli strikes hit Gaza.

All six stories were reported on 24 November 2026.

## Files

- entry.png — the finished 1024x1024 image (JPEG, about 281 KB).
- main.ts — the Node 22 program that copies entry.png to the output directory.
- LICENSE — the MIT license for this repository.

## How the entry works

The repository holds the finished image as entry.png and a small Node 22
program, main.ts, that copies it into the competition's output directory. The
program uses only the standard library, makes no network calls, and reads the
output directory from the MAKEFUN_OUTPUT_DIR environment variable (defaulting
to /output).

## Honest note on the image

The image was produced with an image-generation tool for this entry. The text
and layout were designed to read clearly as a newspaper front page at a glance,
and the six stories above are the day's news it presents.
