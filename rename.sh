#!/usr/bin/env sh
# Change the business name everywhere on the site.
#
#   ./rename.sh "Little Thinking Caps"
#
# The current name is read from src/content/site.ts, so you can run this as
# many times as you like. Then rebuild (npm run build).
set -eu

NEW="${1:-}"
if [ -z "$NEW" ]; then
  echo "Usage: ./rename.sh \"New Name\"" >&2
  exit 1
fi

cd "$(dirname "$0")"

OLD=$(sed -n "s/^  name: '\([^']*\)',.*/\1/p" src/content/site.ts | head -n 1)
if [ -z "$OLD" ]; then
  echo "Could not find the current name in src/content/site.ts (looked for  name: '...')." >&2
  exit 1
fi

if [ "$OLD" = "$NEW" ]; then
  echo "The site is already called \"$NEW\"."
  exit 0
fi

esc() { printf '%s' "$1" | sed 's/[][\/.*^$&]/\\&/g'; }
OLD_RE=$(esc "$OLD")
NEW_RE=$(printf '%s' "$NEW" | sed 's/[\/&]/\\&/g')

for f in src/content/site.ts index.html README.md BRAND.md; do
  [ -f "$f" ] || continue
  # -i.bak works with both GNU sed (Linux) and BSD sed (macOS)
  sed -i.bak "s/$OLD_RE/$NEW_RE/g" "$f" && rm -f "$f.bak"
done

echo "Renamed \"$OLD\" to \"$NEW\" in src/content/site.ts, index.html, README.md, and BRAND.md."
echo "Still to do by hand: your email address, domain name, and public/og.png (see README)."
