#!/usr/bin/env node
'use strict'

var fc = require('filecompare');
const path = require("path");

let targetLang = 'cn'
let [,,...args] = process.argv
if (args[0]) {
  targetLang = args[0]
}

function getPath(filePath) {
  return path.resolve(filePath)
}

var cb = function(isEqual) {
  console.log(`tests: ${isEqual ? 'PASS' : 'FAIL'}`);
  if (!isEqual) {
    console.error('files are not equal to the reference output')
    return process.exit(1)
  }
}

let sample = getPath('tests/reference.js')

console.log('\n\ncheck EN outputs...')
let enOutput = getPath('examples/en/built/basic.js')
fc(enOutput,sample,cb);

console.log(`\n\ncheck ${targetLang.toUpperCase()} outputs...`)
let targetOutput = getPath(`examples/${targetLang}/built/basic.js`)
fc(targetOutput,sample,cb);
