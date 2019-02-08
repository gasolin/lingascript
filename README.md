# LingaScript

**This project is Work in Progress**

LingaScript is a multilingal programming language, which support write code with non-English languages (currently support Traditional and Simplified Chinese).

LingaScript is derived from Typescript and Javascript. With LingaScript you can any environment that works for Javascript.

## Usage

```sh
$ git clone https://github.com/gasolin/lingascript.git
$ cd lingascript
$ npm install -g jake
$ npm install
```

## Build for different languages

Simplified Chinese:

```sh
$ npm build:cn
```

once build is complete, you can run command `node /built/local/tsc.js` to compile source code in [examples/cn](https://github.com/gasolin/lingascript/tree/master/examples/cn) with simplified chinese.

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


## Credit

lingascript is inspired by [zhpy](https://github.com/gasolin/zhpy/)(周蟒) and [CTS](https://github.com/program-in-chinese/CTS/)


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
