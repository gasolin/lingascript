# LingaScript

**This project is in early alpha stage, please use it at your own risk**

LingaScript is a multilingal programming language, which support write code with non-English languages.

LingaScript is derived from Typescript and Javascript. LingaScript can be compiled to Javascript and be used across the Javascript ecosystem.

[Non-english programming](https://en.wikipedia.org/wiki/Non-English-based_programming_languages) adventurers can easily add your local language, work together to improve the same core, and get benifit for the shared programming tools with better local language support.


## Current Support Languages

- English (en, derived from TypeScript)
- Simplified Chinese (cn)
- Traditional Chinese (tw)

## Usage

```sh
$ git clone https://github.com/gasolin/lingascript.git
$ cd lingascript
$ npm install -g jake
$ npm install
$ npm run build:cn
```


## Build for different languages

Simplified Chinese:

```sh
$ npm run build:cn
```

once build is complete, you can run command `node /built/local/tsc.js` to compile source code in [examples/cn](https://github.com/gasolin/lingascript/tree/master/examples/cn) with simplified chinese.

```sh
node typescript/built/local/tsc.js -p examples/cn
```

The example comes from TypeScript's [Basic types](https://www.typescriptlang.org/docs/handbook/basic-types.html) tutorial.

You can config the [tsconfig.json](https://www.typescriptlang.org/docs/handbook/compiler-options.html
) file for different output target (es5, es6, es2018...).

```js
{
  "compilerOptions": {
      "outDir": "./built",
      "allowJs": true,
      "target": "es6",
      "diagnostics": true,
      "locale": "zh-CN"
  },
  "include": [
      "./src/**/*"
  ]
}
```


## Develop

lingascript use `file-patch` to patch typescript's compiler.

### Normal Validation phase

The `npm run build:cn` will do

1. patch clean typescript with .diff files in src/. The related scripts are stored in [scripts/](https://github.com/gasolin/lingascript/tree/master/scripts) folder. 

2. `npm run build` will be used to build the patched typescript

3. Run `npm run test` to make sure the built tool works.

### Test different language

To test Traditional Chinese, Run command:

```sh
$ npm run clean
$ npm run build:tw
```

change `pretest:cn` to `pretest:tw` in `package.json`'s `scripts` section.

and change `TARGET_LANG = 'cn'` to `TARGET_LANG = 'tw'` in `tests/test.js`.

Then run the right test set

```
npm run test
```

### Rebuild from a clean typescript/ folder

You need to remove typescript for a clean patch. To re-build from the clean typescript, you can run

```sh
$ npm run clean
$ npm run build:cn
```

check the `clean` and `build:cn` script `package.json`'s `scripts` section for the  execute detail.

### Debugging phase

1. You can disable patch process by removing the `prebuild` script in `package.json`'s `scripts` section.

2. Follow Normal Validation phase, if the modifications works, we can backup the modified files from `typescript/src` to `src/` via

```sh
npm run backup
```

Edit [scripts/backup.sh](https://github.com/gasolin/lingascript/tree/master/scripts) to include the new modified files.

3. To generate `.diff` files, compare the backup-ed modified files with the clean `typescript/src` folder via

```sh
npm run diff
```

Edit [scripts/diff.sh](https://github.com/gasolin/lingascript/tree/master/scripts) to include the new modified files.

### Upgrade Typescript Version

To upgrade the typescript's version (to v3.4.0 for example):

```sh
$ npm run upgrade-ts
$ cd typescript
$ git checkout v3.4.0
$ cd ..
$ git add typescript
```


## License

Apache-2.0 License


## Credit

LingaScript is inspired by [zhpy](https://github.com/gasolin/zhpy/)(周蟒) and [CTS](https://github.com/program-in-chinese/CTS/issues/14)
