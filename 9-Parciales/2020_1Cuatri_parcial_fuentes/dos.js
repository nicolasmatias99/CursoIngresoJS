/*
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/
function mostrar()
{
  let precio;
  let material;
  let cantidad;
  let cantidadTotal;
  let descuento;
  let importe;
  let importeTotal = 0;
  let importeConDescuento;
  let banderaCantidadMay;
  let cantidadMayor;
  let materialMayor;
  let banderaPrecioMay;
  let precioMayor;
  let materialCaro;
  let stop;
  
  banderaPrecioMay = true;
  banderaCantidadMay = true;
  cantidadTotal = 0;

	for (i = 0; i < 1000; i++)
	{
		material = (prompt("Ingrese un material: arena, cal o cemento"));
		
      while (!(material == "arena" || material == "cal" || material == "cemento")) 
		  {
			  material = prompt("Error, material invalido!!");
		  }

    cantidad = parseInt(prompt("Ingrese cantidad de materiales"));

      while (isNaN(cantidad) || cantidad <= 0)
      {
        cantidad = parseInt(prompt("Error, ingrese cantidad"));
      }

    precio = parseInt(prompt("Ingrese precio"));
      
      while (isNaN(precio) || precio <= 0)
      {
        precio = parseInt(prompt("Error, precio invalido!!"))
      }

      cantidadTotal += cantidad

      if (cantidadTotal > 10 && cantidadTotal < 30)
      {
        descuento = -15;
      }
      else if(cantidadTotal >= 30)
      {
        descuento = -25;
      }
      else 
      {
        descuento = 0;
      }

      if (banderaCantidadMay == true)
      {
        cantidadMayor = cantidad;
        materialMayor = material;
        banderaCantidadMay = false;
      }

      else if (cantidad > cantidadMayor)
      {
        cantidadMayor = cantidad;
        materialMayor = material;
      }
      
      if (banderaPrecioMay == true)
      {
        precioMayor = precio;
        materialCaro = material;
        banderaPrecioMay = false;
      }

      else if (precio > precioMayor)
      {
        precioMayor = precio;
        materialCaro = material;
      }

      importe = precio * cantidad;
      importeTotal += importe;
      
      stop = prompt("Desea continuar? si/no");

        if (stop == "no" || stop == "NO" || stop == "No")
        {
          break;
        }
	}

  importeConDescuento = importeTotal + importeTotal * descuento / 100 

  console.log ("el importe bruto es de " + importeTotal);
  console.log ("el importe con descuento es de " + importeConDescuento);
  console.log ("el tipo con mas cantidad de bolsas es " + materialMayor);
  console.log ("el material mas caro es " + materialCaro);
}
