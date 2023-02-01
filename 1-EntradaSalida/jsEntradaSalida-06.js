/*Nicolas Costantini
 Div B 
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numero1;
	let numero2; 
    let suma;

	numero1 = document.getElementById("txtIdNumeroUno").value;

	numero2 = document.getElementById("txtIdNumeroDos").value;

	suma = parseInt (numero1) + parseInt (numero2);


	alert ("su resultado es " + suma);
}