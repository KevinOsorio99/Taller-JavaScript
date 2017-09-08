var num1=Number(prompt("Ingrese un numero:"));
var num2=Number(prompt("Ingrese un numero:"));

$("#ko").modal();
var re = (num1 + " a la " + num2 + " es: " + (num1**num2));
var res = (num2 + " a la " + num1 + " es: " + (num2**num1));
var resu = ("La multiplicacion entre " + num1 + " y " + num2 + " es: " + (num1*num2));
var resul = ("La division entre " + num1 + " y " + num2 + " es: " + (num1/num2));
var result = ("La division entre " + num2 + " y " + num1 + " es: " + (num2/num1));
var a = ("El modulo de la division es " + num1 + " y " + num2 + " es: " + (num1%num2));
$("#rest").html(re + "<br>" + res + "<br>" + resu + "<br>" + resul + "<br>" + result + "<br>" + a);
