# LingaScript

**This is the base template for all native language README**

LingaScript is the TypeScript with [native language] support, which support write code with [native language] keywords.

Basically LingaScript is derived from Typescript (and Javascript). LingaScript can be compiled to Javascript and be used across the Javascript ecosystem.

[Non-english programming](https://en.wikipedia.org/wiki/Non-English-based_programming_languages) adventurers can easily add your local language, work together to improve the same core, and get benifit for the shared programming tools with better local language support. [Check out the LingaScript repo](https://github.com/gasolin/lingascript/).


## Current Support Languages

LingaScript-[lang] support [native language] and english keywords（Keywords），you need install different package when using different native language.

- English (en, [derived from TypeScript](http://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html), Package: [Typescript](https://www.npmjs.com/package/typescript)))
- 简体中文 (Simplified Chinese, cn, [支援的关键字](https://github.com/gasolin/lingascript/blob/master/src/cn/language.ts), 套件: [lingascript-cn](https://www.npmjs.com/package/lingascript-cn))
- 正體中文 (Traditional Chinese, tw, [支援的關鍵字](https://github.com/gasolin/lingascript/blob/master/src/tw/language.ts), 套件: [lingascript-tw](https://www.npmjs.com/package/lingascript-tw))

## Usage

Install LingaScript via command

```
npm install -g lingascript-[lang]
```

Then you get the `tsc` command. (same as  `Typescript`)

Create `test.ts` file.

```js
let isDone = false
```

or you can use TypeScript-style type check format:

```js
let isDone:boolean = false
```

Then run command

```
tsc test.ts
```

to compile and get output `test.js`

```js
let isDone = false
```

More [native language] code examples in https://github.com/gasolin/lingascript/tree/master/examples/[lang] .


## Install LingaScript locally (within the project)

```
$ mkdir demo && cd demo && npm init
$ npm install lingascript-[lang]
```

Edit `package.json` with following configuration

```json
scripts: {
  "compile": "./node_modules/bin/tsc test.ts"
},
"devDependencies": {
  "lingascript-[lang]": "^3.3.1",
},
```

## License

Apache-2.0 License
