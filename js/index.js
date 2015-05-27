$('#formulario').submit(function() { 
	
	 
	// recolecta los datos  insertados por el usuario
	var datosUsuario = $("#nombredeusuario").val()
	var datosPassword = $("#clave").val()
	
  	
  	archivoValidacion = "https://enigmatic-ravine-8583.herokuapp.com?jsoncallback=?"

	$.getJSON( archivoValidacion, { usuario:datosUsuario ,password:datosPassword})
	.done(function(respuestaServer) {
		
			  	
		
		if(respuestaServer.validacion == "ok"){
		  
		 	/// si la validacion es correcta, muestra la pantalla "home" y si no es correctas nos mostrara error.
			$.mobile.changePage("#home")
		  
		}else{
		  alert(respuestaServer.mensaje + "\nerror " )
	
		}
  
	})
	return false;
})
	
