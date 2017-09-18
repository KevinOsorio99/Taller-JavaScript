var day = Number (prompt("Number of days worked:"));
if (day <= 30){
  var salaryM = (740.000);
  var salary = Number (prompt("What is your salary:"));
  var daily = Math.round(salary / 30);
  if (salary <= (salaryM * 2)){
    var per = Number (prompt("how much is the percentage of transportation:"));
    var per1 = (per / 100);
    var persalary = Math.round(salary * per1);
    var salary2 = Math.round(persalary + salary);
    console.log("The salary is: " + salary);
    console.log("The transport aid is: " + persalary);
    console.log("the total salary is: " + salary2);
  }else{
    if (salary >= (salaryM * 4)){
      var pert = Number (prompt("How much is the retention percentage:"));
      console.log("His salary is: " + salary);
      var perete = (pert / 100);
      var persalary = (salary * perete);
      var salary = (salary - persalary);
      console.log("Retention is: " + persalary);
      console.log("The total salary is: " + salary2);
    }
  }
}else {
    alert("maximun 30 days");
}