function salve(){
  var a = $("#sa").val();
  
  if (a > 0){
    $("#text55").text("Introduzca un número inferior a cero");
  }
  if (a < 0){
    a = a * (-1);
    $("#text55").text(a);
  }
}