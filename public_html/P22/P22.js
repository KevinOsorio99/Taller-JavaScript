var years=Number(prompt("Enter years:"));

var Months=Number (12);
var days=Number (365);
var hour=Number (24);
var minutes=Number (60);
var seconds=Number (60);

console.log("In years there is " + years * Months + " months" );
console.log("Has " + years * days + " days");
console.log("Has " + hour * days * years + " hour");
console.log("Has " + minutes * hour * days * years + " minutes");
console.log("Has " + seconds * minutes * hour * days * years + " seconds");