
/*
Bienvenidos.
En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas.

*/
function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperaturaCorporal;
	let nacionalidad;

	let temperaturaMasAlta;
	let nacionalidadTemperaturaMasAlta;

	let promedioEdadCasadas;
	let acumuladorEdadCasadas = 0;
	let contadorCasadas = 0;

	let contadorSolteros = 0;
	let contadorSolterasViudas = 0;
	let contadorViejosAltaTemperatura = 0;

	let banderaTemperaturaMasAlta = true;
	let respuesta = "si"

	while (respuesta == "si")
	{
		nombre = prompt("ingrese su nombre");
		while(!isNaN(nombre))
		{
			nombre = prompt("Error, nombre invalido");
		}

		edad = parseInt(prompt("Ingrese su edad (0 a 100)"))
		while (isNaN(edad) || edad > 100 || edad < 0)
		{
			edad = parseInt(prompt("Edad invalida"));
		}
		
		sexo = prompt("ingrese su sexo ( f o m)");
		while (!(sexo == "f" || sexo == "m"))
		{
			sexo = prompt("Sexo invalido, ingrese f o m");
		}

		estadoCivil = prompt("ingrese su estado civil (soltero, casado, divorciado u viudo");
		while(!(estadoCivil == "soltero" || estadoCivil == "casado" || estadoCivil == "divorciado" || estadoCivil == "viudo"))
		{
			estadoCivil = prompt("Error, estado civil invalido");
		}

		temperaturaCorporal = parseFloat(prompt("Ingrese su temperatura corporal"));
		while (isNaN(temperaturaCorporal) || temperaturaCorporal < 32 || temperaturaCorporal > 43)
		{
			temperaturaCorporal = parseFloat(prompt("Error, temperatura invalida"));
		}

		nacionalidad = prompt("Ingrese su nacionalidad");
		while (!isNaN(nacionalidad))
		{
			nacionalidad = prompt("Error, nacionalidad invalida");
		}

		switch (estadoCivil)
		{
			case "soltero":

				if(edad > 18 && sexo == "f")
				{
					contadorSolteros = contadorSolteros + 1;
					contadorSolterasViudas = contadorSolterasViudas + 1;
				}
				else if (edad >= 18)
				{
					contadorSolteros = contadorSolteros + 1;
				}
				break;
			
			case "casado":

				if (sexo == "f")
				{
					contadorCasadas = contadorCasadas + 1;
					acumuladorEdadCasadas = acumuladorEdadCasadas + edad;
				}
				break;

			case "divorciado":
				break;
			case "viudo":

				if (sexo == "f")
				{
					contadorSolterasViudas = contadorSolterasViudas + 1;
				}
				break;
		}

		if(temperaturaCorporal > 30 && edad > 60)
		{
			contadorViejosAltaTemperatura = contadorViejosAltaTemperatura + 1;
		}
		if (banderaTemperaturaMasAlta == true)
		{
			temperaturaMasAlta = temperaturaCorporal;
			nacionalidadTemperaturaMasAlta = nacionalidad;
			banderaTemperaturaMasAlta = false;
		}
		else if (temperaturaCorporal > temperaturaMasAlta)
		{
			temperaturaMasAlta = temperaturaCorporal;
			nacionalidadTemperaturaMasAlta = nacionalidad;
		}

		respuesta = prompt("Desea continuar si/no");
	}	
	
	promedioEdadCasadas = acumuladorEdadCasadas / contadorCasadas;

	console.log("la nacionalidad de la persona con mas temperatura es: " + nacionalidadTemperaturaMasAlta);
	console.log("la cantidad de solteros mayores de edad es de: " + contadorSolteros);
	console.log("la cantidad de mujeres solteras o viudas es de: " + contadorSolterasViudas);
	console.log("la cantidad de personas mayores con alta temperatura es de: " + contadorViejosAltaTemperatura);
	console.log("el promedio de edad de las mujeres casadas es de: " + promedioEdadCasadas);
}
