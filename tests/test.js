var fc = require('filecompare');
const fs = require('fs');
const path = require("path");

const TARGET_LANG = 'cn'

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

console.log(`\n\ncheck ${TARGET_LANG.toUpperCase()} outputs...`)
let targetOutput = getPath(`examples/${TARGET_LANG}/built/basic.js`)
fc(targetOutput,sample,cb);
