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