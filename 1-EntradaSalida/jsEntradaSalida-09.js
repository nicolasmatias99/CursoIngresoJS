/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    let numero1 

	numero1 = document.getElementById("txtIdSueldo").value;

	document.getElementById ("txtIdResultado").value = numero1 * 1.1
}
