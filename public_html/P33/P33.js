class regis{
  constructor(){
    this._registryper;
    this._registryfa;
    this._registryjob;
    this._registrypro;
  }
set regitryper(registryper){
  this._registryper=registryper;
}
get regitryper(){
  return this._registryper;
}
set registryfa(registryfa){
  this._registryfa=registryfa;
}
get registryfa(){
  return this._registryfa;
}
set registryjob(registryjob){
  this._registryjob=registryjob;
}
get registryjob(){
  return this._registryjob;
}
set registrypro(registrypro){
  this._registrypro=registrypro;
}
get registrypro(){
  return registrypro;
}
print(){
  console.log("Personal information:");
  console.log("Name: " + this._registryper.name);
  console.log("Phone: " + this._registryper.phone);
  console.log("Addres: " + this._registryper.addres);
  console.log("E-mail: " + this._registryper.mail);

  console.log("Family Reference:");
  console.log("Name: " + this._registryfa.name);
  console.log("Work: " + this._registryfa.work);
  console.log("Phone: " + this._registryfa.phone);
  console.log("Addres: " + this._registryfa.addres);

  console.log("Work reference:");
  console.log("Name: " + this._registryjob.name);
  console.log("Work: " + this._registryjob.work);
  console.log("Phone: " + this._registryjob.phone);
  console.log("Addres: " + this._registryjob.addres);

  console.log("Professional profile:");
  console.log("Profile: " + this._registrypro.profile);
}
}

var a = new regis();
do{
  var menu=Number(prompt("Select an option to enter your data. \n\
1. Personal information \n\
2. Family reference\n\
3. Work reference \n\
4. Professional profile description\n\
5. Print Resume \n\
0. Quit the program "));
  switch (menu){
    case 1:
      name=(prompt("Enter your name:"));
      phone=Number(prompt("Enter your phone number:"));
      addres=(prompt("Enter your addres:"));
      mail=(prompt("Enter your E-mail:"));
      registryper={
        name,
        phone,
        addres,
        mail
      };
      a._registryper=registryper;
      break;
    case 2:
      name=(prompt("Enter your name:"));
      work=(prompt("Enter your occupation:"));
      phone=Number(prompt("Enter your phone number:"));
      addres=(prompt("Enter your addres:"));
      registryfa={
        name,
        work,
        phone,
        addres
      };
      a.registryfa=registryfa;
      break;
    case 3:
      name=(prompt("Enter your name:"));
      work=(prompt("Enter your occupation:"));
      phone=(prompt("Enter your phone number:"));
      addres=(prompt("Enter your addres:"));
      registryjob={
        name,
        work,
        phone,
        addres
      };
      a.registryjob=registryjob;
      break;
    case 4:
      profile=(prompt("Enter your professional profile:"));
      registrypro={
        profile
      };
      a.registrypro=registrypro;
      break;
    case 5:
      a.print();
      break;
    case 0:
      alert("Thank you for using our program.");
      break;
  }
}while(menu !== 0)