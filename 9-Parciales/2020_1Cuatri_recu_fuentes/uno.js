/*
Recu 2020 1 bis: "Jugando al Doctor" 
De 7 personas que ingresan al hospital se deben tomar y validar los siguientes datos:
nombre, altura, peso y sexo.
a)Informar la cantidad de personas de sexo femenino. 
b)La altura promedio en total de pacientes.
c)El nombre del hombre con menos peso(si lo hay).
d)De la persona no binaria, el más flaco. 
Pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar ()
{
	let nombre;
	let altura;
	let peso;
	let sexo;

	let contadorSexoF;
	let promedioAltura;
	let acumuladorAltura;
	let nombreNoBinario;
	let nombreMasFlaco;
	let pesoMasBajo;
	let pesoMasBajoNoB;
	let banderDelMasFlaco;
	let banderaDelMasFlacoNoB;

	banderaDelMasFlacoNoB = true;
	banderDelMasFlaco = true;
	contadorSexoF = 0;
	acumuladorAltura = 0;

	for (i = 0; i < 7; i++)
	{
		nombre = prompt("Ingrese su nombre");
		while(!isNaN (nombre))
		{
			nombre = prompt("Error, nombre invalido");
		}

		altura = parseFloat(prompt("Ingrese su altura"));
		while(isNaN(altura))
		{
			altura = parseFloat(prompt("Error, altura invalida"));
		}

		peso = parseFloat(prompt("Ingrese su peso"));
		while (isNaN(peso))
		{
			peso = parseFloat(prompt("Error, peso invalido"));
		}

		sexo = prompt("Ingresa su sexo (f, m o b");
		while(!(sexo == "f" || sexo == "F" || sexo == "m" || sexo == "M" || sexo == "b" || sexo == "B"))
		{
			sexo = prompt("Error, sexo invalido");
		}

		switch (sexo)
		{
			case "f" || "F":

				contadorSexoF = contadorSexoF + 1;
				break;

			case "m" || "M":
				break;
			case "b" || "B":

				if (banderaDelMasFlacoNoB == true)
				{	
					pesoMasBajoNoB = peso;
					nombreNoBinario = nombre;
					banderaDelMasFlacoNoB = false;
				}
				else if (peso < pesoMasBajoNoB)
				{
					pesoMasBajoNoB = peso;
					nombreNoBinario = nombre;
				}
				break;
		}

		if (banderDelMasFlaco == true)
		{
			pesoMasBajo = peso;
			nombreMasFlaco = nombre;
			banderDelMasFlaco = false;
		}
		else if (peso < pesoMasBajo)
		{
			pesoMasBajo = peso;
			nombreMasFlaco = nombre;
		}

		acumuladorAltura = acumuladorAltura + altura;
	} //FIN DEL FOR

	promedioAltura = acumuladorAltura / 7;

	console.log("La cantidad de personas de sexo Femenino es de: " + contadorSexoF);
	console.log("La altura promedio del total de las personas es de: " + promedioAltura);
	console.log("El nombre de la persona con menos peso es: " + nombreMasFlaco);
	console.log("El nombre de la persona no binaria con menos peso es: " + nombreNoBinario);
	
}


/*
Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total

function mostrar()
{

	let producto;
	let marca;
	let fabricante;
	let precio;
	let cantidadProducto;
	
	let banderaJabon;
	let cantidadJabonMasalto;
	let precioJabonMasAlto;
	let fabricanteJabonMasalto;
	
	let acumuladorAlcohol;
	let acumuladorBarbijo;
	let acumuladorDeJabon;

	let banderaProductoMayorCantidad;
	let productoMayorCantidad;
	let cantidadMayor;

	let promedio;

	cantidadJabonMasalto = 0;
	cantidadJabonMasalto = 0;
	precioJabonMasAlto = 0;
	acumuladorAlcohol = 0;
	acumuladorBarbijo = 0;
	acumuladorDeJabon = 0;



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

		cantidadProducto = parseInt(prompt("Ingrese cantidad de productos (la cantidad no puede ser 0 ni mayor a 1000 unidades)"));
		while(isNaN(cantidadProducto) || cantidadProducto <= 0 || cantidadProducto > 1000)
		{
			cantidadProducto = parseInt(prompt("Error, ingrese cantidad de productos (la cantidad no puede ser 0 ni mayor a 1000 unidades)"))
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

				acumuladorBarbijo += cantidadProducto;
				contadorBarbijo ++;
				break;

			case "jabon":
				if (banderaJabon == true)
				{
					precioJabonMasAlto = precio;
					cantidadJabonMasalto = cantidadProducto;
					fabricanteJabonMasalto = fabricante;
					banderaJabon = false;
				}
				else if (precio > precioJabonMasAlto)
				{
					precioJabonMasAlto = precio;
					cantidadJabonMasalto = cantidadProducto;
					fabricanteJabonMasalto = fabricante;
				}
				
				acumuladorDeJabon += cantidadProducto;
				contadorJabon ++;
				break;
				
			case "alcohol":

				acumuladorAlcohol += cantidadProducto;
				contadorAlcohol ++;

				break;
		}

		if (banderaProductoMayorCantidad == true)
		{
			cantidadMayor = cantidadProducto;
			productoMayorCantidad = producto
			banderaProductoMayorCantidad = false;
		}
		
		else if(cantidadProducto > cantidadMayor)
		{
			cantidadMayor = cantidadProducto;
			productoMayorCantidad = producto;
		}
	}

	switch(productoMayorCantidad)
	{
		case "jabon":
			promedio = cantidadJabon / contadorJabon;
			break;

		case "alcohol":
			promedio = acumuladorAlcohol / contadorAlcohol;
			break;

		case "barbijo":
			promedio = acumuladorBarbijo / contadorBarbijo;
			break;
	}

	console.log ("Del alcohol mas barato las unidades son de " + cantidadJabonMasalto + " y su fabricante es " + fabricanteJabonMasalto);
	console.log ("el promedio por compra del producto con más unidades es de " + promedio);
	console.log ("la cantidad de barbijos es de " + acumuladorBarbijo);


}
*/