function salve(){
  var a = $("#name").val();
  var b = $("#id").val();
  var c = $("#num").val();
  var print = ("Hello my Name Is " + a + ", document type " + b + " my document number is " + c);
  $("#text41").text(print);
}