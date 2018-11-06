// Empty JS for your own code to be here
$( document ).ready(function() {

/***************** ANIMACION INICIAL ***************/
	
	setTimeout(animacion, 2000);
	
	function animacion(){
		$("#splashscreen").css({opacity: 0.0, visibility: "hidden"}).animate({opacity: 1.0});	
		$(".top-content").css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0});	
	}
	
/****************************************************/
//Teclado numérico
$("#but1").click(function(){var value;value = $("#pinuser").val();$("#pinuser").attr("value", value+"1");});
$("#but2").click(function(){var value;value = $("#pinuser").val();$("#pinuser").attr("value", value+"2");});
$("#but3").click(function(){var value;value = $("#pinuser").val();$("#pinuser").attr("value", value+"3");});
$("#but4").click(function(){var value;value = $("#pinuser").val();$("#pinuser").attr("value", value+"4");});
$("#but5").click(function(){var value;value = $("#pinuser").val();$("#pinuser").attr("value", value+"5");});
$("#but6").click(function(){var value;value = $("#pinuser").val();$("#pinuser").attr("value", value+"6");});
$("#but7").click(function(){var value;value = $("#pinuser").val();$("#pinuser").attr("value", value+"7");});
$("#but8").click(function(){var value;value = $("#pinuser").val();$("#pinuser").attr("value", value+"8");});
$("#but9").click(function(){var value;value = $("#pinuser").val();$("#pinuser").attr("value", value+"9");});
$("#but0").click(function(){var value;value = $("#pinuser").val();$("#pinuser").attr("value", value+"0");});
$("#borrar").click(function(){$("#pinuser").attr("value", "");});
$("#enviar").click(function(){$("#inform").html("Autenticando");});



});

	