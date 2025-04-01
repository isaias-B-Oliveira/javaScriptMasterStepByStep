//Os operadores lógicos em JavaScript são usados para combinar expressões booleanas (verdadeiro ou falso).
//  Eles ajudam a tomar decisões no código e são muito utilizados em estruturas condicionais.
//Exemplos:
// 1. Operador AND (&&)
// Ele retorna true somente quando todas as condições forem verdadeiras.
let idade = 25;
let temCarteira = true;

if (idade >= 18 && temCarteira) {
    console.log("Pode dirigir!");
} else {
    console.log("Não pode dirigir!");
}
// Saída: "Pode dirigir!" (pois as duas condições são verdadeiras)

// 2. Operador OR (||)
// Ele retorna true se pelo menos uma das condições for verdadeira.
let temIngresso = false;
let nomeNaLista = true;

if (temIngresso || nomeNaLista) {
    console.log("Pode entrar!");
} else {
    console.log("Entrada negada!");
}
// Saída: "Pode entrar!" (pois uma das condições é verdadeira)

// 3. Operador NOT (!)
// Ele inverte o valor de true para false e vice-versa.
let estaChovendo = true;

if (!estaChovendo) {
    console.log("Pode sair sem guarda-chuva!");
} else {
    console.log("Leve um guarda-chuva!");
}
// Saída: "Leve um guarda-chuva!" (pois !true vira false)

//Utilizando operadores lógicos em retornos
let usuarioLogado = true;
let permissaoAdmin = false;

let podeAcessarPainel = usuarioLogado && permissaoAdmin;
console.log(podeAcessarPainel);
// Saída: false (pois usuarioLogado é true, mas permissaoAdmin é false)

//Os operadores lógicos são muito usados para controlar fluxos de execução e fazer verificações em programas JavaScript.
// Eles são fundamentais para a lógica de programação e ajudam a criar condições complexas.
