console.log("Olá Mundo 2");

/* Tipo de dados 
    Numbers: */

//Podem ser numeros inteiros, numeros decimais, numeros negativos inteiros e negativos decimais
let numeroInteiro = 100;
let numeroDecimal = 5.38;
let numeroNegativo = 200.99;

//Operadores matemáticos
let numero = 5;
let numero2 = 7;
let resultado = numero + numero2;

let resultado = numero * 0.5;

//Cuidado, divisão por 0 pode causar erros
let resultado = numero / 0;

//Para saber quais são os valores máximos e minimos
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

/* Tipo de dados 
    Strings: */

//São valores de texto, normalmente chamados de "cadeias de caracteres"
let = "Olá Mundo";

//Para adicionar caracteres especiais
let caracteresEspeciais = "Lorem \n Ipsum \\ dolar ' \" amet";

/* 
    \n = Nova linha 
    \\: exibe a \
    \': Exibe '
    \" Exibe "
    */

//Concatenação de Strings
//Utilizando o sinal de +
let ola = "Olá";
let mundo = "Mundo";

let olaMundo = ola + mundo;

//Utilizando o String.concat
let olaMundo = ola.concat(mundo);
//Este método tambem permite concatenar diversas Strings
let olaMundo = ola.concat(mundo, "frase", ola);

//Template de Strings
let olaMundo = `${ola} ${mundo} ${1 + 1}`;

/* Tipo de dados 
    Booleans: */

//São tipos de dados que possuem apenas dois valores: True ou False
//Os valores true e false não são escritos entre aspas
let verdadeiro = true;
let falso = false;
//Uma das formas mais comuns de se obter valores booleanos é através de comparações

//true:
let comparacao = 1 == 1;

//false:
let comparacao2 = 1 > 5;

//true
let comparacaoString = "banana" == "banana";

//Para fazer comparações que levam em consideração o valor e o tipo do dado, utilize ===

//true
console.log(1 == "1");

//false
console.log(1 === "1");

/* Tipo de dados 
    Array: */

//´´E uma lista ou coleçã ode dados que pode ser acessada por índice, para criar um vetor vazio basta criar uma variável e atribuir [] a ela.
let vetor = [];

//Atribuindo valores: você pode criar um vetor com seus valores separados por vírgula
let vetor = [1, 22, 0, 100];

//Você pode adicionar valores de qualquer tipo no vetor.
let vetor = [1, "Olá Mundo", true, [1, 2, 3]];

//Acessando valores: Os valores podem ser acessados através de seu índice
let vetor = [1, 22, 0, 100];

console.log(vetor[1]);

//Alterando e atribuindo valores pelo índice:

/* Com o índice você pode:

a) Alterar um valor existente
b) Inserir um novo valor em uma posição específica
    */

let vetor = [11, 21, 23, 433, 50];

// Altera o valor da primeira posição
vetor[0] = 9000;

//Insere um valor novo após o ultimo elemento
vetor[5] = 7;

/* Tipo de dados 
    Array: */

//Null: é um tipo de dado especial, ele representa a falta dde valor de qualquer outro tipo de dado
let x = null;

let y = 1;
y = null;

//Undefined: este tipo de dado aparece quanbdo criamos uma variável e tentamos acessar seu valor antes de ter atribuído algo a ela
let x;

console.log(x);

/* Undefined !== Null: undefined e null são diferentes

Resumindo, null ainda é um valor e undefined é quando o JavaScript não sabe qual o tipo de dado.

*/

/* Tipo de dados 
    Array: */

//Objeto: É um tipo de dado composto pelos outros tipos. Com ele, podemos organizar informações relacionadas em uma variável
let carro = {
  rodas: 4,
  portas: 2,
  nome: "um carro",
  aVenda: true,
};

//Criação: um objeto vazio é bem simples de se criar: 
let carro = {};

//No caso de um objeto com propriedades(variaveis), fazemos assim:
let carro = {
    rodas: 4,
    nome: "Carro"
}

//Caso você já tenha criado o objeto e queira adicionar um novo, você pode fazer de duas formas:
carro.portas = 2;

//ou:
carro["portas"] = 2;

//A alteração de dados funciona da mesma forma:
carro.rodas = 5;
carro.portas =4;
carro.nome = "Carrão";

carro["rodas"] = 3;
carro["portas"] = 2;
carro["nome"] = "Carrinho";
