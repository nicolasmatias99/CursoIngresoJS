function mostrar()
{
	/*
	For 5 bis, Realizar el programa que permita el ingreso de las notas (validar entre 0 y 10) , 
	el sexo (validar el sexo “f” o “m” o "b") de 7 alumnos, informar por console.log: 
	a) El promedio de las notas totales. 
	b) La nota más baja y el sexo de esa persona. 
	c) La cantidad de varones que su nota haya sido mayor o igual a 6.
	d) La cantidad de alumnos desaprobados (nota < 4)
	*/
	

	let sexo;
	let nota;
	let sexoDeNotaBaja;
	let notaBaja;
	let sumaNotas;	//USO PARA EL PROMEDIO
	let promedio;
	let contadorM;
	let contadorDesaprobados;
	let contadorVaronesAprobados;
	let banderaNota;

	sumaNotas = 0;
	contadorDesaprobados = 0;
	contadorVaronesAprobados = 0;
	contadorM = 0;
	banderaNota = true;
	

	for (i = 1; i <= 7; i++)
	{

		nota = parseInt(prompt("Ingrese una nota del 0 al 10"));

	
			while(isNaN (nota) || nota < 0 || nota > 10)
			{
				nota = parseInt(prompt("Error, ingrese un número del 0 al 10"));
			} 
	
		sexo = prompt("Ingrese su sexo: f, m o b");
		
			while(!(sexo == "f" || sexo == "m" || sexo == "b"))
			{
				sexo = prompt("Error: ingrese f, m o b");
			}
	
			if (sexo == "m" || sexo == "M")
			{
				contadorM ++;
			}
			
			console.log (nota + " " + sexo)

			if(banderaNota == true)				//BUSCO LA NOTA MAS BAJA.
			{
				notaBaja = nota;
				sexoDeNotaBaja = sexo;
				banderaNota = false;
			}
			else if (nota < notaBaja)
			{
				notaBaja = nota;
				sexoDeNotaBaja = sexo;
			}	
			
			if(nota < 4)
			{
				contadorDesaprobados ++;
			}

			else if (nota >= 6 && sexo == "m" || sexo == "M")
			{
				contadorVaronesAprobados ++; 
			}

			sumaNotas += nota;
	}

	promedio = sumaNotas / 7; 	//DIVIDO POR CANTIDAD DE NOTAS Y SACO EL PROMEDIO.

	console.log ("La cantidad de alumnos desaprobados es de " + contadorDesaprobados);
	console.log ("La cantidad de varones aprobados es de " + contadorVaronesAprobados);
	console.log ("La nota más baja es de " + notaBaja + " y su sexo es " + sexoDeNotaBaja); //MUESTRO EL SEXO Y LA NOTA MAS BAJA.
	console.log ("El promedio total de las notas es de " + promedio);




	
	/*
	let stop;
	let i;

	for (i = 0; i < 1000; i++)
	{
		stop = parseInt(prompt("Ingrese un número."))
		if (stop == "9")
		{
			break;
		}
	}
    */


}//FIN DE LA FUNCIÓN