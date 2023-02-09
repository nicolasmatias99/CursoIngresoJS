/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{   
    const PRECIO = 35;
    let cantidad;
    let marca; 
    let descuento; 
    let precioFinal;
    let precioSinDescuento;
    let iibb;
    
    marca = document.getElementById("Marca").value;

    cantidad = parseInt(document.getElementById("txtIdCantidad").value);

     if (cantidad > 5 )
   {
        descuento = -50; 
   }
   else if (cantidad == 5)
       
        {
            if (marca == "ArgentinaLuz")
            {
                descuento = -40; 
            }
            else
            {
                descuento = -30;
            }
        }   
    
   else if (cantidad == 4 ) 
       
        {
            if (marca == "ArgentinaLuz" || marca == "FelipeLamparas")
            {
                descuento = -25;  
            } 
            else 
            {
                descuento = -20;
            }    
        }

    else if (cantidad == 3 )

        {
            if (marca == "ArgentinaLuz")  
            {    
                descuento = -15; 
            }
            else if (marca == "FelipeLamparas")
            {
                descuento = -10;
            }
            else 
            {
                descuento = -5;
            }   
        }  

    else
    {
        descuento = 0;
    }
    
    precioSinDescuento = cantidad * PRECIO;      //PRECIO FINAL SIN DESCUENTO.

    precioFinal = Math.round(precioSinDescuento + precioSinDescuento * descuento / 100);     //HAGO EL DESCUENTO Y REDONDEO.          

    if (precioFinal > 120) 
    {
        iibb = Math.round(precioFinal * 10 / 100);         // APLICO IMPUESTOS Y REDONDEO.
        precioFinal += iibb;
        alert("Usted pago " + iibb + " de IIBB.");  
    }

    document.getElementById("txtIdprecioDescuento").value = "El precio total es de: " + precioFinal;    //MUESTRO EL PRECIO FINAL.
 }
 