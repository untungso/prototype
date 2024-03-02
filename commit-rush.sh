#! /bin/sh
val=$(node ./scripts/commit-msg/index.mjs)

git add . &&
git commit -m "chore($((1 + $RANDOM % 9999))): $val" &&
git push