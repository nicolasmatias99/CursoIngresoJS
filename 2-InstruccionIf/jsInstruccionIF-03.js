//NICOLAS COSTANTINI
function mostrar()
{
	//tomo la edad  
	
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad >= 18)
	{

		alert ("Usted es mayor de edad");

	}
	else
	{ 
		(edad <= 17); 
	
		alert("Usted es menor de edad");
	}

}//FIN DE LA FUNCIÓN