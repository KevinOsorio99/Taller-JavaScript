function salve(){
  var a = $("#num").val();
  a0= Number (a);
  Numprime=true;
  for (i = 1; i < a0; i++)
{
    if (a0 / i == Math.round(a0 / i) && i != 1 && i != a0) {
        Numprime = false;
        break;

    }
    
}

if (Numprime)
    $("#text45").text("The number is cousin");
else
    $("#text45").text("The number " + a0 + "   " + "He is not cousin");
}