//Função dinâmica para formatação de CEP, CPF, Telefone etc. é só passar a mascará
function formatar(mascara, documento){
  var i = documento.value.length;
  var saida = mascara.substring(0,1);
  var texto = mascara.substring(i)
  
  if (texto.substring(0,1) != saida){
            documento.value += texto.substring(0,1);
  }
  
}


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

function validarEmail(input){
	var email = input.value;
	if(!verificarTextoValido(email)){
		return false;
	}else{
		//A função indexOf() irá retornar -1 se o elemento não existir
		//Se o elemento existir vai retorna a posição atual;
		var indice = email.indexOf("@");
		
		//Verifica se existe o @
		if(indice > 2){
			return true;
		}else{
			return false;
		}
	}
}

function validarData(input){
	var data = input.value.split("/");
	if (data.length < 3) {
		return false;
	}
	
	for(var i = 0; i <  data.length; i++){
		//Valida os dias
		if(i == 0 && (isNaN(data[i]) || data[i] < 1 || data[i] > 31) ){
			return false;
		}
		
		//Valida os meses
		if(i == 1 && (isNaN(data[i]) || data[i] < 1 || data[i] > 12) ){
			return false;
		}
		
		if(i == 2 && (isNaN(data[i]) || data[i] < 1900 || data[i] > 2050) ){
			return false;
		}
	}
	return true;
}

function formatarData(input){
	var data = input.value;
	//Se o comprimeto da data for maior que 2 e a barra não existir
	if(data.length > 2 && data.indexOf("/") == -1){
		data = data.substring(0, 2) + "/" + data.substring(2, data.length);
	}
	
	//Se o comprimento for maior do que 5 e se o index da barra a partir da posição 5 se não existir adiciona
	if(data.length > 5 && data.indexOf("/", 5) == -1){
		data = data.substring(0, 5) + "/" + data.substring(5, data.length);
	}
	
	input.value = data;
}

//Função para centralizar no campo que tiver advergência
function rolagem(elemento){
	var posicaoY = 0;
	
	//Verificar se existe o offSetParant (Distância do elemento para o elemento pai)
	if(elemento.offsetParent){
		do{
			posicaoY += elemento.offsetTop; //Pega a distância do topo
			elemento = elemento.offsetParent;
			
		//Se estiver o elemento continua
		}while(elemento)
	}
	
	var tamanhoJanela = window.innerHeight; 		 //Pega o tamanho da tela do computador
	var posicaoAtual = self.pageYOffset; 			 //`Posição atual da página
	var posicaoFinal = posicaoY - (tamanhoJanela/4); //Posição final desejada
	
	//Enquanto a posição atual for maior do que a posição final será decrementado a posição atual em 5 pixel
	while(posicaoAtual > posicaoFinal){
		posicaoAtual -= 5;
		window.scroll(0, posicaoAtual);
	}
	
}

//Formatar CPF
function mascara(o,f){
	v_obj=o
	v_fun=f
	setTimeout("execmascara()",1)
}

function execmascara(){
	v_obj.value=v_fun(v_obj.value)
}

function cpf_mask(v){
	v=v.replace(/\D/g,"")                 //Remove tudo o que não é dígito
	v=v.replace(/(\d{3})(\d)/,"$1.$2")    //Coloca ponto entre o terceiro e o quarto dígitos
	v=v.replace(/(\d{3})(\d)/,"$1.$2")    //Coloca ponto entre o setimo e o oitava dígitos
	v=v.replace(/(\d{3})(\d)/,"$1-$2")   //Coloca ponto entre o decimoprimeiro e o decimosegundo dígitos
	return v
}


//Conjunto de funções para formatar o telefone
function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}

function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}

function mtel(v){
    v=v.replace(/\D/g,"");             		//Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}

function id( el ){
	return document.getElementById( el );
}