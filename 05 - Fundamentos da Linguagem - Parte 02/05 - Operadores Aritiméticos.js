//Operador de Soma
var x=10;
var y;
y=x+5;

alert("Resultado do js operador de soma - x=10; y=x+5 = "+y+"<br><br>");

//Operador de Subtração
var x=10;
var y;
y=x-5;

alert("Resultado do js operador de subtração - x=10; y=x-5 = "+y+"<br><br>");


//Operador de Divisão
var x=10;
var y;
y=x/5;

alert("Resultado do js operador de divisão - x=10; y=x/5 = "+y+"<br><br>");


//Operador de multiplicação
var x=10;
var y;
y=x*5;

alert("Resultado do js operador de multiplicação - x=10; y=x*5 = "+y+"<br><br>");


//Operador de resto
var x=10;
var y;
y=x%3;

alert("Resultado do js operador de resto - x=10; y=x%3 = "+y+"<br><br>");

//Operador de incremento
var x=10;
var y;
y=x;
y++;

alert("Resultado do js operador de incremento - x=10; y=x; y++ = "+y+"<br><br>");

//Operador de decremento
var x=10;
var y;
y=x;
y--;

alert("Resultado do js operador de decremento - x=10; y=x; y-- = "+y+"<br><br>");


//Outras formas de incrementar
var x=10;
x += 5;

alert("Resultado do js outra forma de incremento: x=10; x += 5 = "+x+"<br><br>");


//Outras formas de decrementar
var x=10;
x -= 5;

alert("Resultado do js outra forma de decrementar: x=10; x -= 5 = "+x+"<br><br>");

/*
 * No caso de soma com incremento faz a soma e depois o incremento, exemplo:
 * var x = 10;
 * var y;
 * y = x++ + 5; neste caso y irá receber 10 + 15 e a variável x irá incrementar em 1 = 11
 * se imprimir x o resultado será 11 se imprimir y o resultado será 15;
 * */

//Teste somando com uma string 01
var x=10;
var y;
y=x+"3";

//Se soma um número com ma string ocorre uma concatenação o restante é realizado uma conversão
alert("Resultado do js operador de soma com string - x=10; y=x+'3' = "+y+"<br> Tipo de Dados de y: "+typeof(y)+"<br><br>");

//Teste subtração com uma string 02
var x=10;
var y;
y=x-"3";

alert("Resultado do js operador de subtração com string - x=10; y=x-'3' = "+y+"<br> Tipo de Dados de y: "+typeof(y)+"<br><br>");

//Teste multiplicação com uma string 03
var x=10;
var y;
y=x*"3";

alert("Resultado do js operador de multiplicação com string - x=10; y=x*'3' = "+y+"<br> Tipo de Dados de y: "+typeof(y)+"<br><br>");

//Teste divisão com uma string 04
var x=10;
var y;
y=x/"3";

alert("Resultado do js operador de divisão com string - x=10; y=x/'3' = "+y+"<br> Tipo de Dados de y: "+typeof(y)+"<br><br>");
