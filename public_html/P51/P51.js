function salve(){
  var a = $("#year").val();
  if (a<18){
    $("#text51").text("Can not log in");
  } else {
    $("#text51").text("welcome to the party");
  }
}