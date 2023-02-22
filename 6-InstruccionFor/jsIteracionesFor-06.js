function mostrar()
{
	let numero;
	let pares;
	let cantPares;
	let i;

	cantPares = 0;
	numero = parseInt(prompt("Ingrese un número."))

	for (i = 1; i <= numero; i++)
	{
		if (i % 2 == 0)
		{
			pares = i;
			cantPares ++;
			console.log (pares);
		}
	}

	console.log ("la cantidad de pares es de " + cantPares);


}//FIN DE LA FUNCIÓN