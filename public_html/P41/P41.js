function salve(){
  var a = $("#name").val();
  var b = $("#id").val();
  var c = $("#num").val();
  var print = ("Hola, mi nombre es " + a + ", tipo de documento " + b + " mi numero de documento es " + c);
  $("#text41").text(print);
}