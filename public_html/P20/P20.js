var salaryMin=(prompt("Enter the minimum wage:"));
var salary=Number(prompt("Enter your monthly salary:"));
var days=Number(prompt("Enter the days worked:"));

while (days > 30){
    days=Number(prompt("Enter a number less than 30:"));
}

var salaryD = salary / 30;
var salaryT = salaryD * days;
if (salaryT <= (salaryMin * 2)) {
    var help=Number(prompt("Enter Transport Assistance:"));
    var salaryF = salaryT + help;
    console.log(salaryF);
} else if (salaryT >= (salaryT * 4)); {
    var retention=Number(Prompt("Enter the winery:"));
    salaryF= salaryT - retention;
    console.log(salaryF);
}