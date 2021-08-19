//para mostrar um alerta na página
alert('Hello World!');

//os comentarios são feitos utilizando duas barras, como por exemplo:
//alert("Olá mundo!")

//comentários de multiplas linhas são feitas utilizando asterisco e barras, como por exemplo:
/*oi 
galera*/

//variaveis:
var mensagem = "Hello World!"

alert(mensagem);

//operações matematicas: 
var a = 2;
var b = 3;
var c = "a";

var soma = a+b
var subtracao = a-b;
var multiplicacao = a*b;
var divisao = a/b;

alert(soma);
alert(subtracao);
alert(multiplicacao);
alert(divisao);

//estrutura condicional:
alert(b%2); //modulo é o resto da divisão
//fazer uma estrutura condicional para saber se o numero é par ou impar 
if(c%2 == 1){ //verifica se uma condição é verdadeira
    alert("Número ímpar");
}else if(c%2 == 0){
    alert("Número Par");
}
else{ //else executa todos os comandos que tiverem dentro caso o if falhe
    alert("Valor inválido")
}

//laços ou estrutura de repetição:
//while é uma estrutura que vai repetir um determinado bloco de código enquanto a condição for valida
var i =0;

while(i < 3){
    alert(i);

    i = i+1;
}

//for executa para uma determinada condição
var j;

for(j = 0; j <3; j++){
    alert(j);
}