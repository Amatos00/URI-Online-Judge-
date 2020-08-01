var input = require('fs').readFileSync('stdin', 'utf8');

var linhas = input.split("\n");

var A = parseFloat(linhas.shift());
var B = parseFloat(linhas.shift());
var C = parseFloat(linhas.shift());

var media = (A*2 + B*3 + C*5) / 10.0;

console.log("MEDIA = " + media.toFixed(1));





