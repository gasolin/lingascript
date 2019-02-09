#!/usr/bin/env sh

echo "apply .diff to typescript/src"
node ./node_modules/.bin/file-patch src/common/compiler/checker.ts.diff typescript/src/compiler/checker.ts
node ./node_modules/.bin/filecompare src/patched/compiler/checker.ts typescript/src/compiler/checker.ts

node ./node_modules/.bin/file-patch src/common/compiler/scanner.ts.diff typescript/src/compiler/scanner.ts
node ./node_modules/.bin/filecompare src/patched/compiler/scanner.ts typescript/src/compiler/scanner.ts

node ./node_modules/.bin/file-patch src/common/compiler/tsconfig.json.diff typescript/src/compiler/tsconfig.json
node ./node_modules/.bin/filecompare src/patched/compiler/tsconfig.json typescript/src/compiler/tsconfig.json

node ./node_modules/.bin/file-patch src/common/compiler/types.ts.diff typescript/src/compiler/types.ts
node ./node_modules/.bin/filecompare src/patched/compiler/types.ts typescript/src/compiler/types.ts
