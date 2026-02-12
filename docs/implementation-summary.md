# Melksham Mental Health — Implementation Summary

This repository now includes the full content and UI refresh requested for:

- Home (`/`)
- My Story (`/about`)
- Get Support (`/app/support`)
- Resources (`/resources`)
- Blog (`/blog`)
- Crisis Help (`/resources/crisis`)
- Contact (`/contact`)

## Background assets

- The textured page backgrounds are sourced from: `website/public/Bground-buttons.png`.
- CSS texture classes are mapped in `website/app/globals.css` using `bg-texture-1..4` with quadrant positions:
  - `left top`
  - `right top`
  - `left bottom`
  - `right bottom`

## Notes on binary files

Image files (`.png`, `.ico`) are binary files and cannot be edited in text-based diff tools.
This is expected behavior.

## Repository hygiene

Windows `:Zone.Identifier` sidecar files are ignored via `.gitignore` to avoid accidental commits.

- Use `scripts/remove-zone-identifiers.sh` to remove any accidental `Zone.Identifier` sidecar files from the working tree and git index.
