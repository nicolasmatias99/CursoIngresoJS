function mostrar()
{
	let edad;
	let estadoCivil;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	estadoCivil = document.getElementById("estadoCivil").value;

	if (edad < 18 && estadoCivil != "Soltero"){
	alert("eres muy pequeño para NO estar soltero");
	}


}//FIN DE LA FUNCIÓN
