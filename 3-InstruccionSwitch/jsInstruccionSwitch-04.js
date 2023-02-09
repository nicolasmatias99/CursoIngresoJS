function mostrar()
{
	let mesDelAñ

	mesDelAño = document.getElementById("txtIdMes").value;

	switch(mesDelAño){
		
		case "Febrero":
			alert("Este mes tiene 28 días");
			break;
		
		case "Enero": 
		case "Marzo":
		case "Mayo":
		case "Junio":
		case "Julio":
		case "Agosto":	
		case "Octubre":
		case "Diciembre":
			
			alert("este mes tiene 31 días");
			break;

		default: 

			alert("este mes tiene 30 días");
			break;
	
		
	}
	
	



}//FIN DE LA FUNCIÓN