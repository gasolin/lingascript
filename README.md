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
$ npm build
```

Build for different languages

```
$ npm build lang=zhcn
```

Make sure to check LingaScript's [examples](https://github.com/gasolin/lingascript/tree/master/examples) and the [Basic types](https://www.typescriptlang.org/docs/handbook/basic-types.html) tutorial from TypeScript.


## Credit

lingascript is inspired by [zhpy](https://github.com/gasolin/zhpy/)(周蟒) and [CTS](https://github.com/program-in-chinese/CTS/)


## Develop

lingascript use `file-patch` to patch typescript's compiler.


Update typescript version:

```sh
$ npm run upgrade-ts
```
