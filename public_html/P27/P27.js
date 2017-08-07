function menu(){
var men=Number(prompt("Select an option to enter your data. \n\
1. Personal information \n\
2. Family reference\n\
3. Work reference \n\
4. Professional profile description\n\
5. Print Resume \n\
0. Quit the program "));
  return men;
}

function PersonalInformation(){
  var registryper={
    name :"",
    phone :"",
    address :"",
    mail:""
    };
    registryper.name=(prompt("Enter your name:"));
    registryper.phone=(prompt("Enter your number:"));
    registryper.address=(prompt("Enter your address:"));
    registryper.mail=(prompt("Enter your password:"));
    return registryper;
}


function familyReference(){
  var registryfa={
  name:"",
  work:"",
  phone:"",
  address:""
  };
  registryfa.name = prompt("Enter your name:");
  registryfa.work = prompt("Enter your occupation:");
  registryfa.phone =Number (prompt("Enter your number:"));
  registryfa.address = prompt("Enter your password:");
  return registryfa;
}

function referenceJob(){
  var registryjob={
    name:"",
    work:"",
    phone:"",
    address:""
  };
  registryjob.name = prompt("Enter your name:");
  registryjob.work = prompt("Enter your occupation:");
  registryjob.phone = prompt("Enter your number:");
  registryjob.address = prompt("Enter your password:");
  return registryjob;
}

function ProfessionalProfile(){
  var registrypro={
    profile:""
  };
  registrypro.profile = prompt("Enter your professional profile:");
  return registrypro;
}

function Print(registryper, registryfa, registryjob, registrypro){
  console.log("Personal Information:");
  console.log("Name: " + registryper.name);
  console.log("Phone: " + registryper.phone);
  console.log("Address: " + registryper.address);
  console.log("Mail: " + registryper.mail);

  console.log("family Reference:");
  console.log("Name: " + registryfa.name);
  console.log("Occupation: " + registryfa.work);
  console.log("Phone: " + registryfa.phone);
  console.log("Address: " + registryfa.address);

  console.log("Reference Job:");
  console.log("Name: " + registryjob.name);
  console.log("Occupation: " + registryjob.work);
  console.log("Phone: " + registryjob.phone);
  console.log("Address: " + registryjob.address);

  console.log("Professional Profile:");
  console.log("Profile: " + registrypro.profile);
}


var men =1;
var registryper={};
var registryfa={};
var registryjob={};
var registrypro={};
while (men !== 0){
  men = menu();

switch (men){
  case 1:
   registryper=PersonalInformation();
    break;
  case 2:
    registryfa=familyReference();
    break;
  case 3:
    registryjob=referenceJob();
    break;
  case 4:
    registrypro=ProfessionalProfile();
    break;
  case 5:
    Print(registryper, registryfa, registryjob, registrypro);
    break;
}
}