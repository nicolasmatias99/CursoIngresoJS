/*  Nicolas Costantini 
    Division B
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let suma; 


    precioUno = parseInt (document.getElementById("txtIdPrecioUno").value);
    precioDos = parseInt (document.getElementById("txtIdPrecioDos").value); 
    precioTres = parseInt (document.getElementById("txtIdPrecioTres").value);

    suma = precioUno + precioDos + precioTres; 

    alert("el precio total es de " + suma);

}
function Promedio () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let promedio;

    precioUno = parseInt (document.getElementById("txtIdPrecioUno").value);
    precioDos = parseInt (document.getElementById("txtIdPrecioDos").value); 
    precioTres = parseInt (document.getElementById("txtIdPrecioTres").value);
 

    promedio = (precioUno + precioDos + precioTres) / 3;

    alert ("el promedio es de " + promedio);

	
}
function PrecioFinal () 
{
    let precioUno;
    let precioDos;
    let precioTres;
    let precioTotal;
    let precioFinal;
    let iva;
    let aumento;
   

    iva = 21

    precioUno = parseInt (document.getElementById("txtIdPrecioUno").value);
    precioDos = parseInt (document.getElementById("txtIdPrecioDos").value); 
    precioTres = parseInt (document.getElementById("txtIdPrecioTres").value);

    precioTotal = precioUno + precioDos + precioTres;

    aumento = precioTotal * iva / 100;
    
    precioFinal = precioTotal + aumento;

    alert ("El precio final es de " + precioFinal);
	
}