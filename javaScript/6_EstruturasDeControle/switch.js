// O switch em JavaScript é uma estrutura de controle usada para tomar decisões com base no valor de uma variável ou expressão.
//  Ele é uma alternativa ao uso excessivo de if...else if...else,
//  tornando o código mais organizado e legível quando há várias condições a serem verificadas.

// Sintaxe:
switch (expressão) {
    case valor1:
        // Código a ser executado se expressão === valor1
        break;
    case valor2:
        // Código a ser executado se expressão === valor2
        break;
    default:
    // Código a ser executado se nenhum dos casos for correspondido
}
// A palavra-chave switch é seguida pela expressão que será avaliada.
// Se houver uma correspondência, o bloco de código dentro desse caso é executado.
// A palavra-chave break é usada para interromper a execução do bloco de código.
// Se não houver correspondência, o bloco de código dentro do bloco default é executado.

// Exemplo:
// Vamos supor que temos um sistema onde queremos exibir o nome do dia da semana com base em um número:
const dia = 3;

switch (dia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    case 4:
        console.log("Quarta-feira");
        break;
    case 5:
        console.log("Quinta-feira");
        break;
    case 6:
        console.log("Sexta-feira");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Número inválido!");
}
// Saída: Terça-feira
