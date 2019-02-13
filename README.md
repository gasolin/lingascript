# LingaScript

**This project is in early alpha stage, please use it at your own risk**

LingaScript is the TypeScript with multilingal support, which support write code with non-English languages.

Basically LingaScript is derived from Typescript (and Javascript). LingaScript can be compiled to Javascript and be used across the Javascript ecosystem.

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

LingaScript use `file-patch` to patch Typescript's compiler.

Check [Typescript Build Instruction](https://github.com/Microsoft/TypeScript#building) for more detail about building Typescript.


### Normal Validation phase

The `npm run build:cn` will do

1. patch clean Typescript with .diff files in src/. The related scripts are stored in [scripts/](https://github.com/gasolin/lingascript/tree/master/scripts) folder.

2. `npm run build` will be used to build the patched Typescript

3. Run `npm run test:cn` to make sure the built tool works.

### Test different languages

For example, to test Traditional Chinese, you can run commands:

```sh
$ npm run clean
$ npm run build:tw
$ npm run test:tw
```

### Rebuild from a clean typescript/ folder

You need to remove Typescript for a clean patch. To re-build from the clean Typescript, you can run

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

To upgrade the Typescript's version (to v3.4.0 for example):

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
