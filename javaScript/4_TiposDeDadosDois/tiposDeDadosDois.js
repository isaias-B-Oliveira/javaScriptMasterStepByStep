// Tipos de Dados Objeto em JavaScript
// Os objetos são tipos de dados mais complexos que armazenam coleções de chave-valor e podem conter métodos (funções dentro do objeto).
//  Diferente dos tipos primitivos, objetos são mutáveis e armazenados por referência,
//  ou seja, se você modificar um objeto, a mudança afeta todas as referências a ele.

// Object (Objeto Padrão)
// Os objetos são usados para armazenar múltiplos valores dentro de uma estrutura organizada.
// Declaramos um objeto usando {} e atribuímos pares chave: valor.
// Onde utilizar?
// Para representar uma entidade como um usuário, produto ou configuração.
// Exemplo:

const pessoa = {
    nome: "Lucas",
    idade: 25,
    cidade: "São Paulo",
};
console.log(pessoa); // { nome: 'Lucas', idade: 25, cidade: 'São Paulo' }

// Array (Lista de Valores)
// Arrays armazenam múltiplos valores em uma lista ordenada.
// Utilizam colchetes [] e os elementos são acessados por índices numéricos (começando do 0).
// Onde utilizar?
// Para armazenar uma lista de itens como produtos, tarefas ou resultados de uma pesquisa.
// Exemplo:

const frutas = ["Banana", "Maçã", "Morango"];
console.log(frutas); // [ 'Banana', 'Maçã', 'Morango' ]
