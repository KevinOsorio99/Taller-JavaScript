$("#modal1").on("click",()=>{
  var a = Number($("#sal").val());
  var b = Number($("#ret").val());
  $("#ko").modal();
  var porcen = b / 100;
  var x = a * porcen;
  var al = ("The retention is: " + x);
  var salary = a - x;
  var ol = ("The total salary of the worker is: " + salary);
  $("#rest").html(al + "<br>" + ol);
});