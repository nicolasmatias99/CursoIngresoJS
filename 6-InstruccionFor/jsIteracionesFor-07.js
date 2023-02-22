//NICOLAS COSTANTINI
function mostrar()
{
	let numero;
	let i;
	let divisor;
	let cantDivisores;
	
	cantDivisores = 0;
	numero = parseInt(prompt("Ingrese un número."));

	for (i = 1; i <= numero; i++)
	{
		if (numero % i == 0)
		{
			divisor = i;
			cantDivisores ++;
			console.log (divisor);
		}
	}

	console.log ("la cantidad de divisores es de " + cantDivisores);



}//FIN DE LA FUNCIÓN