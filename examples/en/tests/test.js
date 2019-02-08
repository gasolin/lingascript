var fc = require('filecompare');
const fs = require('fs');
const path = require("path");

let output = getPath('built/hello.js')
let sample = getPath('tests/output.js')

function getPath(filePath) {
  return path.resolve(path.join('examples/en', filePath))
}

var cb = function(isEqual) {
  console.log(`en tests: ${isEqual ? 'pass' : 'fail'}`);
  if (!isEqual) {
    console.error('en file not equal')
  }
}

fc(output,sample,cb);
