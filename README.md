# LingaScript

**This project is in early alpha stage, please use it at your own risk**

LingaScript is a multilingal programming language, which support write code with non-English languages.

LingaScript is derived from Typescript and Javascript. LingaScript can be compiled to Javascript and be used across the Javascript ecosystem.

[Non-english programming](https://en.wikipedia.org/wiki/Non-English-based_programming_languages) adventurers can easily add your local language, work together to improve the same core, and get benifit for the shared programming tools with better local language support.

## Support Languages

- Simplified Chinese (cn)

Plan to support:

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


To re-build from the clean typescript

```sh
$ rm -rf typescript
$ npm run update-ts
$ npm run build:cn
```

To upgrade the typescript's version:

```sh
$ npm run upgrade-ts
```

## License

Apache-2.0 License

## Credit

LingaScript is inspired by [zhpy](https://github.com/gasolin/zhpy/)(周蟒) and [CTS](https://github.com/program-in-chinese/CTS/issues/14)
