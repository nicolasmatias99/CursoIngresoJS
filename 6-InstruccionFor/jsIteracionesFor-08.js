function mostrar()
{	
	let numero;
	let cantDivisores;

	cantDivisores = 0;
	numero = parseInt(prompt("Ingrese un numero"));

	for (i = 1; i <= numero; i++)
	{
		if (numero % i == 0)
		{
			cantDivisores ++;;
		}
	}

	if (cantDivisores == 2)
	{
		alert (numero + " es un numero primo");
	}
	else
	{
		alert (numero + " no es un numero primo");
	}

}//FIN DE LA FUNCIÓN