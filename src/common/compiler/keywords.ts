namespace ts {
    export const keywords = {
        isKeywordFor: function(value: __String) {
            return value === "for" || value === unicodeDic.Keywords.for
        },
        isPromisePromise: function(value: __String) {
            return value === "Promise" || value === unicodeDic.Promise.Promise
        },
        isSymbolSymbol: function(value: __String) {
            return value === "Symbol" || value === unicodeDic.Symbol.Symbol
        },
        isFunctionEval: function(value: __String) {
            return value === "eval" || value === unicodeDic.Function.eval
        },
        isFunctionArguments: function(value: __String) {
            return value === 'arguments' || value === unicodeDic.Function.arguments
        },
        isJavaScriptExports: function(value: __String) {
            return value === "exports" || value === unicodeDic.JavaScript.exports
        }
    };
}
