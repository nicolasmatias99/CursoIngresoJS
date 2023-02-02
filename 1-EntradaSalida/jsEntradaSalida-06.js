/*Nicolas Costantini
 Div B 
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numeroUno;
	let numeroDos; 
    let suma;

	numeroUno = document.getElementById("txtIdNumeroUno").value;

	numeroDos = document.getElementById("txtIdNumeroDos").value;

	suma = parseInt (numeroUno) + parseInt (numeroDos);


	alert ("su resultado es " + suma);
}