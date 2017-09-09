function salve(){
  var a = $("#year").val();
  if (a<18){
    $("#text51").text("No puedes ingresar");
  } else {
    $("#text51").text("Bienvenido a la fiesta");
  }
}