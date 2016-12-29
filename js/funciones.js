
//Funcion que cargara el javascript hasta que la pagina este cargada totalmente
$(document).ready(function(){
	/*Se declara la funcion estado para que controle el estado del boton que abre el menu*/
	/**Si el estado estadpo esta en 0 significa que el menu debera de estar escondido*/
	/*Si por el contrario el valoe de estado es de 1 significa que el menu esta desplegado*/
	var estado = 0;
	$("#btn-menu").click(function(){
		
		if(estado == 0){
			$("#menu-desp").slideDown();
			estado = 1;
		}else{
			$("#menu-desp").slideUp();
			estado = 0;
		}
		
	});
	
	/*Funcion que controla el comportamiento del menu una vez que es abierto en el modo "responsive" */
	/*Evalua cual es el ancho de la pantalla para determinar si el menu una vez accionado y "escondido de nuevo
	a la hora de cambiar el viewport a pantalla mas grande de 500px de ancho debera de aparecer tal cual se diseño para ese tipo de pantalla"*/
	$(window).resize(function(){
		var ancho = $(window).width();
		if(ancho >= 500){
			$("#menu-desp").css("display","block");		
		}else if(ancho < 500){
			$("#menu-desp").css("display","none");
			estado = 0;
		}
	});
	
	
});