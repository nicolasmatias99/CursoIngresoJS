/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;
	
	sexoIngresado = prompt("Ingrese f ó m");

	while(!(sexoIngresado == "f" || sexoIngresado == "m"))
	{
		sexoIngresado = prompt("Error: ingrese f ó m");
	}

	if (sexoIngresado == "f")
	{
		document.getElementById("txtIdSexo").value = "Femenino";
	}
	else
	{
		document.getElementById("txtIdSexo").value = "Masculino"
	}
	



}//FIN DE LA FUNCIÓN