/*
Recuperatorio de Parcial 2020: Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion,
 hasta que el cliente quiera:
  Tipo validad("arena";"cal";"cemento")
  Cantidad de bolsas(0-300),
  Precio por bolsa (más de cero y menor a 10000 ),
  al terminar la compra el cliente accede a un descuento segun las bolsas en total

  Si compro más de 15 bolsas en total tenes 10% de descuento sobre el total a pagar.
  Si compro más de 45 bolsas en total tenes 30% de descuento sobre el total a pagar.
  a) El importe total a pagar , bruto sin descuento y...
  b) el importe total a pagar con descuento(solo si corresponde)
  d) Informar la bolsa mas cara de Cal y la mas barata de Cemento.
  e) Cuantas bolsas de arena se compraron en total, y el promedio por compra.
*/
function mostrar()
{

    let respuesta = "si"
    let precioBolsa;
    let material;
    let cantidadBolsas;
    let acumuladorDeBolsas;

    let importeTotal;
    let importeBruto;
    let descuento;
    let mensaje;

    let precioMasBaratoCemento;

    let contadorArena = 0;
    let acumuladorDeBolsasArena;
    let promedioArena;

    let materialMasCaro;
    let PrecioMasCaroCal;

    let banderaCalMasCaro;
    let banderaCementoMasBarato;

    banderaCalMasCaro = true;
    banderaCementoMasBarato = true;
    acumuladorDeBolsas = 0;
    importeBruto = 0;

    while(respuesta == "si")
    {
        material = prompt("ingrese material (arena, cal o cemento)");
        while(!(material == "arena" || material == "cal" || material == "cemento"))
        {
            material = prompt("Error, material invalido");
        }

        cantidadBolsas = parseInt(prompt("ingrese cantidad de bolsas (0 a 300)"));
        while(isNaN(cantidadBolsas) || cantidadBolsas <= 0 && cantidadBolsas > 300)
        {
            cantidadBolsas = parseInt(prompt("Error, cantidad de bolsas invalido"));
        }

        precioBolsa = parseFloat(prompt("Ingrese precio por bolsa (0 a 10000)"));
        while (isNaN(precioBolsa) || precioBolsa <= 0 && precioBolsa > 10000)
        {
            precioBolsa = parseFloat(prompt("Error, precio invalido"));
        }

        switch (material)
        {
            case "cemento":
              
              if (banderaCementoMasBarato == true)
              {
                  precioMasBaratoCemento = precioBolsa;
                  banderaCementoMasBarato = false;
              }
              else if (precioBolsa < precioMasBaratoCemento)
              {
                precioMasBaratoCemento = precioBolsa;
              }
              break;

            case "cal":

              if (banderaCalMasCaro == true)
              {
                PrecioMasCaroCal = precioBolsa;
                banderaCalMasCaro = false;
              }
              else if (precioBolsa > PrecioMasCaroCal)
              {
                PrecioMasCaroCal = precioBolsa;
              }
              break;

            case "arena": 

              contadorArena = contadorArena + 1;
              acumuladorDeBolsasArena = acumuladorDeBolsas + cantidadBolsas;
              break;
        }

        acumuladorDeBolsas = acumuladorDeBolsas + cantidadBolsas;
        importeBruto = importeBruto + precioBolsa * cantidadBolsas;

        respuesta = prompt("Desea continuar si/no");
    }

    if (acumuladorDeBolsas >= 45)
    {
        descuento = -30;
    }
    else if (acumuladorDeBolsas >= 15)
    {
        descuento = -10;
    }
    else 
    {
        descuento = 0;
    }

    if (descuento != 0)
    {
        importeTotal = importeBruto + importeBruto * descuento / 100;
        mensaje = "El importe total con descuento es de $ " + importeTotal;
    }
    else 
    {
        importeTotal = importeBruto;
        mensaje = "No se aplico descuento"
    }

    promedioArena = acumuladorDeBolsas / contadorArena;

    console.log ("el importe bruto es de: $ " + importeBruto);
    console.log (mensaje);
    console.log ("la bolsa mas cara de cal es de: " + PrecioMasCaroCal + " y la bolsa mas barata de cemento es de: " + precioMasBaratoCemento);
    console.log ("la cantidad de bolsas de arena es de: " + acumuladorDeBolsasArena + " y el promedio por compra es de: " + promedioArena);
}

