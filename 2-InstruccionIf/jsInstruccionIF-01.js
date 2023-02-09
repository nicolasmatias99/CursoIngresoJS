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

	//FIN DE LA FUNCIÓN
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



}	