//NICOLAS COSTANTINI
/*
Parcial 2020 3 bis: /* "Mapa Mundi"
Realizar el algoritmo que permita ingresar 5 paises:
el continente (validar entre America , Asia , Europa ,Africa y Oceania) 
el nombre del país, 
cantidad de habitantes en millones entre 1 y 7000 (validar)
el nivel de pobresa entre (pobre, rico, millonario) en europa no hay paises pobre(validar)
la temperaruta mínima que se registra en su territorio(entre -50 y 50)
a)La cantidad de temperaturas pares.
b)la cantidad de temperaturas impares de europa
c)El nombre del pais con menos habitantes
d)la cantidad de paises que superan los 40 grados.
e)la cantidad de paises de america que tienen menos de 0 grados .
f)el promedio de habitantes entre los paises ingresados .
g)el promedio de habitantes entre los paises que superan los 40 grados
H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. 
i) que continente tiene mas habitantes.*/
function mostrar()
{
	let continente;
	let nombrePais;
	let cantidadHabitantes;
	let nivelPobreza;
	let temperaturaMinima;
	
	let contadorTemperaturaPar = 0;
	let contadorTemperaturaImparEuropa = 0;
	let contadorTemperaturaAlta = 0;
	let contadorTemperaturaBajaAmerica = 0;
	
	let promedioHabitantes;
	let promedioHabitantesTemperaturaAlta;
	
	let continenteConMasHabitantes;
	let acumuladorHabitantes = 0;
	let acumuladorHabitTemperaturaAlta = 0;
	let acumuladorAfrica = 0;
	let acumuladorEuropa = 0;
	let acumuladorOceania = 0;
	let acumuladorAsia = 0;
	let acumuladorAmerica = 0;

	let temperaturaMasBaja;
	let nombrePaisTemperaturaBaja;
	let banderaTemperaturaBaja = true;
	
	let nombrePaisMenosHabitantes;
	let menorCantidadDeHabitantes;
	let banderaPaisMenorHabitantes = true;

	for (i = 0; i < 5; i++)
	{
		continente = prompt("Ingrese continente (america, europa, asia, africa u oceania)");
		while (!(continente == "america" || continente == "europa" || continente == "asia" || continente == "africa" || continente == "oceania"))
		{
			continente = prompt("Error, continente no valido (america, europa, asia, africa u oceania)");
		}

		nombrePais = prompt("Ingrese nombre del pais");
		while (!isNaN(nombrePais))
		{
			nombrePais = prompt("Error, el nombre del pais es invalido");
		}

		cantidadHabitantes = parseInt(prompt("Ingrese la cantidad de habitantes del pais (entre 1 y 7000)"));
		while (cantidadHabitantes < 1 || cantidadHabitantes > 7000)
		{
			cantidadHabitantes = parseInt(prompt("Error, numero invalido ( entre 1 y 7000)"));
		}

		nivelPobreza = prompt("Ingrese nivel de pobreza (pobre, rico o millonario)");
		while (continente == "europa" && nivelPobreza == "pobre" || nivelPobreza != "pobre" && nivelPobreza != "rico" && nivelPobreza != "millonario")
		{
			if(continente == "europa" && nivelPobreza == "pobre")
			{
				nivelPobreza = prompt("Error, europa no tiene paises pobres");
			}
			else
			{
			nivelPobreza = prompt("Error de tipeo. (pobre, rico o millonario)");
			}

			temperaturaMinima = parseFloat(prompt("Ingrese temperatura minima del pais (entre -50 y 50)"));
			while (temperaturaMinima < -50 || temperaturaMinima > 50)
			{
				temperaturaMinima = parseFloat(prompt("Error, ingrese un numero entre -50 y 50"));
			}
		}

		if (temperaturaMinima % 2 == 0) 	//A)
		{
			contadorTemperaturaPar = contadorTemperaturaPar + 1;
		}
		else if (continente == "europa")	//B)
		{
			contadorTemperaturaImparEuropa = contadorTemperaturaImparEuropa + 1;
		}

		if (banderaTemperaturaBaja == true)		//H)
		{
			temperaturaMasBaja = temperaturaMinima;
			nombrePaisTemperaturaBaja = nombrePais;
			banderaTemperaturaBaja = false;
		}
		else if (temperaturaMinima < temperaturaMasBaja)
		{
			temperaturaMasBaja = temperaturaMinima;
			nombrePaisTemperaturaBaja = nombrePais;
		}
		
		if (temperaturaMinima < 0)	//E)
		{
			contadorTemperaturaBajaAmerica = contadorTemperaturaBajaAmerica + 1;
		}
		else if (temperaturaMinima > 40)	//D)
		{
			contadorTemperaturaAlta = contadorTemperaturaAlta + 1;
			acumuladorHabitTemperaturaAlta = acumuladorHabitTemperaturaAlta + cantidadHabitantes;
		}

		if (banderaPaisMenorHabitantes == true)		//C)
		{
			nombrePaisMenosHabitantes = nombrePais;
			menorCantidadDeHabitantes = cantidadHabitantes;
			banderaPaisMenorHabitantes = false;
		}
		else if (cantidadHabitantes < menorCantidadDeHabitantes)
		{
			menorCantidadDeHabitantes = cantidadHabitantes;
			nombrePaisMenosHabitantes = nombrePais;
		}


		acumuladorHabitantes = acumuladorHabitantes + cantidadHabitantes;		//ACUMULO LOS HABITANTES TOTALES-

		switch (continente)		//ACUMULO LOS HABITANTES POR CONTINENTE.
		{
			case "africa":
				
				acumuladorAfrica = acumuladorAfrica + cantidadHabitantes;
				break;

			case "america":

				acumuladorAmerica = acumuladorAmerica + cantidadHabitantes;
				break;

			case "europa":

				acumuladorEuropa = acumuladorEuropa + cantidadHabitantes;
				break;
			case "oceania":

				acumuladorOceania = acumuladorOceania + cantidadHabitantes;
				break;
			case "asia":
				
				acumuladorAsia = acumuladorAsia + cantidadHabitantes;
				break;
		}
	} //FIN DEL FOR

	promedioHabitantes = acumuladorHabitantes / 5;   //F)
	promedioHabitantesTemperaturaAlta = acumuladorHabitTemperaturaAlta / contadorTemperaturaAlta;	//G)

	//BUSCO EL CONTINENTE CON MAS HABITANTES I)
	if (acumuladorAfrica > acumuladorAmerica && acumuladorAfrica > acumuladorAsia && acumuladorAfrica > acumuladorEuropa && acumuladorAfrica > acumuladorOceania)
	{
		continenteConMasHabitantes = "Africa";
	}
	else if (acumuladorAmerica > acumuladorAfrica && acumuladorAmerica > acumuladorAsia && acumuladorAmerica > acumuladorEuropa && acumuladorAmerica > acumuladorOceania)
	{
		continenteConMasHabitantes = "America";
	}
	else if (acumuladorAsia > acumuladorAfrica && acumuladorAsia > acumuladorAmerica && acumuladorAsia > acumuladorEuropa && acumuladorAsia > acumuladorOceania)
	{
		continenteConMasHabitantes = "Asia";
	}
	else if (acumuladorEuropa > acumuladorAfrica && acumuladorEuropa > acumuladorAmerica && acumuladorEuropa > acumuladorAsia && acumuladorEuropa > acumuladorOceania)
	{
		continenteConMasHabitantes = "Europa";
	}
	else 
	{
		continenteConMasHabitantes = "Oceania";
	}

	console.log ("La cantidad de temperaturas pares es de: " + contadorTemperaturaPar);
	console.log ("la cantidad de temperaturas impares de europa es de: " + contadorTemperaturaImparEuropa);
	console.log ("El nombre del pais con menos habitantes es: " + nombrePaisMenosHabitantes);
	console.log ("La cantidad de paises que superan los 40° es de: " + contadorTemperaturaAlta);
	console.log ("La cantidad de paises de America que tienen menos de 0° es de: " + contadorTemperaturaBajaAmerica);
	console.log ("El promedio de habitantes de los paises ingresados es de: " + promedioHabitantes);
	console.log ("El promedio de habitantes de los paises que superon los 40° es de: " + promedioHabitantesTemperaturaAlta);
	console.log ("La temperatura minima es de: " + temperaturaMasBaja + " y el nombre del pais es: " + nombrePaisTemperaturaBaja);
	console.log ("El continente con mas habitantes es: " + continenteConMasHabitantes);


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
/*
	let respuesta = "si";
	let nombre;
	let sexo;
	let edad;
	let estadoCivil;

	let contadorDeViudos;
	let contadorDeHombresViudosSolteros;

	let contadorDeHombresSolteros;
	let acumuladorEdadHombresSolteros;
	let promedioHombresSolteros;

	let temperatura;
	let contadorTemperaturaTerceraEdad;
	let temperaturaMasAltaTerceraEdad;
	let nombreTemperaturaMasAlta;
	let flagTemperaturaMasAlta;
	

	flagTemperaturaMasAlta = true;
	contadorTemperaturaTerceraEdad = 0;
	contadorDeViudos = 0;
	contadorDeHombresSolteros = 0;
	acumuladorEdadHombresSolteros = 0;
	contadorDeHombresViudosSolteros = 0;

	while(respuesta == "si")
	{
		nombre = prompt("Ingrese su nombre");				// PIDO DATOS AL USUARIO Y VALIDO.

		while (!(isNaN(nombre)))
		{
			nombre = prompt("Error, ingrese su nombre");
		}

		edad = parseInt(prompt("Ingrese su edad"));			// PIDO DATOS AL USUARIO Y VALIDO.
		while (isNaN(edad) || edad < 0 || edad > 100)
		{
			edad = parseInt(prompt("Error, ingrese su edad"));
		}
		
		sexo = prompt("Ingrese su sexo: f o m");			// PIDO DATOS AL USUARIO Y VALIDO.
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
		while (isNaN (temperatura) || temperatura < 32 || temperatura > 43)
		{
			temperatura = prompt("Error, ingrese su temperatura corporal");
		}
		
		if (flagTemperaturaMasAlta == true)
		{
			temperaturaMasAltaTerceraEdad = temperatura;
			nombreTemperaturaMasAlta = nombre;
			flagTemperaturaMasAlta = false;
		}
		else if (temperatura > temperaturaMasAltaTerceraEdad)
		{
			temperaturaMasAltaTerceraEdad = temperatura;
			nombreTemperaturaMasAlta = nombre;
		}

		switch(estadoCivil)
		{
			case "casado":

			break;

			case "soltero":

				if (sexo == "m")
				{
					contadorDeHombresViudosSolteros ++;
					contadorDeHombresSolteros ++;
					acumuladorEdadHombresSolteros =+ edad;
				}

			break;

			case "viudo":

				if (edad >= 18 && sexo == "m")
				{
					contadorDeHombresViudosSolteros ++;
					contadorDeViudos ++;
				}
				else 
				{
					contadorDeViudos ++;
				}
			break;
		}

		if (edad >= 60 && temperatura >= 38)
		{
			contadorTemperaturaTerceraEdad ++;
		}
		respuesta = prompt("desea continuar? si/no");
	}

	promedioHombresSolteros = acumuladorEdadHombresSolteros / contadorDeHombresSolteros;
	
	console.log ("el nombre con mas temperatura es: " + nombreTemperaturaMasAlta);
	console.log ("la cantidad de mayores de edad viudos es de: " + contadorDeViudos);
	console.log ("la cantidad de hombres solteros es de: " + contadorDeHombresSolteros);
	console.log ("la cantidad de hombres viudos es de: " + contadorDeHombresViudosSolteros);
	console.log("la cantidad de personas mayores de 60 años con >38 de temperatura es de: " + contadorTemperaturaTerceraEdad);
	console.log ("el promedio de hombres solteros es de: " + promedioHombresSolteros);
*/
}

