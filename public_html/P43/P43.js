$("#modal1").on("click",()=>{
var x = Number($("#a").val());
var z = Number($("#b").val());
$("#ko").modal();
var re = (x + " To " + z+ " is: " + (x**z));
var res = (z + " To " + x + " is: " + (z**x));
var resu = ("The multiplication between " + x + " and " + z + " is: " + (x*z));
var resul = ("The division between " + x + " and " + z + " is: " + (x/z));
var result = ("The division between " + z + " and " + x + " is: " + (z/x));
var a = ("The division module is " + x + " and " + z + " is: " + (x%z));
$("#rest").html(re + "<br>" + res + "<br>" + resu + "<br>" + resul + "<br>" + result + "<br>" + a);  
});
