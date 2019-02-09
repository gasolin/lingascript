#!/usr/bin/env sh

echo "generate .diff between src/patched and typescript/src"
node ./node_modules/.bin/file-diff typescript/src/compiler/checker.ts src/patched/compiler/checker.ts
cp typescript/src/compiler/checker.ts.diff src/common/compiler/.

node ./node_modules/.bin/file-diff typescript/src/compiler/scanner.ts src/patched/compiler/scanner.ts
cp typescript/src/compiler/scanner.ts.diff src/common/compiler/.

node ./node_modules/.bin/file-diff typescript/src/compiler/tsconfig.json src/patched/compiler/tsconfig.json
cp typescript/src/compiler/tsconfig.json.diff src/common/compiler/.

node ./node_modules/.bin/file-diff typescript/src/compiler/types.ts src/patched/compiler/types.ts
cp typescript/src/compiler/types.ts.diff src/common/compiler/.
