//NICOLAS COSTANTINI
/*
Parcial 2020 2 bis: /"La veterinaria" pedir el ingreso de 10 mascotas  (FOR)
validar     (WHILE)
tipo ( gato , perro , pájaro y otros)solo esos cuatro tipo (CLASIFICO)
raza: si es perro (pastor, toy, callejero) y 
si gato (siamés, turco, Peterbald , generico) 
y si es de tipo "otros" o pájaro , pedir solo un texto
Edad entre 1 y 20 para gatos y perros , para "otros" entre 1 y 100 , para pájaro 1 de 50
nombre (no se permite solo numero)
mostrar por cada tipo el nombre del mas viejo , solo si hay de ese tipo
mostrar que raza de gatos tiene mas animales y el promedio de edad de esta raza
*/
function mostrar()
{
    let tipoAnimal;
    let razaAnimal;
    let nombreAnimal;
    let edadAnimal;

    let contadorPerro;
    let contadorGato;
    let contadorPajaro;
    let contadorOtros;
    let contadorSiames;
    let contadorTurco;
    let contadorPeterbald;
    let contadorGenerico;
    let acumuladorEdadSiames;
    let acumuladorEdadTurco;
    let acumuladorEdadPeterbald;
    let acumuladorEdadGenerico;

    let razaConMasCantidadGatos;
    let promedioDeEdad;

    let banderaDelMasViejoPerro;
    let banderaDelMasViejoGato;
    let banderaDelMasViejoPajaro;
    let banderaDelMasViejoOtros;

    let nombrePerroViejo;
    let edadPerroViejo;
    let nombreGatoViejo;
    let edadGatoViejo;
    let nombrePajaroViejo;
    let edadPajaroViejo;
    let nombreOtrosViejo;
    let edadOtrosViejo;

    banderaDelMasViejoPerro = true;
    banderaDelMasViejoGato = true;
    banderaDelMasViejoOtros = true;
    banderaDelMasViejoPajaro = true;

    contadorOtros = 0;
    contadorPajaro = 0;
    contadorPerro = 0;
    contadorGato = 0;

    contadorSiames = 0;
    contadorGenerico = 0;
    contadorPeterbald = 0;
    contadorTurco = 0;
    acumuladorEdadPeterbald = 0;
    acumuladorEdadSiames = 0;
    acumuladorEdadTurco = 0;
    acumuladorEdadGenerico = 0;

    for(i = 0; i < 10; i++)
    {
       tipoAnimal = prompt("ingrese tipo de animal (gato, perro, pajaro y otros)");
        while(!(tipoAnimal == "perro" || tipoAnimal == "gato" || tipoAnimal == "pajaro" || tipoAnimal == "otros"))
        {
            tipoAnimal = prompt("Error, tipo de animal invalido (gato, perro, pajaro y otros)");
        }

        if (tipoAnimal == "perro")
        {
            razaAnimal = prompt("ingrese la raza del perro (pastor, toy o callejero");
            while(!(razaAnimal == "pastor" || razaAnimal == "toy" || razaAnimal == "callejero"))
            {
                razaAnimal = prompt("Error, raza de perro invalida (pastor, toy o callejero)");
            }           
        }
        else if (tipoAnimal == "gato")
        {
            razaAnimal = prompt("ingrese la raza del gato (siames, turco, peterbald o generico)");
            while(!(razaAnimal == "siames" || razaAnimal == "turco" || razaAnimal == "peterbald" || razaAnimal == "generico"))
            razaAnimal = prompt("Error, raza del gato invalida (siames, turco, peterbald o generico");
        }
        else
        {
            razaAnimal = prompt("ingrese raza del animal (solo texto)")
            while (!isNaN(razaAnimal))
            {
                razaAnimal = prompt("Error, raza invalida (solo texto)")
            }
        }
        
        if(tipoAnimal == "perro" || "gato")
        {
            edadAnimal = parseInt(prompt("ingrese edad del animal (entre 1 y 20)"));
            while(isNaN(edadAnimal) || edadAnimal < 1 || edadAnimal > 20)
            {
                edadAnimal = parseInt(prompt("Error, edad del animal invalida (entre 1 y 20)"));
            }
        }
        else if (tipoAnimal == "pajaro")
        {
            edadAnimal = parseInt(prompt("Ingrese edad del animal (entre 1 y 50)"));
            while (isNaN(edadAnimal) || edadAnimal < 1 || edadAnimal > 50)
            {
                edadAnimal = parseInt(prompt("Error, edad del animal invalida (entre 1 y 50)"));
            }
        }
        else if (tipoAnimal == "otros")
        {
            edadAnimal = parseInt(prompt("Ingrese edad del animal (entre 1 y 100)"));
            while (isNaN(edadAnimal) || edadAnimal < 1 || edadAnimal > 100)
            edadAnimal = parseInt(prompt("Error, edad del animal invalida (entre 1 y 100)"));
        }

        nombreAnimal = prompt("ingrese el nombre del animal (solo se permite numero")
        while (!isNaN(nombreAnimal))
        {
            nombreAnimal = prompt("Error, nombre invalido (no se permiten numeros");
        }

        switch (tipoAnimal)
        {
            case "gato":

                contadorGato = contadorGato + 1;

                switch(razaAnimal)
                {
                    case "siames":
                        contadorSiames = contadorSiames + 1;
                        acumuladorEdadSiames = acumuladorEdadSiames + edadAnimal;
                        break;

                    case "turco":
                        contadorTurco = contadorTurco + 1;
                        acumuladorEdadTurco = acumuladorEdadTurco + edadAnimal;
                        break;
                    case "peterbald":
                        contadorPeterbald = contadorPeterbald + 1;
                        acumuladorEdadTurco = acumuladorEdadTurco + edadAnimal;
                        break;

                    case "generico":
                        contadorGenerico = contadorGenerico + 1;
                        acumuladorEdadGenerico = acumuladorEdadGenerico +1;
                        break;
                }       

                if (banderaDelMasViejoGato == true)
                {
                    nombreGatoViejo = nombreAnimal;
                    edadGatoViejo = edadAnimal;
                    banderaDelMasViejoGato = false;
                }
                else if (edadAnimal > edadGatoViejo)
                {
                    nombreGatoViejo = nombreAnimal;
                    edadGatoViejo = edadAnimal;
                }
                break;
            case "perro":

                contadorPerro = contadorPerro + 1;

                if (banderaDelMasViejoPerro == true)
                {
                    nombrePerroViejo = nombreAnimal;
                    edadPerroViejo = edadAnimal;
                    banderaDelMasViejoPerro = false;
                }
                else if (edadAnimal > edadPerroViejo)
                {
                    nombrePerroViejo = nombreAnimal;
                    edadPerroViejo = edadAnimal;
                }
                break;

            case "otros":

                contadorOtros = contadorOtros + 1;

                if (banderaDelMasViejoOtros == true)
                {
                    nombreOtrosViejo = nombreAnimal;
                    edadOtrosViejo = edadAnimal;
                    banderaDelMasViejoOtros = false;
                }
                else if (edadAnimal > edadOtrosViejo)
                {
                    nombreOtrosViejo = nombreAnimal;
                    edadOtrosViejo = edadAnimal;
                }
                break;

            case "pajaro":

                contadorPajaro = contadorPajaro + 1;

                if (banderaDelMasViejoPajaro == true)
                {
                    nombrePajaroViejo = nombreAnimal;
                    edadPajaroViejo = edadAnimal;
                    banderaDelMasViejoPajaro = false;
                }
                else if (edadAnimal > edadPajaroViejo)
                {
                    nombrePajaroViejo = nombreAnimal;
                    edadPajaroViejo = edadAnimal;
                }
                break;
            
        }
    }//FIN DEL FOR.

    if (contadorSiames > contadorGenerico && contadorSiames > contadorPeterbald && contadorSiames > contadorTurco)
    {
        razaConMasCantidadGatos = "Siames"
        promedioDeEdad = acumuladorEdadSiames / contadorSiames;
    }
    else if (contadorGenerico > contadorPeterbald && contadorGenerico > contadorSiames && contadorGenerico > contadorTurco)
    {
        razaConMasCantidadGatos = "Generico"
        promedioDeEdad = acumuladorEdadGenerico / contadorGenerico;
    }
    else if (contadorPeterbald > contadorGenerico && contadorPeterbald > contadorSiames && contadorPeterbald > contadorTurco)
    {
        razaConMasCantidadGatos = "Peterbald"
        promedioDeEdad = acumuladorEdadPeterbald / contadorPeterbald;
    }
    else 
    {
        razaConMasCantidadGatos = "Turco"
        promedioDeEdad = acumuladorEdadTurco / contadorTurco;
    }

    if(contadorPerro != 0)
    {
        console.log("El nombre del perro mas viejo es: " + nombrePerroViejo);
    }

    if(contadorGato != 0)
    {
        console.log("El nombre del gato mas viejo es: " + nombreGatoViejo);
    }

    if(contadorPajaro != 0)
    {
        console.log("El nombre del pajaro mas viejo es: " + nombrePajaroViejo);
    }
    if (contadorOtros != 0)
    {
        console.log('El nombre del "otro" mas viejo es: ' + nombreOtrosViejo);
    }

    console.log("La raza de gato con mas cantidad de animales es: " + razaConMasCantidadGatos + " y el promedio de edad es de " + promedioDeEdad);




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
/*
    let respuesta = "si"
    let precioBolsa;
    let material;
    let cantidadBolsas;
    let acumuladorDeBolsas;

    let importeTotal;
    let importeBruto;
    let descuento;
    let mensaje;

    let materialConMayorCantidad;
    let mayorCantidadDeBolsas;

    let materialMasCaro;
    let precioMasCaro;

    let banderaMaterialMasCaro;
    let banderaMaterialConMayorCantidad;

    banderaMaterialMasCaro = true;
    banderaMaterialConMayorCantidad = true;
    acumuladorDeBolsas = 0;
    importeBruto = 0;

    while(respuesta == "si")
    {
        material = prompt("ingrese material (arena, cal o cemento)");
        while(!(material == "arena" || material == "cal" || material == "cemento"))
        {
            material = prompt("Error, material invalido");
        }

        cantidadBolsas = parseInt(prompt("ingrese cantidad de bolsas"));
        while(isNaN(cantidadBolsas) || cantidadBolsas <= 0)
        {
            cantidadBolsas = parseInt(prompt("Error, cantidad de bolsas invalido"));
        }

        precioBolsa = parseFloat(prompt("Ingrese precio por bolsa"));
        while (isNaN(precioBolsa) || precioBolsa < 0)
        {
            precioBolsa = parseFloat(prompt("Error, precio invalido"));
        }

        if (banderaMaterialConMayorCantidad == true)
        {
            materialConMayorCantidad = material;
            mayorCantidadDeBolsas = cantidadBolsas;
            banderaMaterialConMayorCantidad = false;
        }
        else if (cantidadBolsas > mayorCantidadDeBolsas)
        {
            mayorCantidadDeBolsas = cantidadBolsas;
            materialConMayorCantidad = material;
        }

        if (banderaMaterialMasCaro == true)
        {
          precioMasCaro = precioBolsa;
          materialMasCaro = material;
          banderaMaterialMasCaro = false;
        }
        else if (precioBolsa > precioMasCaro)
        {
            precioMasCaro = precioBolsa;
            materialMasCaro = material;
        }

        acumuladorDeBolsas = acumuladorDeBolsas + cantidadBolsas;
        importeBruto = importeBruto + precioBolsa * cantidadBolsas;

        respuesta = prompt("Desea continuar si/no");
      
    }

    if (acumuladorDeBolsas >= 30)
    {
        descuento = -25;
    }
    else if (acumuladorDeBolsas >= 10)
    {
        descuento = -15;
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

    console.log ("el importe bruto es de: $ " + importeBruto);
    console.log (mensaje);
    console.log ("el material con mas cantidad de bolsas es: " + materialConMayorCantidad);
    console.log ("el material mas caro es: " + materialMasCaro);
    */
}
