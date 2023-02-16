//NICOLAS COSTANTINI
function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let numero;
	let maximo = 10;
	let minimo = 1;

	numero = Math.round(Math.random() * (maximo - minimo) + minimo);

	if (numero == 9 || numero == 10)
	{
		alert(numero + " EXCELENTE");
	}
	else if (numero >= 4)
	{
		alert(numero + " APROBÓ");
	}
	else 
	{
		alert (numero + " Vamos, la proxima se puede");
	}


}//FIN DE LA FUNCIÓN

/*"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/ 