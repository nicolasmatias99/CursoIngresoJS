/*NICOLAS COSTANTINI
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	let edad;
	let nombre;
	let nombreMayor;
	let nombreMenor;
	let edadMayor;
	let edadMenor;
	let respuesta = "si";
	let bandera = true;      //BANDERA LO USE PARA COMPARAR.
	

	while (respuesta == "si")
	{	
		nombre = prompt("ingrese su nombre");
		edad = parseInt (prompt("ingrese su edad"));
				
			while (isNaN(edad) || edad < 0 || edad > 110) 	//isNaN ES PARA VALIDAR QUE SE INGRESE UN NÚMERO.
			{
				edad = parseInt (prompt("Error: Ingrese su edad"));
			}

			if (bandera == true)
			{
				nombreMayor = nombre;
				nombreMenor = nombre;
				edadMayor = edad;
				edadMenor = edad;
				bandera = false
			}
			else if (edadMayor < edad)
			{	
				nombreMayor = nombre;
				edadMayor = edad;
			}
			else if (edadMenor > edad)
			{
				nombreMenor = nombre;
				edadMenor = edad;
			}

		respuesta = prompt("Desea continuar? si/no");
	}
	
	alert("la persona menor es "+ nombreMenor + " y la persona mayor es " + nombreMayor);


	// let contador;	
	
	// contador = 0;

	// while(contador <= 10)
	// {
	// 	alert(contador);
	// 	contador++;
	// }

	
	
}//FIN DE LA FUNCIÓN

// While 1 bis- edad y nombre , informar el nombre de la persona mas vieja y la mas joven