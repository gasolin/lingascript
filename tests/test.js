var fc = require('filecompare');
const fs = require('fs');
const path = require("path");

function getPath(filePath) {
  return path.resolve(filePath)
}

var cb = function(isEqual) {
  console.log(`EN tests: ${isEqual ? 'PASS' : 'FAIL'}`);
  if (!isEqual) {
    console.error('EN files are not equal to the reference output')
    return process.exit(1)
  }
}

let sample = getPath('tests/reference.js')

console.log('\n\ncheck EN outputs...')
let enOutput = getPath('examples/en/built/basic.js')
fc(enOutput,sample,cb);
