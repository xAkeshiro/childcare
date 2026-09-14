#!/usr/bin/env sh
# Change the business name everywhere on the site.
#
#   ./rename.sh "Little Thinking Caps"
#
# The current name is read from the <meta name="application-name"> tag in index.html,
# so you can run this as many times as you like.
set -eu

NEW="${1:-}"
if [ -z "$NEW" ]; then
  echo "Usage: ./rename.sh \"New Name\"" >&2
  exit 1
fi

cd "$(dirname "$0")"

OLD=$(sed -n 's/.*<meta name="application-name" content="\([^"]*\)".*/\1/p' index.html | head -n 1)
if [ -z "$OLD" ]; then
  echo "Could not find the current name in index.html (looked for <meta name=\"application-name\">)." >&2
  exit 1
fi

if [ "$OLD" = "$NEW" ]; then
  echo "The site is already called \"$NEW\"."
  exit 0
fi

# Escape characters that mean something to sed
esc() { printf '%s' "$1" | sed 's/[][\/.*^$&]/\\&/g'; }
OLD_RE=$(esc "$OLD")
NEW_RE=$(printf '%s' "$NEW" | sed 's/[\/&]/\\&/g')

for f in index.html README.md; do
  [ -f "$f" ] || continue
  # -i.bak works with both GNU sed (Linux) and BSD sed (macOS)
  sed -i.bak "s/$OLD_RE/$NEW_RE/g" "$f" && rm -f "$f.bak"
done

echo "Renamed \"$OLD\" to \"$NEW\" in index.html and README.md."
echo "Still to do by hand: your email address, domain name, and assets/og.png (see README)."
