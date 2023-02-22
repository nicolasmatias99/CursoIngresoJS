/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/

function mostrar()
{

	let producto;
	let marca;
	let fabricante;
	let precio;
	let cantidad;
	let cantidadAlcohol;
	let cantidadAlcoholMasBajo;
	let precioAlcoholMasBajo;
	let fabricanteAlcoholMasBajo;
	let cantidadBarbijo;
	let cantidadJabon;
	let banderaAlcohol;
	let banderaTipo;
	let productoMayor;
	let cantidadMayor;
	let promedio;
	let suma;
	
	banderaTipo = true;
	banderaAlcohol = true;
	cantidad = 0;
	cantidadAlcohol = 0;
	cantidadBarbijo = 0;
	cantidadJabon = 0;

	for (i = 0; i < 5; i++)
	{
		producto = prompt("Ingrese producto: jabon, barbijo o alcohol");

		while(!(producto == "jabon" || producto == "barbijo" || producto == "alcohol"))
		{
			producto = prompt("Error, ingrese productos: jabon, barbijo o alcohol")
		}

		precio = parseFloat(prompt("Ingrese precio entre $100 y $300"));

		while(isNaN(precio) || precio < 100 || precio > 300)
		{
			precio = parseFloat(prompt("Error, ingrese precio entre $100 y $300"))
		}

		cantidad = parseInt(prompt("Ingrese cantidad de productos (la cantidad no puede ser 0 ni mayor a 1000 unidades)"));

		while(isNaN(cantidad) || cantidad <= 0 || cantidad > 1000)
		{
			cantidad = parseInt(prompt("Error, ingrese cantidad de productos (la cantidad no puede ser 0 ni mayor a 1000 unidades)"))
		}

		marca = prompt("Ingrese la marca del producto");

		while(!(isNaN(marca)))
		{
			marca = prompt("Error, Ingrese la marca del producto)")
		}

		fabricante = prompt("Ingrese fabricante del producto");

		while (!(isNaN(fabricante)))
		{
			fabricante = prompt("Error, ingrese fabricante del producto")
		}

		switch(producto)
		{
			case "barbijo":

				cantidadBarbijo += cantidad;
				break;

			case "jabon":
				
				cantidadJabon += cantidad;
				break;

			case "alcohol":

				cantidadAlcohol += cantidad;

				if (banderaAlcohol == true)
				{
					precioAlcoholMasBajo = precio;
					cantidadAlcoholMasBajo = cantidad;
					fabricanteAlcoholMasBajo = fabricante;
					banderaAlcohol = false;
				}
				else if (precio < precioAlcoholMasBajo)
				{
					precioAlcoholMasBajo = precio;
					cantidadAlcoholMasBajo = cantidad;
					fabricanteAlcoholMasBajo = fabricante;
				}
				break;
		}

		if (banderaTipo == true)
		{
			cantidadMayor = cantidad;
			productoMayor = producto
			banderaTipo = false;
		}
		
		else if(cantidad > cantidadMayor)
		{
			cantidadMayor = cantidad;
			productoMayor = producto;
		}
	}

	suma = precio * cantidadMayor;
	promedio = suma / 5;

	console.log ("Del alcohol mas barato las unidades son de " + cantidadAlcoholMasBajo + " y su fabricante es " + fabricanteAlcoholMasBajo)
	console.log ("el promedio por compra del producto con más unidades es de " + promedio);
	console.log ("la cantidad de jabones es de " + cantidadJabon);

}
