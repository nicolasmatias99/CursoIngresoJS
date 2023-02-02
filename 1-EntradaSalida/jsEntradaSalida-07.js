/*Nicolas Costantini
 Div B 
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numeroUno;
	let numeroDos;
	let resultado;
	
	numeroUno = document.getElementById("txtIdNumeroUno").value;

	numeroDos = document.getElementById("txtIdNumeroDos").value;

	resultado = parseInt(numeroUno) + parseInt(numeroDos)

	alert ("su restultado es " + resultado)
}

function restar()
{
	let numeroUno;
	let numeroDos;
	let resultado;

	numeroUno = document.getElementById("txtIdNumeroUno").value;

	numeroDos = document.getElementById("txtIdNumeroDos").value;

	resultado = parseInt(numeroUno) - parseInt(numeroDos)

	alert ("su restultado es " + resultado)
}

function multiplicar()
{
	let numeroUno;
	let numeroDos;
	let resultado;

	numeroUno = document.getElementById("txtIdNumeroUno").value;

    numeroDos = document.getElementById("txtIdNumeroDos").value;

    resultado = parseInt(numeroUno) * parseInt(numeroDos)

    alert ("su restultado es " + resultado)
	
}

function dividir()
{
	let numeroUno;
	let numeroDos;
	let resultado;
	
	numeroUno = document.getElementById("txtIdNumeroUno").value;

	numeroDos = document.getElementById("txtIdNumeroDos").value;

	resultado = parseInt(numeroUno) / parseInt(numeroDos)

	alert ("su restultado es " + resultado)
}
