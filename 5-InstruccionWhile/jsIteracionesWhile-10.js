/*NICOLAS COSTANTINI
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let respuesta;
	let numeroIngresado;
	let acumuladorNegativos;
	let acumuladorPositivos;
	let contadorNegativos;
	let contadorPositivos;
	let contadorDeCeros;
	let contadorNumerosPares;
	let promedioPositivo;
	let promedioNegativo;
	let diferencia;

	contadorDeCeros = 0;
	contadorNegativos = 0;
	contadorNumerosPares = 0;
	contadorPositivos = 0;
	acumuladorPositivos = 0;
	acumuladorNegativos = 0;
	respuesta = "si";

	while(respuesta == "si")
	{
		numeroIngresado = parseInt(prompt("Ingrese un número"));
		while (isNaN(numeroIngresado))
		{
			numeroIngresado = parseInt (prompt("Error, ingrese un número"));
		}
		
		if(numeroIngresado < 0)
		{
			acumuladorNegativos += numeroIngresado;
			contadorNegativos ++;
		}
		else if (numeroIngresado > 0 )
		{
			acumuladorPositivos += numeroIngresado;
			contadorPositivos ++;
		}
		else
		{
			contadorDeCeros ++;
		}
		if (numeroIngresado % 2 == 0)
		{
			contadorNumerosPares ++;
		}
		respuesta = prompt("desea continuar? si/no");
	}//fin del while

	promedioNegativo = acumuladorNegativos / contadorNegativos;
	promedioPositivo = acumuladorPositivos / contadorPositivos;
	diferencia = acumuladorNegativos + acumuladorPositivos;

	console.log("la suma de los negativos es :"+ acumuladorNegativos);
	console.log("la suma de los positivos es " + acumuladorPositivos);
	console.log("la cantidad de positivos es " + contadorPositivos);
	console.log("la cantidad de negativos es " + contadorNegativos);
	console.log("la cantidad de ceros es de " + contadorDeCeros);
	console.log("la cantidad de numeros pares es de " + contadorNumerosPares);
	console.log("el promedio de los positivos es de " + promedioPositivo);
	console.log("el promedio de los negativos es de " + promedioNegativo);
	console.log("la diferencia es de " + diferencia);
}//FIN DE LA FUNCIÓN