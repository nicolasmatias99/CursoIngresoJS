/*  Nicolas Costantini 
    Division B
3.  Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let fahrenheit;
    let centígrados;

    fahrenheit = document.getElementById("txtIdTemperatura").value;

    centígrados = (fahrenheit - 32) * 5/9; 

    alert (fahrenheit + " fahrenheit son " + centígrados + " centígrados");
	
}

function CentigradosFahrenheit () 
{
    let centígrados;
	let fahrenheit;

    centígrados = document.getElementById("txtIdTemperatura").value; 

    fahrenheit = (centígrados * 9/5) + 32;

    alert(centígrados + " centígrados son " + fahrenheit + " fahrenheit");
}
