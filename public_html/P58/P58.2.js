$(document).ready(()=>{
  
  var res = JSON.parse(localStorage.getItem(`result`));
  $("#Moths").val("In years there is " + res.years * res.Months + " months");
  $("#Days").val("Has " + res.years * res.days);
  $("#Hour").val("Has " + res.hour * res.days * res.years);
  $("#Minutes").val("Has " + res.minutes * res.hour * res.days * res.years);
  $("#Seconds").val("Has " + res.seconds * res.minutes * res.hour * res.days * res.years);
});