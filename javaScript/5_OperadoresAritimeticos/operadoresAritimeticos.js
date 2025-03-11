// Operadores Aritméticos em JavaScript
// Os operadores aritméticos são usados para realizar cálculos matemáticos em JavaScript.
// Eles podem ser usados com números inteiros (number), decimais (float).

// Operadores Aritméticos

// (+)	Adição	10 + 5	15
// (-)	Subtração	10 - 5	5
// (*)	Multiplicação	10 * 5	50
// (/)	Divisão	10 / 2	5
// (%)	Módulo (resto da divisão)	10 % 3	1
// (**)	Exponenciação	2 ** 3	8

let a = 10;
let b = 5;

console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2
console.log(a % 3); // 1 (Resto da divisão de 10 por 3)
console.log(2 ** 3); // 8 (2 elevado a 3)

// Ordem de Precedência
// A ordem dos operadores segue as regras matemáticas:

// 1️- Parênteses ( ) têm maior prioridade.
// 2️- Exponenciação ** é resolvida antes de multiplicação e divisão.
// 3️- Multiplicação *, Divisão / e Módulo % vêm antes da soma e subtração.
// 4️- Soma + e Subtração - são resolvidas por último.
// Exemplo:

let resultado = 10 + 5 * 2;
console.log(resultado); // 20 (Multiplica antes de somar)

let resultado2 = (10 + 5) * 2;
console.log(resultado2); // 30 (Soma primeiro por causa dos parênteses)

// Operadores de Atribuição Aritmética
// (+=)	x = x + y	x += 5
// (-=)	x = x - y	x -= 5
// (*=)	x = x * y	x *= 5
// (/=)	x = x / y	x /= 5
// (%=)	x = x % y	x %= 5
// (**=) x = x ** y	x **= 5

// Onde utilizar?
// Quando queremos modificar uma variável sem reescrevê-la várias vezes.
// Exemplo:
let numero = 10;

numero += 5; // Agora é 15
numero *= 2; // Agora é 30
numero /= 3; // Agora é 10

console.log(numero); // 10
