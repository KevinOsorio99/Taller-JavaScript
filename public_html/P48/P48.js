var aste= "-----*";
var maximo= 5;
var x= 1;
var z="*";
while (x<= maximo){
    if(x===1){
    $("#iniciar").append(aste, "<br>");
}
$("#iniciar").append(aste=aste.slice(1) + z, "<br>");
    x++;
} 
