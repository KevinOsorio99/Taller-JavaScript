$(document).ready(()=>{
$("#kao").click(()=>{
    var array = [i];
    var i = 0;
    var years = Number($("#years").val());

    date = {
      years
    };
    if (array === null) {
      array[
              date = {
                years
              }
      ];
    } else {
      array.push(date);
    }
    localStorage.setItem(`date`, JSON.stringify(array));
    var n = JSON.parse(localStorage.getItem(`date`));

    var Months = Number(12);
    var days = Number(365);
    var hour = Number(24);
    var minutes = Number(60);
    var seconds = Number(60);
    
    var result ={
      Months,
      days,
      hour,
      minutes,
      seconds,
      years
    };
    localStorage.setItem(`result`,JSON.stringify(result));
});
});
