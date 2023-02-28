//NICOLAS COSTANTINI
/*
Parcial 1 2020 bis: /"Super chino" Se pide el ingreso de mercadería de un supermercado , 
hasta que el usuario quiera,se pide :
tipo(limpieza , comestible , otros)solo estos tres tipos
nombre del producto
importe del producto (no mayor a 1000 pesos)
procedencia(importado, nacional, elaborado)
Peso (no mayor a 30 kilos)
informar SOLO SI HAY
a) el NOMBRE del mas pesado de los comestibles
b) el NOMBRE del mas caro de todos los productos
c) el NOMBRE del mas barato de los elaborados
d)el tipo de mercadería que mas aparece
e)el porcentaje de productos elaborados por sobre el total
f) el promedio de pesos por cada tipo ingresado/
*/

function mostrar()
{
	let tipoMercaderia;
	let nombreDelProducto;
	let precioDelProducto;
	let procedenciaDelProducto;
	let pesoDelProducto;
	
	let promedioPesos;
	let porcentajeElaborados;
	let mercaderiaMasComprada;
	let nombreComestibleMasPesado;
	let pesoComestibleMasPesado;
	let nombreProductoMasCaro;
	let precioProductoMasCaro;
	let elaboradoMasBarato;
	let nombreElaboradoMasBarato;

	let acumuladorPrecio = 0;
	
	let contadorTipos = 0;
	let contadorElaborados = 0;
	let contadorMercaderia = 0;
	let contadorLimpieza = 0;
	let contadorComestibles = 0;
	let contadorOtros = 0;

	let banderaMasPesadoComestibles = true;
	let banderaMasCaro = true;
	let banderaMasBaratoElaborados = true;

	let respuesta = "si";

	while(respuesta == "si")
	{
		tipoMercaderia = prompt("Ingrese tipo de mercaderia (limpieza, comestibles u otros)");
		while(!(tipoMercaderia == "limpieza" || tipoMercaderia == "comestibles" || tipoMercaderia == "otros"))
		{
			tipoMercaderia = prompt("Error, tipo de mercaderia invalida");
		}

		nombreDelProducto = prompt("Ingrese el nombre del producto");
		while(!isNaN(nombreDelProducto))
		{
			nombreDelProducto = prompt("Error, nombre de producto Invalido");
		}

		precioDelProducto = parseFloat(prompt("Ingrese precio del producto (no mayor a 1000 pesos)"));
		while(isNaN(precioDelProducto) ||precioDelProducto < 0 || precioDelProducto > 1000)
		{
			precioDelProducto = parseFloat(prompt("Error, precio invalido (no debe de ser mayor a 1000 pesos)"));
		}

		procedenciaDelProducto = prompt("Ingrese la procedencia del producto (importado, nacional o elaborado)");
		while(!(procedenciaDelProducto == "importado" || procedenciaDelProducto == "nacional" || procedenciaDelProducto == "elaborado"))
		{
			procedenciaDelProducto = prompt("Error, procedencia del producto invalida");
		}

		pesoDelProducto = parseFloat(prompt("Ingrese peso del producto (no debe de ser mayor a 30 kg)"));
		while(pesoDelProducto <= 0 || pesoDelProducto > 30)
		{
			pesoDelProducto = parseFloat(prompt("Error peso invalido (no debe de ser mayor a 30 kg)"));
		}

		switch(tipoMercaderia)
		{
			case "comestibles":

				contadorComestibles = contadorComestibles + 1;

				if (banderaMasPesadoComestibles == true)
				{
					pesoComestibleMasPesado = pesoDelProducto;
					nombreComestibleMasPesado = nombreDelProducto;
					banderaMasPesadoComestibles = false;
				}
				else if (pesoDelProducto > pesoComestibleMasPesado)
				{
					pesoComestibleMasPesado = pesoDelProducto;
					nombreComestibleMasPesado = nombreDelProducto;
				}
				break;

			case "limpieza":

				contadorLimpieza = contadorLimpieza + 1;
				break;

			case "otros":

				contadorOtros = contadorOtros + 1;
				break;

		}
		
		switch(procedenciaDelProducto)
		{
			case "elaborado":

				contadorElaborados = contadorElaborados + 1;

				if (banderaMasBaratoElaborados == true)
				{
					elaboradoMasBarato = precioDelProducto;
					nombreElaboradoMasBarato = nombreDelProducto;
					banderaMasBaratoElaborados = false;
				}
				else if (precioDelProducto < elaboradoMasBarato)
				{
					elaboradoMasBarato = precioDelProducto;
					nombreElaboradoMasBarato = nombreDelProducto;
				}

			case "importado":
			case "nacional":
			break;
		}

		if (banderaMasCaro == true)
		{
			precioProductoMasCaro = precioDelProducto;
			nombreProductoMasCaro = nombreDelProducto;
			banderaMasCaro = false;
		}
		else if (precioDelProducto > precioProductoMasCaro)
		{
			precioProductoMasCaro = precioDelProducto;
			nombreProductoMasCaro = nombreDelProducto;
		}

		contadorMercaderia = contadorMercaderia + 1; 			//CUENTO LA MERCADERIA

		acumuladorPrecio = acumuladorPrecio + precioDelProducto;

		respuesta = prompt("Desea continuar si/no");

	}//TERMINA EL WHILE

	if (contadorComestibles > contadorLimpieza && contadorComestibles > contadorOtros)		//MERCADERIA QUE MAS APARECE
	{
		mercaderiaMasComprada = "Comestibles";
	}
	else if (contadorLimpieza > contadorComestibles && contadorLimpieza > contadorOtros)
	{
		mercaderiaMasComprada = "Limpieza";
	}
	else 
	{
		mercaderiaMasComprada = "Otros";
	}

	if (contadorComestibles > 0 && contadorOtros > 0 && contadorLimpieza > 0)
	{
		contadorTipos = 3;
	}
	else if(contadorComestibles > 0 && contadorOtros > 0 || contadorLimpieza > 0)
	{
		contadorTipos = 2;
	}
	else 
	{
		contadorTipos = 1;
	}

	promedioPesos = acumuladorPrecio / contadorTipos;

	porcentajeElaborados = contadorElaborados / contadorMercaderia * 100;
	
	console.log("el NOMBRE del mas pesado de los comestibles es: " + nombreComestibleMasPesado);
	console.log("el NOMBRE del mas caro de todos los productos es: " + nombreProductoMasCaro);
	console.log("el NOMBRE del mas barato de los elaborados es: " + nombreElaboradoMasBarato);
	console.log("el tipo de mercadería que mas aparece es: " + mercaderiaMasComprada);
	console.log("el porcentaje de productos elaborados por sobre el total es: %" + porcentajeElaborados);
	console.log("el promedio de pesos por cada tipo ingresado es: " + promedioPesos);
	
}
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
/*
	let producto;
	let marca;
	let fabricante;
	let precio;
	let cantidadProducto;
	
	let banderaAlcohol;
	let cantidadAlcoholMasBajo;
	let precioAlcoholMasBajo;
	let fabricanteAlcoholMasBajo;
	
	let acumuladorAlcohol;
	let acumuladorBarbijo;
	let acumuladorJabon;

	let contadorAlcohol = 0;
	let contadorJabon = 0;
	let contadorBarbijo = 0;
	
	let promedioCompra;

	
	let mayorTipo;
	let cantidadMayor;

	banderaAlcohol = true;
	
	acumuladorAlcohol = 0;
	acumuladorBarbijo = 0;
	acumuladorJabon = 0;

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

				acumuladorBarbijo = acumuladorBarbijo + cantidadProducto;
				contadorBarbijo = contadorBarbijo + 1;
				break;

			case "jabon":
				
				acumuladorJabon = acumuladorJabon + cantidadProducto;
				contadorJabon = contadorJabon + 1;
				break;

			case "alcohol":

				acumuladorAlcohol = acumuladorAlcohol + cantidadProducto;
				contadorAlcohol =  contadorAlcohol + 1;

				if (banderaAlcohol == true)
				{
					precioAlcoholMasBajo = precio;
					cantidadAlcoholMasBajo = cantidadProducto;
					fabricanteAlcoholMasBajo = fabricante;
					banderaAlcohol = false;
				}
				else if (precio < precioAlcoholMasBajo)
				{
					precioAlcoholMasBajo = precio;
					cantidadAlcoholMasBajo = cantidadProducto;
					fabricanteAlcoholMasBajo = fabricante;
				}
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

	
	if(acumuladorAlcohol > acumuladorJabon && acumuladorAlcohol > acumuladorBarbijo)
	{
		mayorTipo = "el alcohol"; 
		promedioCompra = acumuladorAlcohol / contadorAlcohol;
	}
	else if(acumuladorJabon > acumuladorBarbijo && acumuladorJabon > acumuladorAlcohol)
	{
		promedioCompra = acumuladorJabon / contadorJabon;
		mayorTipo = "el jabon"; 
	}
	else
	{
		promedioCompra = acumuladorBarbijo / contadorBarbijo;
		mayorTipo = "el barbijo";
	}
	console.log ("Del alcohol mas barato las unidades son de " + cantidadAlcoholMasBajo + " y su fabricante es " + fabricanteAlcoholMasBajo);
	console.log ("el producto con más unidades es " + mayorTipo + " y el promedio por compra es " + promedioCompra);
	console.log ("la cantidad de jabones es de " + acumuladorJabon);


*/
//CORREGIDO EN CLASE.

