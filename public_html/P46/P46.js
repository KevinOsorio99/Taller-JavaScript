function salve(){
var a = $("#nu").val();
a0=Number(a);
$("#text46").text(a0 % 2 === 0 ? "It is an even number" : "It is an odd number");
}
