$("#modal1").on('click',() => {
  var a = Number($("#base").val());
  var b = Number($("#altu").val());
  
  $('#ko').modal();
  var per = ("The perimeter of the rectangle is: " + (a+a+b+b));
  var ar = ("The area of ​​the rectangle is: " + (a*b));
  $("#rest").html(per + "<br>" + ar);
});
