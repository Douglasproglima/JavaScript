//Constantes não podem ter o seu valor alterado depois de inicializadas na declaração;
//Exemplo: const minhaConstante = valor;
var numero = 3; //Variáveis sem o uso da palavra var são de uso global;

const numeroConstante = 6;

function testeVarAndConst(){
	var numero = 10;
	alert("Variável interna na função: "+numero);
}

testeVarAndConst();
alert("Variável externa da função: "+numero);