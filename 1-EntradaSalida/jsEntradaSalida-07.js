/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numero1;
	let numero2;
	let resultado;
	
	numero1 = document.getElementById("txtIdNumeroUno").value;

	numero2 = document.getElementById("txtIdNumeroDos").value;

	resultado = parseInt(numero1) + parseInt(numero2)

	alert ("su restultado es " + resultado)
}

function restar()
{
	numero1 = document.getElementById("txtIdNumeroUno").value;

	numero2 = document.getElementById("txtIdNumeroDos").value;

	resultado = parseInt(numero1) - parseInt(numero2)

	alert ("su restultado es " + resultado)
}

function multiplicar()
{
	numero1 = document.getElementById("txtIdNumeroUno").value;

    numero2 = document.getElementById("txtIdNumeroDos").value;

    resultado = parseInt(numero1) * parseInt(numero2)

    alert ("su restultado es " + resultado)
	
}

function dividir()
{
	numero1 = document.getElementById("txtIdNumeroUno").value;

	numero2 = document.getElementById("txtIdNumeroDos").value;

	resultado = parseInt(numero1) / parseInt(numero2)

	alert ("su restultado es " + resultado)
}

/*
Nicolas Costantini
 Div B 
 */