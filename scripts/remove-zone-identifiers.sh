#!/usr/bin/env bash
set -euo pipefail

# Remove Windows Zone.Identifier sidecar files if they exist in the working tree.
find . -type f \( -name '*:Zone.Identifier' -o -name '*.Zone.Identifier' \) -print -delete

# Remove any tracked Zone.Identifier paths from git index (if present).
tracked=$(git ls-files | grep -E '(:Zone\.Identifier$|\.Zone\.Identifier$)' || true)
if [[ -n "$tracked" ]]; then
  while IFS= read -r file; do
    git rm --cached -- "$file" || true
  done <<< "$tracked"
fi

echo "Zone.Identifier cleanup complete."
