<?php

/* los valores que seran comparados  */

$usuarioValido = "pepe";
$passwordValido = "admin";

/*extrae los valores enviados desde la pagina web  */
$usuarioEnviado = $_GET['usuario'];
$passwordEnviado = $_GET['password'];



/* verifica que el usuario y password concuerden correctamente */
if(  $usuarioEnviado == $usuarioValido  && $passwordEnviado == $passwordValido ){
	/*esto se  envia  si la validacion es correcta */
	$resultados["mensaje"] = "Validacion Correcta";
	$resultados["validacion"] = "ok";

}else{
	/*esta  se envia si la validacion no es correcta */
	$resultados["mensaje"] = "Usuario y password incorrectos";
	$resultados["validacion"] = "error";
}


/*convierte los resultados a formato json*/
$resultadosJson = json_encode($resultados);

/*muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $resultadosJson . ');';

?>