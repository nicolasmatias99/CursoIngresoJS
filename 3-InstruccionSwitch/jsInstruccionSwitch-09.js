function mostrar()
{
	const precio = 15000
	let estacion;
	let destino;
	let aumento;
	let descuento;
	let precioFinal;
	
	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch(estacion)
	{
		case "Invierno":

			if (destino == "Bariloche"){
				aumento = 20;
			}
			else if (destino == "Mar del plata"){
				descuento = -20;
			}
			else{
				descuento = -10;
			}
			break;

		case "Verano":

			if (destino == "Bariloche"){
				descuento = -20;
			}
			else if (destino == "Mar del plata"){
				aumento = 20;
			}
			else{
				aumento = 10;
			}
			break;

		case "Otoño":
		case "Primavera":

			if (destino == "Cordoba"){
				precioFinal = precio;
			}
			else{
			aumento = 10;
			}
			break;
	}


	if (aumento > 0)
	{
		precioFinal = precio + precio * aumento / 100;
	}

	else if (descuento < 0)
	{
		precioFinal = precio + precio * descuento / 100;
	}
	

	 alert ("En " + estacion + " el precio de estadia en " + destino + " es de " + precioFinal);
	 
}//FIN DE LA FUNCIÓN