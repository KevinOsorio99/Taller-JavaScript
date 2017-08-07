var menu=Number(prompt("1. Make a sum \n\
2. Perform a subtraction \n\
3. Perform a multiplication \n\
4. Make a division \n\
0. Exit the program "));

function sum(){
    var sum1 = Number(prompt("Enter the first number:"));
    var sum2 = Number(prompt("Enter second number:"));
    console.log(`The sum is: ${sum1 + sum2}`);
}

function subtraction(){
    var res1 = Number(prompt("Enter the first number:"));
    var res2 = Number(prompt("Enter second number:"));
    console.log(`The subtraction is: ${res1 - res2}`);
}

function multiplication(){
    var mul1 = Number(prompt("Enter the first number:"));
    var mul2 = Number(prompt("Enter second number:"));
    console.log(`The multiplication is: ${mul1 * mul2}`);
}

function division(){
    var div1 = Number(prompt("Enter the first number:"));
    var div2 = Number(prompt("Enter second number:"));
    console.log(`The division is: ${div1 / div2}`);
}

switch (menu) {
    case 1:
        sum();
        break;
    case 2:
        subtraction();
        break;
    case 3:
        multiplication();
        break;
    case 4:
        division();
        break;
    case 0:
        console.log("Goodbye");
        break;
    default:
        break;
}