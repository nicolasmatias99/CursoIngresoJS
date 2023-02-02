/*Nicolas Costantini
 Div B 
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	// let nombre;
    // let edad;

	// nombre = document.getElementById("txtIdNombre").value;

	// edad = document.getElementById("txtIdEdad").value;

    // alert (`usted se llama ${nombre} y tiene ${edad} años`)


	/*Ejercicio 5.bis: 
 	se debe mostrar un mensaje :
 	"Perez , usted se llama jose y tiene 66 años"
	se debe optener el apellido , de la manera que puedan*/

	let nombre;
	let apellido;
	let edad;

 	nombre = document.getElementById("txtIdNombre").value;
	edad = document.getElementById("txtIdEdad").value;

	apellido = prompt ("ingrese su apellido")

	alert (apellido + " , usted se llama " + nombre + " y tiene " + edad + " años ")



}



