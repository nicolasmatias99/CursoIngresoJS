/*
Enunciado:
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
*/

function mostrar()
{
	let respuesta = "si";
	let nombre;
	let sexo;
	let edad;
	let estadoCivil;
	let cantViudos;
	let cantidadHombresV;
	let cantidadHombresS;
	let edadHombresS;
	let promedioHombresS;
	let temperatura;
	let terceraEdadTemp;
	let temperaturaMay;
	let nombreMasTemp;
	let flagTemperatura;
	

	flagTemperatura = true;
	terceraEdadTemp = 0;
	cantViudos = 0;
	cantidadHombresS = 0;
	edadHombresS = 0;
	cantidadHombresV = 0;

	while(respuesta == "si")
	{
		nombre = prompt("Ingrese su nombre");

			while (!(isNaN(nombre)))
			{
				nombre = prompt("Error, ingrese su nombre");
			}

		edad = parseInt(prompt("Ingrese su edad"));
		
			while (isNaN(edad))
			{
				edad = parseInt(prompt("Error, ingrese su edad"));
			}
		
		sexo = prompt("Ingrese su sexo: f o m");

			while (!(sexo == "f" || sexo == "m"))
			{
				sexo = prompt("Error, ingrese su sexo: f o m");
			}
			
		estadoCivil = prompt("Ingrese su estado civil: soltero, casado o viudo");
			
			while (!(estadoCivil == "soltero" || estadoCivil == "casado" || estadoCivil == "viudo"))
			{
				estadoCivil = prompt("Error, ingrese su estado civil: soltero, casado o viudo");
			}
			
		temperatura = prompt("Ingrese su temperatura corporal");

			while (isNaN (temperatura))
			{
				temperatura = prompt("Error, ingrese su temperatura corporal");
			}
		
		if (flagTemperatura == true)
		{
			temperaturaMay = temperatura;
			nombreMasTemp = nombre;
			flagTemperatura = false;
		}
		else if (temperatura > temperaturaMay)
		{
			temperaturaMay = temperatura;
			nombreMasTemp = nombre;
		}

		switch(estadoCivil)
		{
			case "casado":

			break;

			case "soltero":

				if (sexo == "m")
				{
					cantidadHombresS ++;
					edadHombresS =+ edad;
				}

			break;

			case "viudo":

				if (edad >= 18 && sexo == "m")
				{
					cantidadHombresV ++;
					cantViudos ++;
				}
				else 
				{
					cantViudos ++;
				}
			break;
		}

		if (edad >= 60 && temperatura >= 38)
		{
			terceraEdadTemp ++;
		}
		respuesta = prompt("desea continuar? si/no");
	}

	promedioHombresS = edadHombresS / cantidadHombresS;
	
	console.log ("el nombre con mas temperatura es: " + nombreMasTemp);
	console.log ("la cantidad de mayores de edad viudos es de: " + cantViudos);
	console.log ("la cantidad de hombres solteros es de: " + cantidadHombresS);
	console.log ("la cantidad de hombres viudos es de: " + cantidadHombresV);
	console.log("la cantidad de personas mayores de 60 años con >38 de temperatura es de: " + terceraEdadTemp);
	console.log ("el promedio de hombres solteros es de: " + promedioHombresS);
}

