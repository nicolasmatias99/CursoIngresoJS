/*  Nicolas Costantini
    Division B
2.	Para el departamento de Construcción:
A.	mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largoDelTerreno;
    let anchoDelTerreno;
    let perimetro;
    let metrosDeAlambre;

    largoDelTerreno = parseInt (document.getElementById("txtIdLargo").value); 
    anchoDelTerreno = parseInt (document.getElementById("txtIdAncho").value);

    perimetro = (largoDelTerreno + anchoDelTerreno) * 2

    metrosDeAlambre = perimetro * 3
    
    alert("Se necesita " + metrosDeAlambre + " metros de alambre")

}
function Circulo () 
{
    
    let radioDelTerreno;
    let perimetro;
    let metrosDeAlambre;

    radioDelTerreno = parseInt (document.getElementById("txtIdRadio").value); 

    perimetro = 2 * 3.14 * radioDelTerreno;

    metrosDeAlambre = perimetro * 3;
    
    alert ("Se necesita " + metrosDeAlambre + " metros de alambre");

}
function Materiales () 
{
    let largoDelTerreno;
    let anchoDelTerreno;
    let mt2;
    let cal;
    let cemento;

    largoDelTerreno = parseInt (document.getElementById("txtIdLargo").value); 
    anchoDelTerreno = parseInt (document.getElementById("txtIdAncho").value);

    mt2 = largoDelTerreno * anchoDelTerreno;

    cal = mt2 * 3;

    cemento = mt2 * 2;
    
    alert("se nesecita comprar " + cal + " bolsas de cal" + " y " + cemento + " bolsas de cemento.");


	
}