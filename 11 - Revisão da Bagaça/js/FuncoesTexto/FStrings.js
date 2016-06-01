function verificarTextoValido(texto){
	if (texto.length < 1)
		return false;
		
	for(i = 0; i < texto.length; i++){
		var caractere = texto.charAt(i);
		if (caractere != " ") 
			return true;
	}
	return false;
}

function formatarNome(input){
	var nomes = input.value.split(" ");
	var resultado = "";
	for(i = 0; i < nomes.length; i++){
		if (nomes[i].length > 2) {
			resultado += nomes[i].charAt(0).toUpperCase() + nomes[i].substr(1, nomes[i].length);
		}else{
			resultado += nomes[i];
		}
		
		resultado += " ";
	}
	
	input.value = resultado;
}

function validarNome(input){
	var nomes = input.value.split(" ");
	var qtdeNomes = 0;
	for(i = 0; i < nomes.length; i++){
		if (verificarTextoValido(nomes[i])) {
			qtdeNomes++;
		}
		
		if (qtdeNomes > 1) {
			return true;
		}
	}
	return false;
}

function validarSexo(select){
	if (select.selectedIndex == 0) {
		return false;
	}else{
		return true;
	}
}

function verificaNumero(evt){
	var codigo = evt.which; //Captura o código do evento;
	var caractere = String.fromCharCode(codigo); //Verifica qual o caractere que este código representa
	
	//Se não for um número retorna false do contrário true
	if (isNaN(caractere) && codigo !=0 && codigo != 8) {
		return false;
	}else{
		return true;
	}
}