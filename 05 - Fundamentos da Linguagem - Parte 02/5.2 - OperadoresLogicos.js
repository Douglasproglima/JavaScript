//Comparação com AND (&&)
function OperadorAND(num1){
	resultado = num1 <= 10 && num1 > 5;
	//Para que o resultado seja true, todos os operandos devem ser verdadeiros;
	return "Operador AND = num1 ("+num1+") é <= a 10 E ("+num1+") é > do 5: "+resultado;
}

//Comparação com ou (||)
function OperadorOR(num1){
	resultado = num1 <= 10 || num1 > 15;
	//Para que o resultado seja true, basta apenas uma das condições serem verdadeiras
	return "Operador OR: num1 ("+num1+") é <= a 10 OU ("+num1+") é > do 15: "+resultado;
}

//Comparação com o operador de negação (!)
function OperadorNeg(num1){
	resultado = !(num1 > 10);
	return "Operador !: num1 ("+num1+") é >= a 10: "+resultado;
}