/*NICOLAS COSTANTINI
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/


function mostrar()
{



//While 2 bis bis: Ingresar numeros hasta que el usuario quiera. Determinar la cantidad de números que son mayores que 10 y menores 20 (inclusive en ambos casos). También el promedio de los números que cumplen la condición anterior.

let respuesta;
let numeroIngresado;
let promedio;
let cantidad;
let acumulador;

respuesta = "si";
cantidad = 0;
acumulador = 0;

while(respuesta == "si")
{
	numeroIngresado = parseInt(prompt("Ingrese un numero"));
		while(isNaN(numeroIngresado))
		{
			numeroIngresado = parseInt(prompt("Error, ingrese un número"));
		}

		if (numeroIngresado >= 10 && numeroIngresado <= 20);
		{
			acumulador += numeroIngresado;
			cantidad ++ 
		}
	
	respuesta = prompt("Desea continuar? si/no");
}
	promedio = acumulador / cantidad;
	alert ("la cantidad de numeros es " + cantidad + " y el promedio es de " + promedio);


///////////////////////////////////////////////////

// while 2 bis: Ingresar 5 números, y determinar la cantidad de números que son mayores que 10 y menores 20 (inclusive en ambos casos)

/*
	let numeroIngresado;
	let contador;
	let cantidad;
	
	contador = 0;
	cantidad = 0;

	while(contador < 5)
	{
		numeroIngresado = parseInt(prompt("ingrese su numero"));
		while (isNaN(numeroIngresado))
		{
			numeroIngresado = parseInt(prompt("Error, ingrese un número"));
		}

			if (numeroIngresado >= 10 && numeroIngresado <= 20)
			{
				cantidad ++;
			}

		contador ++
	}

	alert ("La cantidad de numeros mayores que 10 y menores que 20 es: " + cantidad);
	*/

	///////////////////////////////////////////////////

	// let contador;
	// contador = 10; 
	
	// while (contador >= 1)
	// {
	// 	alert (contador);
	// 	contador--;
	// }

}//FIN DE LA FUNCIÓN

