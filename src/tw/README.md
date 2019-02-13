# LingaScript-tw

LingaScript-tw 是支援正體（繁體）中文關鍵字的 TypeScript 編譯器。語法衍生自 Typescript (和 Javascript)。

LingaScript-tw 可以將以正體中文撰寫的腳本編譯成 Javascript，可在任意支援Javascript的環境中執行。

歡迎探索[非英語程式語言](https://en.wikipedia.org/wiki/Non-English-based_programming_languages) 的朋友一同參與，我們可以透過改進共用的核心，來提供更好用的非英語程式語言工具。具體請查看[LingaScript專案網站](https://github.com/gasolin/lingascript/)

[Non-english programming](https://en.wikipedia.org/wiki/Non-English-based_programming_languages) adventurers can easily add your local language, work together to improve the same core, and get benifit for the shared programming tools with better local language support. [Check out the LingaScript repo](https://github.com/gasolin/lingascript/).

## 支援的本地語言

LingaScript-tw 支援正體中文與英文關鍵字（Keywords），要支援別的語言需分別安裝不同套件。

- English (en, [derived from TypeScript](http://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html), Package: [Typescript](https://www.npmjs.com/package/typescript)))
- 简体中文 (Simplified Chinese, cn, [支援的关键字](https://github.com/gasolin/lingascript/blob/master/src/cn/language.ts), 套件: [lingascript-cn](https://www.npmjs.com/package/lingascript-cn))
- 正體中文 (Traditional Chinese, tw, [支援的關鍵字](https://github.com/gasolin/lingascript/blob/master/src/tw/language.ts), 套件: [lingascript-tw](https://www.npmjs.com/package/lingascript-tw))


## 使用說明

可使用npm命令安裝 LingaScript：

```
npm install -g lingascript-tw
```

安裝後可得到`tsc`命令. (和`Typescript`相同)

建立`測試.ts`檔案如下

```js
變量 一切都是 = 假的;
```

或加上Typescript宣告

```js
變量 一切都是:真假 = 假的;
```

然後使用以下命令編譯
```
tsc 測試.ts
```

則會輸出`測試.js`

```js
var 一切都是 = false;
```

LingaScript 支援所有TypeScript編譯器的命令，所以也可以用如下指令

```
tsc examples/tw/src/測試.ts --outFile test.js
```

將`測試.ts`輸出成`test.js`。


更多範例可參考 https://github.com/gasolin/lingascript/tree/master/examples/tw .


## 安裝到專案中 (而非安裝到全域)

先建立專案資料夾，並安裝 lingascript-tw

```
$ mkdir demo && cd demo && npm init
$ npm install lingascript-tw
```

編輯`package.json`加入以下設定

```json
scripts: {
  "compile": "./node_modules/bin/tsc test.ts"
},
"devDependencies": {
  "lingascript-tw": "^0.1.0",
},
```

即可在專案中使用中文關鍵字開發程式。


## 版本歷程

查看 https://github.com/gasolin/lingascript/blob/master/CHANGELOG.md


## 授權

Apache-2.0 License
