$('#formulario').submit(function() { 
	
	 
	// recolecta los valores que inserto el usuario
	var datosUsuario = $("#nombredeusuario").val()
	var datosPassword = $("#clave").val()
	
  	//archivoValidacion = "http://192.168.0.213/index.php?jsoncallback=?"
  	archivoValidacion = "https://enigmatic-ravine-8583.herokuapp.com?jsoncallback=?"

	$.getJSON( archivoValidacion, { usuario:datosUsuario ,password:datosPassword})
	.done(function(respuestaServer) {
		
			  	
		
		if(respuestaServer.validacion == "ok"){
		  
		 	/// si la validacion es correcta, muestra la pantalla "home"
			$.mobile.changePage("#home")
		  
		}else{
		  alert(respuestaServer.mensaje + "\nerror " )
	
		}
  
	})
	return false;
})
	
