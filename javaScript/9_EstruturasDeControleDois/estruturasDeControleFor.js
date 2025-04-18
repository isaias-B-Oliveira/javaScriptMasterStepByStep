// O que é o for?
// O for é uma estrutura de controle de repetição que permite executar um bloco de código um número determinado de vezes.
// O for é útil quando sabemos exatamente quantas vezes queremos repetir um bloco de código.
// Ele é amplamente utilizado em loops, como percorrer arrays, executar tarefas repetitivas e muito mais.

// Estrutura básica:
for (inicialização; condição; incremento) {
    // bloco de código a ser executado
}
// Partes do for:
// Inicialização: ocorre uma única vez, no início do laço.

// Condição: é avaliada antes de cada repetição. Se for true, o laço continua; se for false, ele para.

// Incremento: é executado ao final de cada repetição.
// Dicas
// O nome da variável (i, j, etc.) pode ser qualquer nome, mas i (de "index") é o mais comum.

for (let i = 1; i <= 5; i++) {
    console.log("Contador:", i);
}
// O que acontece aqui:
// let i = 1: começa com i igual a 1.
// i <= 5: enquanto i for menor ou igual a 5, repete.
// i++: incrementa 1 no i a cada volta.
// Saída:
// Contador: 1
// Contador: 2
// Contador: 3
// Contador: 4
// Contador: 5

// Usos comuns do for
// 1. Percorrer arrays (listas)
let frutas = ["maçã", "banana", "uva"];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
// Saída:
// maçã
// banana
// uva

// 2. Repetir ações com base em um número
for (let i = 1; i <= 10; i++) {
    console.log("Olá, mundo!");
}
// Saída:
// Olá, mundo!  sera repetido 10 vezes.

// 3. Criar lógicas condicionais em repetição
for (let i = 1; i <= 3; i++) {
    if (i % 2 === 0) {
        console.log(i, "é par");
    } else {
        console.log(i, "é ímpar");
    }
}
// Saída:
// 1 é ímpar
// 2 é par
// 3 é ímpar

//Você pode contar para trás também:
for (let i = 5; i >= 1; i--) {
    console.log("Contador:", i);
}
// Saída:
// Contador: 5, 4, 3, 2, 1

// Você pode contar de 2 em 2, 5 em 5, etc.:
for (let i = 0; i <= 10; i += 2) {
    console.log("Contador:", i);
}
// Saída:
// Contador: 0, 2, 4, 6, 8, 10
