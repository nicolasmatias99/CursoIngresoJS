/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de 
datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	let edad;
	let sexo;
	let estadoCivil;
	let sueldoBruto;
	let numeroDeLegajo;
	let nacionalidad;


	edad = parseInt(prompt("Ingrese su edad"));

		while (isNaN(edad) || edad < 18 || edad > 90)
		{
			edad = parseInt(prompt("Error, debe de ser mayor de 18 y menor de 90"));
		}

	sexo = prompt("Ingrese su sexo: f o m");
		
		while (!(sexo == "f" || sexo == "m"))
		{
			sexo = prompt("Error, sexo invalido");
		}

	estadoCivil = parseInt(prompt("Estado civil: 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos"));

		while (!(estadoCivil == 1 || estadoCivil == 2 || estadoCivil == 3 || estadoCivil == 4))
		{
			estadoCivil = prompt("Error, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
		}

	sueldoBruto = parseFloat(prompt("Ingrese su sueldo bruto"));

		while (isNaN(sueldoBruto) || sueldoBruto < 8000)
		{
			sueldoBruto = parseFloat(prompt("Error, su sueldo bruto no debe ser menor que 8000"));
		}

	numeroDeLegajo = parseInt(prompt("Ingrese su numero de legajo"));
	
		while (isNaN (numeroDeLegajo) || numeroDeLegajo < 1000)
		{
			numeroDeLegajo = parseInt(prompt("Error, número de legajo invalido"));
		}

	nacionalidad = prompt("Ingrese nacionalidad: a, e o n")

		while (!(nacionalidad == "a" || nacionalidad == "e" || nacionalidad == "n"))
		{
			nacionalidad = prompt("Error, nacionalidad invalida");
		}

		switch (estadoCivil)
		{
			case 1:
				estadoCivil = "Soltero";
				break;
			case 2:
				estadoCivil = "Casado";
				break;
			case 3:
				estadoCivil = "Viudo";
				break;
			case 4:
				estadoCivil = "Divorciado";
				break;
		}

		switch (nacionalidad)
		{
			case "a":
				nacionalidad = "Argentino";
				break;
			case "e":
				nacionalidad = "Extranjero";
				break;
			case "n":
				nacionalidad = "Nacionalizado";
				break;
		}

		if (sexo == "m")
		{
			sexo = "Masculino"
		}
		else 
		{
			sexo = "Femenino"
		}
		
		document.getElementById("txtIdEdad").value = edad;
		document.getElementById("txtIdSexo").value = sexo;
		document.getElementById("txtIdEstadoCivil").value = estadoCivil;
		document.getElementById("txtIdSueldo").value = sueldoBruto;
		document.getElementById("txtIdLegajo").value = numeroDeLegajo;
		document.getElementById("txtIdNacionalidad").value = nacionalidad;

}
