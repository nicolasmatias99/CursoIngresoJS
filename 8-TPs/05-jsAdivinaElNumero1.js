//NICOLAS COSTANTINI
/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/

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
    
}

//NO ME SUMA 1 EN EL CONTADOR DE INTENTOS! SOLUCIONAR.