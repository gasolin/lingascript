var fc = require('filecompare');
const fs = require('fs');
const path = require("path");

let output = getPath('built/basic.js')
let sample = getPath('tests/reference.js')

function getPath(filePath) {
  return path.resolve(path.join('examples/en', filePath))
}

var cb = function(isEqual) {
  console.log(`en tests: ${isEqual ? 'pass' : 'fail'}`);
  if (!isEqual) {
    console.error('en file not equal')
    return process.exit(1)
  }
}

fc(output,sample,cb);
