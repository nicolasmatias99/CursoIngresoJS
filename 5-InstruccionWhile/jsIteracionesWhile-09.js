/*NICOLAS COSTANTINI

While 9 bis: Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.
El menor de los pares y el mayor de los negativos ...(solo si hay)
*/
function mostrar()
{	
	//DECLARO VARIABLES.
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let parMinimo;
	let mayorNegativo;
	let respuesta;
	let banderaDelPrimero;
	let banderaDelPar;
	let banderaDelMayorNegativo;
	
	//ASIGNO VALORES A LAS VARIABLES.
	respuesta = "si";
	banderaDelPrimero = true;
	banderaDelPar = true;
	banderaDelMayorNegativo = true;

	while (respuesta == "si")
	{
		numeroIngresado = parseInt(prompt("Ingrese su número"));		//PIDO UN NUMERO AL USUARIO
		while (isNaN(numeroIngresado))
		{
			numeroIngresado = parseInt(prompt("Error, Ingrese un número")); //VALIDO QUE SEA UN NUMERO.
		}
		
		if (banderaDelPrimero == true)
		{
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			banderaDelPrimero = false;
		}
		
		else if (numeroIngresado > numeroMaximo)
		{ 
			numeroMaximo = numeroIngresado;
		}
		else if (numeroIngresado < numeroMinimo)
		{
			numeroMinimo = numeroIngresado;
		}
		if (banderaDelPar == true)
		{
			if (numeroIngresado % 2 == 0)
			{
				parMinimo = numeroIngresado;
				banderaDelPar = false;
			}
		}
		else if (numeroIngresado < parMinimo && numeroIngresado % 2 == 0)
		{
			parMinimo = numeroIngresado;
		}

		if (banderaDelMayorNegativo == true)
		{
			if(numeroIngresado < 0)
			{
				mayorNegativo = numeroIngresado;
				banderaDelMayorNegativo = false;
			}
		}

		else if (numeroIngresado > mayorNegativo && numeroIngresado <= 0)
		{
			mayorNegativo = numeroIngresado;
		}

		respuesta = prompt("Desea continuar? si/no.");
	}
	
	document.write(numeroMaximo + " numero maximo <br>");
	document.write(numeroMinimo + " numero minimo <br>");
	document.write(parMinimo + " menor de los pares <br>");
	document.write(mayorNegativo + " mayor negativo <br>");

	/*
	Al presionar el botón pedir  números  hasta que el usuario quiera,
	mostrar el número máximo y el número mínimo ingresado.*/
	
	// declarar variables
	/*
	let flag;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;
	
	//iniciar variables
	
	respuesta = "si"
	flag = true;
	
	while (respuesta == "si")
	{
		numeroIngresado = parseInt(prompt("Ingrese un número."));
		while (isNaN (numeroIngresado))
		{
			numeroIngresado = parseInt(prompt("Error, ingrese un número"));
		}

		if (flag == true)						//ASIGNO VALOR A EL MIN Y MAX CON EL NUNMERO INGRESADO SOLO UNA VEZ.
		{
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			flag = false;
		}

		else if (numeroIngresado > numeroMaximo)					//NUMERO MAXIMO
		{
			numeroMaximo = numeroIngresado;
		}
		else if (numeroIngresado < numeroMinimo)					//NUMERO MINIMO
		{
			numeroMinimo = numeroIngresado;
		}

		respuesta = prompt("Desea continuar si/no");				//PREGUNTO SI SIGUE
	}

	document.getElementById("txtIdMaximo").value = numeroMaximo;				//MUESTRO
	document.getElementById("txtIdMinimo").value = numeroMinimo;				//MUESTRO
*/
}//FIN DE LA FUNCIÓN