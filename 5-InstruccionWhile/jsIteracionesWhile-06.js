//NICOLAS COSTANTINI
function mostrar()
{
	let contador;
	let acumulador;
	

	contador = 0;
	acumulador = 0;

	while(contador < 5)
	{
		contador ++;
		acumulador += parseInt (prompt("ingrese un numero"));
	}
	
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador/5;

}//FIN DE LA FUNCIÓN