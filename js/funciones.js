$(document).ready(function(){
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
});