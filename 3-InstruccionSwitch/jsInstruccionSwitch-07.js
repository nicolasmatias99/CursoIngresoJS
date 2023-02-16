//NICOLAS COSTANTINI
function mostrar()
{
	let destino 

	destino = document.getElementById("txtIdDestino").value;
	
	switch(destino){
		
		case "Bariloche":
			alert("Se encuentra al Oeste");
			break;

		case "Cataratas":
			alert("Se encuentra al Norte");
			break;

		case "Mar del plata":
			alert("Se encuentra al Este");
			break;

		case "Ushuaia":
			alert("Se encuentra al Sur");
			break;
	}

}//FIN DE LA FUNCIÓN