/*Nicolas Costantini
 Div B 
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    let sueldo;
	let porcentaje;
	let descuento;
	let restultado;


	porcentaje = 10;
	
	sueldo = parseInt (document.getElementById("txtIdSueldo").value);
	
	descuento = sueldo * porcentaje / 100;

	restultado = sueldo + descuento;

	document.getElementById("txtIdResultado").value = restultado;



	
}
