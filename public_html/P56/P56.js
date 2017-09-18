$("#ocult1").hide();
$("#ocult2").hide();
$(document).ready(() => {
  $("#cual2").click(() => {
    var array = [i];
    var i = 0;
    salaryMin = Number($("#salaryMin").val());
    salary = Number($("#salary").val());
    days = Number($("#days").val());
    datos = {
      salaryMin,
      salary,
      days
    };
    if (array === null) {
      array = [
        datos = {
          salaryMin,
          salary,
          days
        }
      ];
    } else {
      array.push(datos);
    }
    localStorage.setItem(`datos`, JSON.stringify(array));
    var n = JSON.parse(localStorage.getItem(`datos`));
    
    sessionStorage.setItem(`datos`, JSON.stringify(array));
    var z = JSON.parse(sessionStorage.getItem(`datos`));

    var a = $("#days").val();
    if (a > 30) {
      $("#text").text("Please enter a number less than 30");
    }
    if (a <= 30) {
      $("#text1").text("Please fill in the other fields");
    }

    if (salary <= (salaryMin * 2)) {
      $("#ocult1").show();
      $("#cual").click(() => {
        var salaryD = Math.round(salary / 30);
        var ayu = Number($("#help").val());
        var persalary = Math.round(salary * ayu);
        var salary2 = Math.round(ayu + salary);
        $("#Text1").text("The salary is: " + salary);
        $("#Text2").text("The help is: " + ayu);
        $("#Text").text("Total salary: " + salary2);
      });
    }else {
      $("#ocult2").show();
      $("#cual3").click(() => {
      if (salary >= (salaryMin * 4)){
       var perete = Number($("#reten").val());
       var persalary = Math.round(salary * perete);
       var salary2 = Math.round(persalary - salary);
      }
      $("#as").text("The retention is: " + persalary);
      $("#asd").text("The total salary is: " + salary2);
    });
  }
  });
});