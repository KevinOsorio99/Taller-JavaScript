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
  console.log("Informacion personal:");
  console.log("Nombre: " + this._registryper.name);
  console.log("Telefono: " + this._registryper.phone);
  console.log("Direccion: " + this._registryper.addres);
  console.log("Correo electronico: " + this._registryper.mail);

  console.log("Referencia familiar:");
  console.log("Nombre: " + this._registryfa.name);
  console.log("Trabajo: " + this._registryfa.work);
  console.log("Telefono: " + this._registryfa.phone);
  console.log("Direccion: " + this._registryfa.addres);

  console.log("Referencia laboral:");
  console.log("Nombre: " + this._registryjob.name);
  console.log("Trabajo: " + this._registryjob.work);
  console.log("Telefono: " + this._registryjob.phone);
  console.log("Direccion: " + this._registryjob.addres);

  console.log("Perfil profecional:");
  console.log("Perfil: " + this._registrypro.profile);
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
      name=(prompt("Ingrese su nombre:"));
      phone=Number(prompt("Ingrese su numero telefonico:"));
      addres=(prompt("Ingrese su direccion:"));
      mail=(prompt("Ingrese su correo electronico:"));
      registryper={
        name,
        phone,
        addres,
        mail
      };
      a._registryper=registryper;
      break;
    case 2:
      name=(prompt("Ingrese su nombre:"));
      work=(prompt("Ingrese su ocupacion:"));
      phone=Number(prompt("Ingrese su numero telefonico:"));
      addres=(prompt("Ingrese su direccion:"));
      registryfa={
        name,
        work,
        phone,
        addres
      };
      a.registryfa=registryfa;
      break;
    case 3:
      name=(prompt("Ingrese su nombre:"));
      work=(prompt("Ingrese su ocupacion:"));
      phone=(prompt("Ingrese su numero telefonico:"));
      addres=(prompt("Ingrese su direccion:"));
      registryjob={
        name,
        work,
        phone,
        addres
      };
      a.registryjob=registryjob;
      break;
    case 4:
      profile=(prompt("Ingrese su perfil profesional:"));
      registrypro={
        profile
      };
      a.registrypro=registrypro;
      break;
    case 5:
      a.print();
      break;
    case 0:
      alert("Gracias por usar nuestro programa");
      break;
  }
}while(menu !== 0)