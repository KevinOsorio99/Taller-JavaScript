var hours=Number(prompt("Enter number of hours:"));

if (hours >= 24){
  console.log("It is equivalent to " + (hours * 1)/24 + " days"); 
  } else if (hours < 24){
       console.log("The number of hours is not equivalent to one day"); 
  }
  
if (hours >=168){
  console.log("It is equivalent to " + (hours * 1) / (24 * 7) / (1) + " Weeks");
} else if (hours < 168){
    console.log("Number of hours that do not equilibrate to a week");
}

