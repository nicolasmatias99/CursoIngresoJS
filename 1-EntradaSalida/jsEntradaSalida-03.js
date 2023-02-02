/*Nicolas Costantini 
  Division B
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	/*
	let nombre = document.getElementById("txtIdNombre").value;

	alert(nombre);
	*/
	//--------------------------------------------------------------//
	/*
	Ejercicio 3.bis: Ingresar descripción (por prompt) y precio de un producto (por id).
	El programa deberá mostrar por alert la descripción del producto 
	junto al precio aumentado en un 30%. 
	Pueden utilizar el html del ejercicio 3 para resolverlo.
	*/

    let precio;
	let descripción;
	let aumento;
	let precioFinal;
	let porcentaje;

	porcentaje = 30;

	precio = parseInt(document.getElementById("txtIdNombre").value);
	descripción = prompt ("ingrese descripcion del producto");

	aumento = precio * porcentaje / 100;
	
	precioFinal = aumento + precio

	alert("el precio de " + descripción + " es de " + precioFinal);






}

