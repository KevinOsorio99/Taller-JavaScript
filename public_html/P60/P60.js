$("#kao").click(()=>{
  var hours = Math.round($("#horas").val());
  
  if (hours >= 24){
    $("#text60").text("It is equivalent to " + (hours * 1)/24 + " days");
  }else if (hours < 24){
    $("#text60").text("The number of hours is not equivalent to one day");
  }
  
  if (hours >= 168){
    $("#text601").text("It is equivalent to " + (hours * 1) / (24 * 7) / (1) + " Weeks");
  }else if (hours < 168){
    $("#text601").text("Number of hours that do not equilibrate to a week");
  }
});