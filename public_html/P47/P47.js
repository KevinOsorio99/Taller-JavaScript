  var aste= "*";
  var maximo= 6;
  var x= 1;
  var n= "";
  do{
    n = n + aste;
    $("#iniciar").append(n, "<br>");
    console.log(n);
    x++;
  } while (x<= maximo);