function salve(){
  var a = $("#sa").val();
  
  if (a > 0){
    $("#text55").text("Enter a number less than zero");
  }
  if (a < 0){
    a = a * (-1);
    $("#text55").text(a);
  }
}