$(document).on("ready", inicio);
function inicio () 
{
	$("#personalizar").on("click", transicion);
}
function transicion ()
{
	//Objeto Javascript: JSON
	
	var cambiosPerson =   //desplazar el auto a la hora de dar click en perzonalizacion
	{
		height: "auto",
		opacity: 1,
		width: "40%"
	};
	
	$("#personalizacion").css(cambiosPerson);
	$("#color div").on("click", cambiarColor);
}
function cambiarColor (datos) 
{
	var col = datos.currentTarget.id;
	$("#cochecito img").attr("src", "c"+ col +".jpg")
}