function salve(){
  var a = $("#name").val();
  var b = $("#id").val();
  var c = $("#num").val();
  var d = $("#gender").val();
  var e = $("#live").val();
  var print =("Hola, mi nombre es " + a + ", mi tipo de documento es " + b + ", numero de documento es " + c + ", soy de genero " + d + " vivo en cartago " + e);  
  $("#text40").text(print);
}

