$(document).ready(() => {
  var res = JSON.parse(localStorage.getItem('result'));
  $("#text57").val("The hypotenuse is: " + res.result);
});