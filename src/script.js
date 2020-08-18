var configMinuto;
var configSegundo;
var mostrarValor;
var evento = null;
var contador = null;
var minuto = 15;
var segundo = 0;

var configMinuto = minuto;
var configSegundo = segundo;

function IniciarCronometro(valor){
	this.evento = valor;
	this.mostrarValor = document.getElementById('mostrarValor');
	
	
	if (evento=="start"){
		if(!configMinuto){
			if(!this.validarNumero(this.configMinuto)){
				alert("Campo minuto não é um número!");
				return;
			}
			if(!this.validarNumero(this.configSegundo) || segundo.value > 59){
				alert("Campo segundo não é um número válido (0 a 59)!");
				return;
			}
			
			document.getElementById('min').readOnly = true;
			segundo.readOnly = true;
			document.getElementById('btnIniciar').disabled  = true;
			document.getElementById('btnResetar').disabled  = false;
			document.getElementById('btnPausar').disabled  = false;
			this.minuto = document.getElementById('min').value;
			this.segundo = segundo.value;
			
			document.getElementById('mostrarValor').classList.remove('mostrarValor');
			document.getElementById('mostrarValor').classList.add('mostrarValor2');
			document.getElementById('exibe').classList.remove('Classexibe');
			document.getElementById('exibe').classList.add('Classexibe2');
			
		}else{
			if(this.segundo == 0 && this.minuto != 0){
				this.segundo = 59;
				this.minuto--;
			}else{
				this.segundo--;
			}
			if(this.minuto == 0 && this.segundo == 0){
				document.getElementById('min').readOnly = false;
				segundo.readOnly = false;
				document.getElementById('btnIniciar').disabled  = false;
				document.getElementById('btnResetar').disabled  = true;
				document.getElementById('btnPausar').disabled  = true;
				this.mostrarValor.value = "00:00";
				
				document.getElementById('mostrarValor').classList.remove('mostrarValor2');
				document.getElementById('mostrarValor').classList.add('mostrarValor');
				document.getElementById('exibe').classList.remove('Classexibe2');
				document.getElementById('exibe').classList.add('Classexibe');
			
				clearTimeout(this.contador);
				return;
			}	
			
			novoMinuto = null;
			novoSegundo = null;
			if(this.minuto <= 9){
				novoMinuto = "0" + this.minuto;
			}else{
				novoMinuto = this.minuto;
			}
			if(this.segundo <= 9){
				novoSegundo = "0" + this.segundo;
			}else{
				novoSegundo = this.segundo;
			}
			this.mostrarValor.value = novoMinuto + ":" + novoSegundo;
		}
	}
	clearTimeout(this.contador);
	this.contador = setTimeout('IniciarCronometro(evento)', 1000);
}

function validarNumero(valor){
	return !isNaN(parseFloat(valor)) && isFinite(valor);
}



function PausarCronometro(){
	if(document.getElementById('btnPausar').value=="PAUSAR"){
		document.getElementById('btnPausar').value = "VOLTAR";
		this.evento = "pause";
	}else{
		document.getElementById('btnPausar').value = "PAUSAR";
		this.evento = "start";
	}
}

function ResetarCronometro(){
	document.getElementById('min').readOnly = false;
	segundo.readOnly = false;
	document.getElementById('btnIniciar').disabled  = false;
	document.getElementById('btnResetar').disabled  = true;
	document.getElementById('btnPausar').disabled  = true;
	document.getElementById('btnPausar').value = "PAUSAR";
	this.mostrarValor.value = "00:00";

document.getElementById('mostrarValor').classList.remove('mostrarValor2');
	document.getElementById('mostrarValor').classList.add('mostrarValor');
	document.getElementById('exibe').classList.remove('Classexibe2');
	document.getElementById('exibe').classList.add('Classexibe');

	clearTimeout(this.contador);
}
