//punto 1
function salve(){
  var a = $("#emple").val();
  var result = (Math.round(25832000 / a));
  $("#p1").text("Money received per employee: " + (result));
} 

//punto 2
function vol(){
  var a = $("#name").val();
  var b = $("#nu").val();
  var c = 45000 * b;
  var d = 20000;
  $("#p2").text("The electrician " + a + " wins " + (c-d));
  
//punto 3
var e=(2.54);
var f=(12);
var g=(5.280);
$("#p3").text("Within a mile there are " + (Math.round(e*f*g)) + " Centimeters");
}