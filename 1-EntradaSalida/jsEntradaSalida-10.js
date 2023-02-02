/*Nicolas Costantini 
Division B
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{/*
	let importe;
	let porcentaje;
	let resultado;
	let descuento;

	porcentaje = -25;
	
	importe = parseInt (document.getElementById("txtIdImporte").value);

	descuento = importe * porcentaje / 100

	resultado = importe + descuento

	document.getElementById("txtIdResultado").value = resultado;
	*/

	let importe;
	let descuento;
	let resultado;
	let total;

	importe = parseInt (document.getElementById("txtIdImporte").value);

	descuento = prompt ("ingrese descuento");
	
	resultado = importe * parseInt (descuento) / 100;

	total = importe + resultado;
	
	document.getElementById("txtIdResultado").value = total;

}
/*
Ejercicio 10.bis: Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
pedirle al usuario un % de descuento y mostrar el importe en el cuadro de texto "RESULTADO"
*/


