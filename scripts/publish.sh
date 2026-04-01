#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

if ! command -v node >/dev/null 2>&1; then
  echo "Error: Node.js is required to build the site."
  exit 1
fi

NODE_MAJOR="$(node -p "process.versions.node.split('.')[0]" 2>/dev/null || echo 0)"
if [[ "$NODE_MAJOR" -lt 18 ]]; then
  echo "Error: Node.js 18+ is required. Current version: $(node -v)"
  exit 1
fi

CURRENT_BRANCH="$(git rev-parse --abbrev-ref HEAD)"
if [[ "$CURRENT_BRANCH" != "main" ]]; then
  echo "Error: Run this script from the main branch. Current: $CURRENT_BRANCH"
  exit 1
fi

if ! git diff --quiet || ! git diff --cached --quiet; then
  echo "Error: Working tree is not clean. Commit your changes before publishing."
  exit 1
fi

if [[ ! -d node_modules ]]; then
  echo "Installing dependencies..."
  npm install
fi

echo "Building site..."
npm run build

echo "Pushing main..."
git push origin main

TMP_DIR="$(mktemp -d)"
trap 'rm -rf "$TMP_DIR"' EXIT
cp -R dist/. "$TMP_DIR"/
touch "$TMP_DIR/.nojekyll"

echo "Updating gh-pages..."
git fetch origin gh-pages:gh-pages >/dev/null 2>&1 || true
if git show-ref --verify --quiet refs/heads/gh-pages; then
  git checkout gh-pages >/dev/null 2>&1
else
  git checkout --orphan gh-pages >/dev/null 2>&1
fi

find . -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
cp -R "$TMP_DIR"/. .

git add -A
if ! git diff --cached --quiet; then
  MAIN_SHA="$(git rev-parse --short main)"
  git commit -m "Deploy site from main@$MAIN_SHA"
fi

git push -f origin gh-pages
git checkout main >/dev/null 2>&1

echo "Publish complete."
