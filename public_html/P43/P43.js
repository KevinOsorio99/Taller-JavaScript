$("#modal1").on("click",()=>{
var x = Number($("#a").val());
var z = Number($("#b").val());
$("#ko").modal();
var re = (x + " a la " + z+ " es: " + (x**z));
var res = (z + " a la " + x + " es: " + (z**x));
var resu = ("La multiplicacion entre " + x + " y " + z + " es: " + (x*z));
var resul = ("La division entre " + x + " y " + z + " es: " + (x/z));
var result = ("La division entre " + z + " y " + x + " es: " + (z/x));
var a = ("El modulo de la division es " + x + " y " + z + " es: " + (x%z));
$("#rest").html(re + "<br>" + res + "<br>" + resu + "<br>" + resul + "<br>" + result + "<br>" + a);  
});
