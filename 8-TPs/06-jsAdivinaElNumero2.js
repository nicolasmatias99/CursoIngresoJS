//NICOLAS COSTANTINI
/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto;
var contadorIntentos;

contadorIntentos = 0;


function comenzar()
{
   
  let minimo;
  let maximo;

  minimo = 1;
  maximo = 100;

	  //Genero el número RANDOM entre 1 y 100

  numeroSecreto = Math.round(Math.random() * (maximo - minimo) + minimo);

    //alert(numeroSecreto );

   console.log (numeroSecreto);
}

function verificar()
{
  let numeroIngresado;
  
  
  numeroIngresado = parseInt(document.getElementById("txtIdNumero").value);
  

  if (numeroIngresado == numeroSecreto)
  {
    contadorIntentos = contadorIntentos + 1;
    alert("“Usted es un ganador!!! y en solo " + contadorIntentos + " intentos”");
  }

  else if (numeroIngresado < numeroSecreto)
  {    
    alert("falta.");
    contadorIntentos = contadorIntentos + 1;
  }

  else 
  {
    alert("Se pasó.");
    contadorIntentos = contadorIntentos + 1;
  }

  

  document.getElementById("txtIdIntentos").value = contadorIntentos;
    
  switch(contadorIntentos)
	{
		case 1:
				if (numeroIngresado == numeroSecreto)
				{
					alert("usted es un Psíquico");
				}
					break;
		case 2: 
				if (numeroIngresado == numeroSecreto)
				{
					alert ("excelente percepcion");
				}
					break;
		case 3: 
				if (numeroIngresado == numeroSecreto)
				{
					alert("esto es suerte");
				}
					break;
		case 4:
				if (numeroIngresado == numeroSecreto)
				{
					alert("excelente tecnica");
				}
					break;
		case 5:
				if (numeroIngresado == numeroSecreto)
				{
					alert("usted esta en la media");
				}
					break;
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
				if (numeroIngresado == numeroSecreto)
				{
					alert ("falta tecnica");
				}
					break;
		default:
				alert("afortunado en el amor")
				break;


	}
}
	
	/*switch(contadorIntentos)
	{
		case 1:
				if (numeroIngresado == numeroSecreto)
				{
					alert("usted es un Psíquico");
				}
					break;
		case 2: 
				if (numeroIngresado == numeroSecreto)
				{
					alert ("excelente percepcion");
				}
					break;
		case 3: 
				if (numeroIngresado == numeroSecreto)
				{
					alert("esto es suerte");
				}
					break;
		case 4:
				if (numeroIngresado == numeroSecreto)
				{
					alert("excelente tecnica");
				}
					break;
		case 5:
				if (numeroIngresado == numeroSecreto)
				{
					alert("usted esta en la media");
				}
					break;
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
				if (numeroIngresado == numeroSecreto)
				{
					alert ("falta tecnica");
				}
					break;
		default:
				alert("afortunado en el amor")
				break;


	}*/
