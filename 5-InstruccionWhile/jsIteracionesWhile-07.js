/*NICOLAS COSTANTINI
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let contador;
	let acumulador;
	let respuesta;

	contador = 0;
	acumulador = 0;
	respuesta="si";

	while(respuesta == "si")
	{
		acumulador += parseInt(prompt("Ingrese un número"));
		contador ++;
		respuesta = prompt("Ingrese: 'si' para seguir" );
	}

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador/contador;

}//FIN DE LA FUNCIÓN