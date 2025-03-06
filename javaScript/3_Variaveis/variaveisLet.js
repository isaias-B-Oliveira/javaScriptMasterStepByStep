// let (Recomendado para variáveis mutáveis)
// Escopo: let tem escopo de bloco, ou seja, só existe dentro do { } onde foi declarada.
// Hoisting: A variável é içada, mas não pode ser acessada antes da declaração (gera erro).
// Reatribuição: Pode ser reatribuída, mas não pode ser redeclarada no mesmo escopo.

// Ex e Sintaxe:

// console.log(b); // Erro: Não é possível acessar 'b' antes da inicialização porque a variável é içada (hoisting). no caso 'b' não foi inicializada (Declarada).
let b = 20;
console.log(b); // 20

let z = 10;
// let z = 30; // essa linha gerarar um Erro: O indentificador 'z' ja foi declarado e nao pode ser redeclarado no mesmo escopo.

z = 30; // Ok, reatribuição permitida, essa linha não gera erro porque e uma (reatribuição) e não uma [redeclaração].
console.log(z); // 30
