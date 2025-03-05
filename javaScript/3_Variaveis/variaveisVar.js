// var (Antiga forma de declarar variáveis)
// Escopo: var tem escopo de função, ou seja, se for declarada dentro de uma função,
//  só existirá dentro dela. Se for declarada fora, será global.
// Hoisting: Variáveis declaradas com var são içadas (hoisted) para o topo do escopo,
//  mas seu valor será undefined até a atribuição.
// Reatribuição e Redeclaração: Pode ser reatribuída e redeclara dentro do mesmo escopo.

// Ex e Sintaxe:
console.log(a); // undefined (devido ao hoisting)
var a = 10;
console.log(a); // 10

var x = 5;
var x = 20; // Redeclaração permitida
console.log(x); // 20

//Problema: Como var ignora blocos { }, pode causar bugs inesperados.
