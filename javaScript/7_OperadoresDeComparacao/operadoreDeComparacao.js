//(1) Igualdade e Identidade (== e ===)
// == → Compara os valores, permitindo conversão implícita.
// === → Compara os valores e os tipos, sem conversão.
// Exemplos:
console.log(5 == "5"); // true  (conversão implícita)
console.log(5 === "5"); // false (tipos diferentes)

console.log(null == undefined); // true  (ambos são valores "ausentes")
console.log(null === undefined); // false (tipos diferentes)
// Regra: Sempre prefira === para evitar comportamentos inesperados.

//(2) Maior (>), Maior ou Igual (>=)
// > → Verifica se o primeiro valor é estritamente maior que o segundo.
// >= → Verifica se o primeiro valor é maior ou igual ao segundo.
// Exemplos:
console.log(10 > 5); // true
console.log(10 >= 10); // true
console.log(5 > 10); // false
console.log("b" > "a"); // true (ordem na tabela ASCII)

//(3) Menor (<), Menor ou Igual (<=)
// < → Verifica se o primeiro valor é estritamente menor que o segundo.
// <= → Verifica se o primeiro valor é menor ou igual ao segundo.
// Exemplos:
console.log(5 < 10); // true
console.log(10 < 5); // false
console.log(10 <= 10); // true
console.log("apple" < "banana"); // true (ordem alfabética)

//(4) Comparando null e undefined
// Esses dois valores podem ter comparações confusas.
// Exemplos:
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(null > 0); // false
console.log(null >= 0); // true (!! cuidado !!)
console.log(undefined > 0); // false
console.log(undefined < 0); // false
// Evite usar comparações matemáticas com null e undefined, pois podem gerar resultados inesperados.

//(5) Diferença (!= e !==)
// != → Compara os valores, permitindo conversão implícita.
// !== → Compara valores e tipos, sem conversão.
// Exemplos:]
console.log(10 != "10"); // false (os valores são iguais)
console.log(10 !== "10"); // true  (número vs string)
console.log(null != undefined); // false
console.log(null !== undefined); // true
// Regra: Sempre prefira !== para evitar comportamentos inesperados.
