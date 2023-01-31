/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let numero1;
	let numero2;
	let resto;

	numero1 = document.getElementById("txtIdNumeroDividendo").value;

	numero2 = document.getElementById("txtIdNumeroDivisor").value;
	
	resto = parseInt(numero1) % parseInt(numero2);
    
	alert (resto)
}
