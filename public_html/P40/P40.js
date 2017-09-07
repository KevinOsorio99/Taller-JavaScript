function salve(){
  var a = $("#name").val();
  var b = $("#id").val();
  var c = $("#num").val();
  var d = $("#gender").val();
  var e = $("#live").val();
  var print =("Hello my Name Is " + a + ", my type of document is " + b + ", document number is " + c + ", i m of gender " + d + " I live in Carthage " + e);  
  $("#text40").text(print);
}

