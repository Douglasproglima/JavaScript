//Operador Ternário (?)
function OperadorTernario(num){
	//Por boas práticas utilizar no máximo dois operadores ternários;
	resultado = "Ternário: "+(num < 15) ? ("Número ("+num+") menor do que 15") : (num <= 17) ? ("Número ("+num+") menor ou igual a 17") : ("Número ("+num+") maior do que 17)");
	return resultado;
}

//Operador ,
function OperadorVirgula(num, num2){
	resultado = (num++, num++, num++, num);
	return "Vírgula - Número: "+num+", Número++:"+num++ +", Número++: "+num++ +", Número++: "+num++;
	
	//for(i = 0; i < 10; i++, a++); //exemplo utilizando o for e informando o (,) como uma segunda operação
}

//Operador delete
function OperadorDelete(num){
	//Objeto Number que recebe o atributo altura e largura;
	resultado = new Number(10);
	resultado.altura = 20;
	resultado.largura = 30;

	//deleta o valor da váriavel apenas se não estiver sido instânciada pela palavra var;
	return "num:"+resultado+" - num1: "+resultado.altura+" - num3: "+resultado.largura+" - delete altura: "+delete(resultado.altura)+" - delete largura: "+delete(resultado.largura);
//	
//	alert("Possui altura: " in resultado.altura);
//	alert("Valor do atributo altura: "+resultado.altura);	
//	alert("Deletou altura: "+delete(resultado.altura));
//	alert("Existe altura depois do delete? " in resultado.altura);
}

//Operador in
function OperadorIN(){
	resultado = '';
	return ;
}

//Operador instanceof
function OperadorInstanceOF(){
	resultado = '';
	return ;
}

//Operador new - Cria um objeto
function OperadorNew(){
	resultado = '';
	return ;
}

//Operador this
function OperadorThis(){
	resultado = '';
	return ;
}

//Operador typeof - Retorna o tipo da variável.
function OperadorTypeOf(){
	var texto = "Douglas Lima";
	resultado = new Number(5);
	
	alert("tipo texto: "+typeof(texto)+" - tipo resultado: "+typeof(resultado));
}

//Operador void - Simplesmente mata o valor da variável ou atributo
function OperadorVoid(){
	resultado = '';
	return ;
}