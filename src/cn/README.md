# LingaScript-cn

LingaScript-cn 是支持简体中文关键字的 TypeScript 编译器。语法衍生自 TypeScript (和 Javascript)。

LingaScript-cn 可以将以简体中文撰写的脚本编译成 Javascript，可在任意支持Javascript的环境中执行。

欢迎探索[非英语编程语言](https://en.wikipedia.org/wiki/Non-English-based_programming_languages) 的朋友一同参与，我们可以通过改进共用的核心，來提供更好用的非英语编程语言工具。具体请查看[LingaScript源码库](https://github.com/gasolin/lingascript/)

[Non-english programming](https://en.wikipedia.org/wiki/Non-English-based_programming_languages) adventurers can easily add your local language, work together to improve the same core, and get benifit for the shared programming tools with better local language support. [Check out the LingaScript repo](https://github.com/gasolin/lingascript/).

## 支持的本地语言

LingaScript-cn 支持简体中文与英文关键字（Keywords），要支持別的语言需分別安裝不同套件。

- English (en, [derived from TypeScript](http://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html), Package: Typescript [![npm version](https://img.shields.io/npm/v/typescript.svg)](https://www.npmjs.com/package/typescript))
- 简体中文 (Simplified Chinese, cn, [支援的关键字](https://github.com/gasolin/lingascript/blob/master/src/cn/language.ts), 套件: lingascript-cn [![npm version](https://img.shields.io/npm/v/lingascript-cn.svg)](https://www.npmjs.com/package/lingascript-cn))
- 正體中文 (Traditional Chinese, tw, [支援的關鍵字](https://github.com/gasolin/lingascript/blob/master/src/tw/language.ts), 套件: lingascript-tw [![npm version](https://img.shields.io/npm/v/lingascript-tw.svg)](https://www.npmjs.com/package/lingascript-tw))



## 使用说明

可使用npm命令安裝 LingaScript：

```
npm install -g lingascript-cn
```

安裝后可得到`tsc`命令. (和`TypeScript`相同)

建立`测试.ts`文件如下

```js
变量 一切 = 假的;
```

或加上 TypeScript 声明

```js
变量 一切:真假 = 假的;
```

然后使用以下命令编译
```
tsc 测试.ts
```

则会输出`测试.js`

```js
var 一切 = false;
```

LingaScript 支持所有 TypeScript 编译器的命令，所以也可以用如下指令

```
tsc examples/cn/src/测试.ts --outFile test.js
```

将`测试.ts`输出成`test.js`。


更多范例可参考 https://github.com/gasolin/lingascript/tree/master/examples/cn .


## 本地安裝 (而非全局安裝)

先创建源码文件夹，并安裝 lingascript-cn

```
$ mkdir demo && cd demo && npm init
$ npm install lingascript-cn
```

编辑`package.json`加入以下设置

```json
scripts: {
  "compile": "./node_modules/bin/tsc test.ts"
},
"devDependencies": {
  "lingascript-cn": "^0.1.0",
},
```

即可在源码中使用中文关键字开发程序。


## 版本历程

查看 https://github.com/gasolin/lingascript/blob/master/CHANGELOG.md


## 授权

Apache-2.0 License
