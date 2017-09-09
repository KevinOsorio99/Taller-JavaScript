$("#modal1").on("click",()=>{
  var a = Number($("#sal").val());
  var b = Number($("#ret").val());
  $("#ko").modal();
  var porcen = b / 100;
  var x = a * porcen;
  var al = ("La retencion es: " + x);
  var salary = a - x;
  var ol = ("El salario total del trabajador es: " + salary);
  $("#rest").html(al + "<br>" + ol);
});