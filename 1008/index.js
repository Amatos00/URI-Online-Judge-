var input = require('fs').readFileSync('stdin', 'utf8');

var valores = input.split("\n");

var idfuncionario = parseInt(valores.shift());
var qtdhoras = parseFloat(valores.shift());
var salario = parseFloat(valores.shift());

salario = (qtdhoras * salario); 

console.log("NUMBER = " + idfuncionario);
console.log("SALARY = U$ " + salario.toFixed(2));



