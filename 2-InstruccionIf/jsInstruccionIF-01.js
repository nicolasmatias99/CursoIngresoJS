//NICOLAS COSTANTINI
function mostrar() 
{

	//tomo la edad  

	/*let edad

	edad = parseInt(document.getElementById("txtIdEdad").value);
	
	if (edad==15) 
	{

		alert ("niña bonita")
		
	}
	*/

	///////////////////////////////////////////////////////////////////////////////////////////////////////////////

	/*Ejercicio 1bis: 
	/con if
	pedir a una persona que fue de vaciones , 
	la distancia que viajo y el tiempo que tardo, para calcular la velocidad
	e informar:
	60 km/hr = muy lento
	hata 80km/h= lento 
	hasta 100= buen ritmo
	hasta 120= ahi de la ley 
	mas = eso no se hace */

	/*

	let distancia;
	let tiempo;
	let velocidad;

	distancia = parseInt(document.getElementById("txtIdEdad").value);
	tiempo = parseInt(prompt("Ingrese cuanto tiempo duro el viaje"));

	velocidad = distancia / tiempo;

	if (velocidad <= 60) {
		alert("la velocidad es de " + velocidad + " km/hr. Muy lento!");
	}
	else if (velocidad > 60 && velocidad <= 80) {
		alert("la velocidad es de " + velocidad + " km/hr. Lento!");
	}
	else if (velocidad > 80 && velocidad <= 100) {
		alert("la velocidad es de " + velocidad + " km/hr. Buen ritmo!");
	}
	else if (velocidad > 100 && velocidad <= 120) {
		alert("la velocidad es de " + velocidad + " km/hr. Ahí de la ley!");
	}
	else {
		alert("la velocidad es de " + velocidad + " km/hr. Eso no se hace!");
	}
*/
	//FIN DE EJERCICIO BIS.

	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	/*
	Ejercicio 1 bis bis:
con if
ingresar el nombre y los datos requeridos para calcular el IMC , 
e informar a la persona si es:
Bajo peso <18.5
Peso normal 18,5-24.9
Preobesidad 25-26.9
Obesidad I 27-29.9
Obesidad II 30-34.9
Obesidad III >40
*/

let peso;
let altura;
let imc;

peso = parseFloat(document.getElementById("txtIdEdad").value);
altura = parseFloat(prompt("Ingrese su altura en metros. Ejemplo: 1.78"));

imc = parseFloat (peso / (altura * altura));

if (imc < 18.5)
{
	alert ("Bajo peso");
}
else if (imc >= 18.5 && imc < 25)
{
	alert ("Peso normal");
}
else if (imc >= 25 && imc < 27)
{
	alert ("Preobesidad");
}
else if (imc >= 27 && imc < 30)
{
	alert ("Obesidad I ");
}
else if (imc >= 30 && imc < 35)
{
	alert ("Obesidad II");
}
else 
{
	alert ("Obesidad III");
}	
}