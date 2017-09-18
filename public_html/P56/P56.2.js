$(document).ready(() => {
  var asd = JSON.parse(localStorage.getItem(`result`));
  if (asd.x ===1){
        $("#Text1").val("The salary is: " + asd.salary);
        $("#Text2").val("The help is: " + asd.ayu);
        $("#Text").val("Total salary: " + asd.salary2);
  }else {
        $("#Text1").val("The salary is: " + asd.salary);
        $("#Text2").val("The retention is: " + asd.persalary);
        $("#Text").val("The total salary is: " + asd.salary2);
  }
});