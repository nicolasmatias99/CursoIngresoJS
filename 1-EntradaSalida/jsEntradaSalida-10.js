/*Nicolas Costantini
 Div B 
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe = document.getElementById("txtIdImporte").value;

	parseInt (document.getElementById("txtIdImporte").value);

	let resultado = document.getElementById("txtIdImporte").value * 0.75;
	
	document.getElementById("txtIdResultado").value = resultado;

}