/*
function mostrar() {

	let tipoProducto;
	let precioProducto;
	let unidadesProducto;
	let marcaProducto;
	let fabricanteProducto;
	let contadorAlcohol;
	let contadorBarbijo;
	let contadorJabon;
	let acumuladorAlcohol;
	let acumuladorBarbijo;
	let acumuladorJabon;
	let unidadesCantidadMasBaratoAlcohol;
	let fabricanteMasBaratoAlcochol;
	let precioMasBaratoAlcohol;
	let flagAlcohol;
	let flagTipoConMasUnidades;
	let promedioCompra;
	let mayorTipo; 

	flagAlcohol = 0;
	flagTipoConMasUnidades = 0;

	contadorAlcohol = 0;
	contadorBarbijo = 0;
	contadorJabon = 0;
	acumuladorAlcohol = 0;
	acumuladorBarbijo = 0;
	acumuladorJabon = 0;

	for (let i = 0; i < 5; i++) {
		tipoProducto = prompt("Ingrese el nombre del producto: barbijo, jabon o alcohol");
		while (tipoProducto != "barbijo" && tipoProducto != "jabon" && tipoProducto != "alcohol") {
			tipoProducto = prompt("Error- Ingrese el nombre del producto: barbijo, jabon o alcohol");
		}

		precioProducto = parseFloat(prompt("Ingrese el precio del producto unitario: "));
		while (isNaN(precioProducto) || precioProducto < 100 || precioProducto > 300) {
			precioProducto = parseFloat(prompt("Error- Ingrese el precio del producto: "));
		}

		unidadesProducto = parseInt(prompt("ingrese la cantidad de unidades del producto: "));
		while (isNaN(unidadesProducto) || unidadesProducto < 1 || unidadesProducto > 1000) {
			unidadesProducto = parseInt(prompt("Error- ingrese la cantidad de unidades del producto: "));
		}

		marcaProducto = prompt("Ingrse la marca del producto: ");
		fabricanteProducto = prompt("ingrese el fabricante del producto: ");

		switch (tipoProducto) {
			case "alcohol":
				if (flagAlcohol == 0 || precioProducto < precioMasBaratoAlcohol) {
					fabricanteMasBaratoAlcochol = fabricanteProducto;
					unidadesCantidadMasBaratoAlcohol = unidadesProducto;
					precioMasBaratoAlcohol = precioProducto;
					flagAlcohol = 1;
				} 
				contadorAlcohol = contadorAlcohol + 1;
				acumuladorAlcohol = unidadesProducto + acumuladorAlcohol;
				break;
			case "barbijo":
				contadorBarbijo = contadorBarbijo + 1;
				acumuladorBarbijo = acumuladorBarbijo + unidadesProducto;
				break;
			case "jabon":
				contadorJabon = contadorJabon + 1 ;
				acumuladorJabon = acumuladorJabon + unidadesProducto;
				break;
		}

	}//fin del for 


	if(acumuladorAlcohol > acumuladorJabon && acumuladorAlcohol > acumuladorBarbijo){
		mayorTipo = "el alcohol"; 
		promedioCompra = acumuladorAlcohol / contadorAlcohol;
	}else if(acumuladorJabon > acumuladorBarbijo && acumuladorJabon > acumuladorAlcohol){
		promedioCompra = acumuladorJabon / contadorJabon;
		mayorTipo = " el jabon"; 
	}else{
		promedioCompra = acumuladorBarbijo / contadorBarbijo;
		mayorTipo = " el barbijo"; 
	}

	console.log("Cantidad de unidades del mas barato de los alcohol: " + unidadesCantidadMasBaratoAlcohol + ". Su fabricante es: " + fabricanteMasBaratoAlcochol);
	console.log("Unidades totales de jabon: " + acumuladorJabon);
	console.log("El tipo con mas unidades es: " + mayorTipo);
	console.log("El promedio de compra del tipo con mas unidades es: " + promedioCompra);
}
*/
