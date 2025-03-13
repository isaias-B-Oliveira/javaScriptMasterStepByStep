// Estruturas de Controle if e else em JavaScript
// As estruturas if e else são usadas para tomar decisões no código, executando diferentes blocos de código dependendo de uma condição.

// if (Se...)
// A estrutura if verifica se uma condição é verdadeira (true).
// Se for, o bloco de código dentro das { } é executado.

// Sintaxe
if (condicao) {
    // Código executado se a condição for verdadeira
}

//Exemplo:
let idade = 18;

if (idade >= 18) {
    console.log("Você é maior de idade.");
}
// Saída: "Você é maior de idade." (Porque idade é 18)

// if...else (Se...Senão...)
// Se a condição no if for falsa, o bloco else é executado.

// Sintaxe:
if (condicao) {
    // Código executado se a condição for verdadeira
} else {
    // Código executado se a condição for falsa
}

// Exemplo

let idade2 = 16;

if (idade2 >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}
//Saída: "Você é menor de idade." (Porque idade é 16)

// if...else if...else (Múltiplas Condições)
// Quando há mais de uma condição a ser verificada, usamos else if.

// Sintaxe:
if (condicao1) {
    // Código executado se a condição1 for verdadeira
} else if (condicao2) {
    // Código executado se a condição2 for verdadeira
} else {
    // Código executado se nenhuma condição for verdadeira
}

// Exemplo:
let nota = 75;

if (nota >= 90) {
    console.log("Nota A");
} else if (nota >= 80) {
    console.log("Nota B");
} else if (nota >= 70) {
    console.log("Nota C");
} else {
    console.log("Reprovado");
}
// Saída: "Nota C" (Porque nota é 75)

// if Ternário (? :)
// O operador ternário é uma forma mais curta de escrever if...else.

// Sintaxe:
// condição ? valorSeVerdadeiro : valorSeFalso
let idade3 = 20;
let status = idade3 >= 18 ? "Maior de idade" : "Menor de idade";

console.log(status);
// Saída: "Maior de idade" (Porque idade é 20)

// Onde Utilizar if e else?
// 1️- Validação de formulários – Ex.: Se um campo estiver vazio, mostrar uma mensagem de erro.
// 2️- Controle de acesso – Ex.: Se o usuário não estiver logado, redirecioná-lo para a tela de login.
// 3️- Cálculos condicionais – Ex.: Aplicar um desconto apenas se a compra for maior que R$100.
// 4️- Classificação de notas – Ex.: Verificar se um aluno foi aprovado.
// 5️- Interação com o usuário – Ex.: Mostrar mensagens diferentes com base no horário do dia.
