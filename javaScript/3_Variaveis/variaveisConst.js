// const (Para valores constantes)
// Escopo: Igual ao let, tem escopo de bloco.
// Hoisting: Também sofre hoisting, mas não pode ser usada antes da declaração.
// Reatribuição: Não pode ser reatribuída depois de declarada.

// Ex e Sintaxe:
//console.log(a); // Erro: Não é possível acessar 'a' antes da inicialização porque a variável é içada (hoisting). no caso 'a' não foi inicializada (Declarada).

const d = 50;
// d = 60;
// Erro: Não é possível reatribuir uma variável constante.

// const d = 60; // Erro: O indentificador 'd' ja foi declarado e nao pode ser redeclarado no mesmo escopo.

console.log(d); // 50

// A variável constante é utilizada para valores que não devem ser alterados durante a execução do programa. Por exemplo, o valor de PI, que é 3.14159265358979323846, é uma constante, pois não deve ser alterado. Se você tentar alterar o valor de PI, o programa não funcionará corretamente. Por isso, é recomendado usar const para valores que não devem ser alterados. Se você precisar de uma variável que possa ser alterada, use let.
