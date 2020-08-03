var input = require('fs').readFileSync('stdin', 'utf8');

var linhas = input.split("\n");

var nome = linhas.shift();
var salariofixo = parseFloat(linhas.shift());
var totalvendas = parseFloat(linhas.shift());

var comissao = 0.15 * totalvendas;
var salariofinal = salariofixo + comissao;

console.log("TOTAL = R$ " + salariofinal.toFixed(2));