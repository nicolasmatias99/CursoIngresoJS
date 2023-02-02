/*Nicolas Costantini
 Div B 
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	/*let numeroUno;
	let numeroDos;
	let resto;

	numeroUno = document.getElementById("txtIdNumeroDividendo").value;

	numeroDos = document.getElementById("txtIdNumeroDivisor").value;
	
	resto = parseInt(numeroUno) % parseInt(numeroDos);
    
	alert ("el resto es " + resto)*/

	//--------------------------------------------------------------------------//
	/*
	Ejercicio 8.bis: Ingresar dos numeros por id
	Se pide:
	mostrar por alert:
	a) La suma de los dos numeros
	b) El promedio de los numeros
	c) El resto de los numeros (el primero en modulo del segundo)
	*/
	//--------------------------------------------------------------------------//

	let numeroUno;
	let numeroDos;
	let suma;
	let promedio;
	let resto;

	numeroUno = parseInt (document.getElementById("txtIdNumeroDividendo").value);
	numeroDos = parseInt (document.getElementById("txtIdNumeroDivisor").value);

	suma = numeroUno + numeroDos;
	promedio = (numeroUno + numeroDos) / 2; 
	resto = numeroUno % numeroDos;

	alert (suma);
	alert (promedio);
	alert (resto);
}