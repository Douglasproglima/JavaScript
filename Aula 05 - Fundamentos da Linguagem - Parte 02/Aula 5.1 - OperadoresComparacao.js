//==..: Igualdade;
function Igualdade(num1, num2){
	resultado = num1 == num2;
	return "num1 é igual a num2: ("+num1+" + "+num2+") = "+resultado;
}

//!=..: Diferença;
function Diferenca(num1, num2){
	resultado = num1 != num2;
	return "num1 é diferente a num2: ("+num1+" != "+num2+") = "+resultado;
}

//===.: Exatamente igual (Até o mesmo tipo);
function ExatamenteIgual(num1, num2){
	resultado = num1 === num2;
	return "num1 é exatamente igual a num2: ("+num1+" === "+num2+") = "+resultado;
}

//!==.: Exatamente diferente (Até o mesmo tipo);
function ExatamenteDiferente(num1, num2){
	
	resultado = num1 !== num2;
	return "num1 é exatamente diferente de num2: ("+num1+" !== "+num2+") = "+resultado;
}

//>...: Maior que;
function MaiorQue(num1, num2){
	resultado = num1 > num2;
	return "num1 é maior do que num2: ("+num1+" > "+num2+") = "+resultado;
}

//>=..: Maior igual;
function MaiorIgual(num1, num2){
	resultado = num1 > num2;
	return "num1 é maior ou igual do que num2: ("+num1+" >= "+num2+") = "+resultado;
}


//<...: Menor que;
function MenorQue(num1, num2){
	resultado = num1 < num2;
	return "num1 é menor do que num2: ("+num1+" < "+num2+") = "+resultado;
}

//<=..: Menor igual;
function MenorIgual(num1, num2){
	resultado = num1 <= num2;
	return "num1 é menor ou igual do que num2: ("+num1+" <= "+num2+") = "+resultado;
}
