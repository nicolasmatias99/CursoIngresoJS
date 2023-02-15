/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let acumulador;
	let respuesta;
	let positivos;
	let negativos;

	positivos = 0;
	negativos = 1;
	respuesta = "si";

	while(respuesta == "si")
	{
		acumulador = parseInt(prompt("Ingrese un número"));

		if (acumulador >= 0)
		{
			positivos += acumulador;
		}
		else 
		{
			negativos =  acumulador * negativos;
		}

		respuesta = prompt("Ingrese: 'si' para seguir" );
	}

	document.getElementById("txtIdSuma").value = positivos;
	document.getElementById("txtIdProducto").value = negativos;

}//FIN DE LA FUNCIÓN