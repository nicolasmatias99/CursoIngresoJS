//NICOLAS COSTANTINI
function mostrar()
{
	//tomo la edad  
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	if (edad < 13 || edad > 17)
	{
		alert ("usted no es adolescente");
	}
}//FIN DE LA FUNCIÓN