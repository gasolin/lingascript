# LingaScript

**This project is in early alpha stage, please use it at your own risk**

LingaScript is the [TypeScript](https://github.com/Microsoft/TypeScript) with multilingal support, which enable users to write code with non-English languages.

Basically LingaScript is derived from TypeScript (and Javascript). LingaScript can be compiled to Javascript and be used across the Javascript ecosystem.

[Non-english programming](https://en.wikipedia.org/wiki/Non-English-based_programming_languages) adventurers can easily add your local language, work together to improve the same core, and get benifit for the shared programming tools with better local language support.


## Current Support Languages

You can find available built version with lingascript-[lang] [in npm](https://www.npmjs.com/search?q=keywords:lingascript).

- English (en, [derived from TypeScript](http://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html), Package: Typescript [![npm version](https://img.shields.io/npm/v/typescript.svg)](https://www.npmjs.com/package/typescript))
- 简体中文 (Simplified Chinese, cn, [支持的关键字](https://github.com/gasolin/lingascript/blob/master/src/cn/language.ts), 套件: [lingascript-cn](https://www.npmjs.com/package/lingascript-cn) [![npm version](https://img.shields.io/npm/v/lingascript-cn.svg)](https://www.npmjs.com/package/lingascript-cn))
- 正體中文 (Traditional Chinese, tw, [支援的關鍵字](https://github.com/gasolin/lingascript/blob/master/src/tw/language.ts), 套件: [lingascript-tw](https://www.npmjs.com/package/lingascript-tw) [![npm version](https://img.shields.io/npm/v/lingascript-tw.svg)](https://www.npmjs.com/package/lingascript-tw))


## Usage

Install LingaScript via command

```
npm install -g lingascript-[lang]
```

Then you get the `tsc` command. (same as  `TypeScript`)

Create `test.ts` file.

```js
let isDone = false
```

or you can use TypeScript-style type check format:

```js
let isDone:boolean = false
```

Then run command

```sh
tsc test.ts
```

to compile and get output `test.js`

```js
let isDone = false
```

To show with locale diagnostic messages, pass the `--locale [lang]` param in `tsc`, ex:

```sh
tsc --locale zh-cn test.ts
```

More [native language] code examples in https://github.com/gasolin/lingascript/tree/master/examples/[lang] .


## Build

```sh
$ git clone https://github.com/gasolin/lingascript.git
$ cd lingascript
$ npm install -g jake
$ npm install
$ npm run build:cn
```

`build:cn` will build for Simplified Chinese support and `build:tw` will build for Traditional Chinese support.

Once build is complete, you can run command `node /built/local/tsc.js` to compile source code in [examples/cn](https://github.com/gasolin/lingascript/tree/master/examples/cn) with simplified chinese.

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

LingaScript use `file-patch` to patch TypeScript's compiler.

Check [TypeScript Build Instruction](https://github.com/Microsoft/TypeScript#building) for more detail about building TypeScript.


### Normal Validation phase

The `npm run build:cn` will do

1. patch clean TypeScript with .diff files in src/. The related scripts are stored in [scripts/](https://github.com/gasolin/lingascript/tree/master/scripts) folder.

2. `npm run build` will be used to build the patched TypeScript

3. Run `npm run test:cn` to make sure the built tool works.

### Test different languages

For example, to test Traditional Chinese, you can run commands:

```sh
$ npm run clean
$ npm run build:tw
$ npm run test:tw
```

### Rebuild from a clean typescript/ folder

You need to remove TypeScript for a clean patch. To re-build from the clean TypeScript, you can run

```sh
$ npm run clean
$ npm run build:cn
```

check the `clean` and `build:cn` script `package.json`'s `scripts` section for the  execute detail.

### Debugging phase

1. You can disable patch process by removing the `prebuild` script in `package.json`'s `scripts` section. If you plan to change default keywords, remove `cp src/[lang]/language.ts typescript/src/compiler/language.ts && ` from the `build:[lang]` script in `package.json`'s `scripts` section to avoid overwrite from `src/[lang]`.

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

### Upgrade TypeScript Version

To upgrade the TypeScript's version (to v3.4.0 for example):

```sh
$ npm run upgrade-ts
$ cd typescript
$ git checkout v3.4.0
$ cd ..
$ git add typescript
```

The TypeScript version follows https://github.com/Microsoft/TypeScript/releases

### Build faster

Modify the `build:ts` script in `package.json`'s `scripts` section. Replace `jake LKG`(replace lib/ with last known good build) to `jake local`(for local build, not replaced lib/).


## Changelog

Check [CHANGELOG](https://github.com/gasolin/lingascript/blob/master/CHANGELOG.md) for more detail.


## License

Apache-2.0 License


## Credit

LingaScript is inspired by [zhpy](https://github.com/gasolin/zhpy/)(周蟒) and [CTS](https://github.com/program-in-chinese/CTS/issues/14)
