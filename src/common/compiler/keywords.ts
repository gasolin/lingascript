namespace ts {
    export const keywords = {
        isKeywordFor: function(value: __String) {
            return value === "for" || value === unicodeDic.Keywords.for;
        },
        isKeywordModule: function(value: __String) {
            return value === "module" || value === unicodeDic.Keywords.module;
        },
        isPromisePromise: function(value: __String) {
            return value === "Promise" || value === unicodeDic.Promise.Promise;
        },
        isArrayLength: function(value: __String) {
            return value === 'length' || value === unicodeDic.Array.length;
        },
        isArrayPush: function(value: __String) {
            return value === 'push' || value === unicodeDic.Array.push;
        },
        isArrayUnshift: function(value: __String) {
            return value === 'unshift' || value === unicodeDic.Array.unshift;
        },
        isFunctionEval: function(value: __String) {
            return value === "eval" || value === unicodeDic.Function.eval;
        },
        isFunctionArguments: function(value: __String) {
            return value === 'arguments' || value === unicodeDic.Function.arguments;
        },
        isObjectPrototype: function(value: __String) {
            return value === 'prototype' || value === unicodeDic.Object.prototype;
        },
        isJavaScriptUseStrict: function(value: __String) {
            return value === '"use strict"' || value === "'use strict'"
              || value === `"${unicodeDic.JavaScript.use_strict}"` || value === `'${unicodeDic.JavaScript.use_strict}'`;
        },
        isJavaScriptGlobal: function(value: __String) {
            return value === "global" || value === unicodeDic.JavaScript.global;
        },
        isJavaScriptSelf: function(value: __String) {
            return value === "self" || value === unicodeDic.JavaScript.self;
        },
        isJavascriptWindow: function(value: __String) {
            return value === "window" || value === unicodeDic.JavaScript.window
        },
        isJavaScriptExports: function(value: __String) {
            return value === "exports" || value === unicodeDic.JavaScript.exports;
        },
        isSymbolSymbol: function(value: __String) {
            return value === "Symbol" || value === unicodeDic.Symbol.Symbol;
        },
        isMetaDataTarget: function(value: __String) {
            return value === "target" || value === unicodeDic.MetaData.target;
        },
        isMetaDataMeta: function(value: __String) {
            return value === "meta" || value === unicodeDic.MetaData.meta;
        },
    };
}
