$("#modal1").on('click',() => {
var a = Number($("#s").val());
var b = Number($("#d").val());

  $('#ko').modal();
  var su = ("The sum of the two numbers is: " + (a + b));
  var re = ("The subtraction of the two numbers is: " + (a - b));
  var mul = ("The multiplication of the two numbers is: " + (a * b));
  var div = ("The division of the two numbers is: " + (a / b));
  $("#rest").html(su + "<br>" + re + "<br>" + mul + "<br>" + div); 
});

