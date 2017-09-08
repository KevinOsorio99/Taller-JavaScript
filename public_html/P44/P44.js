$("#modal1").on('click',() => {
var a = Number($("#s").val());
var b = Number($("#d").val());

  $('#ko').modal();
  var su = ("La suma de los dos numeros es: " + (a + b));
  var re = ("La resta de los dos numeros es: " + (a - b));
  var mul = ("La multiplicacion de los dos numeros es: " + (a * b));
  var div = ("La division de los dos numeros es: " + (a / b));
  $("#rest").html(su + "<br>" + re + "<br>" + mul + "<br>" + div); 
});

