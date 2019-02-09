#!/usr/bin/env sh

echo "backup patched typescript files to patched/"
cp typescript/src/compiler/checker.ts src/patched/compiler/.
cp typescript/src/compiler/scanner.ts src/patched/compiler/.
cp typescript/src/compiler/tsconfig.json src/patched/compiler/.
cp typescript/src/compiler/types.ts src/patched/compiler/.
