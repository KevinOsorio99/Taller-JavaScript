$("#modal1").on('click',() => {
  var a = Number($("#base").val());
  var b = Number($("#altu").val());
  
  $('#ko').modal();
  var per = ("El perimetro del rectangulo es: " + (a+a+b+b));
  var ar = ("El area del rectacgulo es: " + (a*b));
  $("#rest").html(per + "<br>" + ar);
});
