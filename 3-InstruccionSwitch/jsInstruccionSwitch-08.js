function mostrar()
{
	let destino 

	destino = document.getElementById("txtIdDestino").value;
	
	switch(destino){
		
		case "Bariloche":
			alert("Hace frío");
			break;

		case "Cataratas":
			alert("Hace calor");
			break;

		case "Mar del plata":
			alert("Hace calor");
			break;

		case "Ushuaia":
			alert("Hace frío");
			break;
	}

}//FIN DE LA FUNCIÓN