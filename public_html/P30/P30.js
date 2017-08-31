function menu(){
var men=Number(prompt("Configuracion de software de nomina\n\
1. Seleccione idioma\n\
2. Configurar\n\
3. Continuar\n\
0. Salir del programa"));
  return men;
}

function menuone(){
var option=Number(prompt("Configuracion de software de nomina\n\
Seleccione el idioma del software\n\
1. Ingles\n\
2. Español"));
  return option;
}

function menutwo(){
  var opti=Number(prompt("Configuracion de software de nomina\n\
1. Nombre de la empresa\n\
2. Salario minimo\n\
3. Apartir de cuantos salarios minimos se cobra retencion en la fuuente\n\
4. Porcentaje de retencion en la fuente\n\
5. Hasta cuantos salarios minimos son necesarios para pagar auxilio de transporte\n\
6. Cuanto es el auxilio de transporte\n\
7. cantidad de horas laborales al mes\n\
8. Volver\n\
0. Salir del programa"));
  return opti;
}

function menuthree(){
  var optio=Number(prompt("Software de nomina\n\
1. Gestion de empleados\n\
2. Registrar horas laboradas\n\
3. Generar nomina\n\
4. Imprimir comprobante de pago\n\
0. Salir del programa"));
  return optio;
}


var men=1;
while(men!==0){
men=menu();
switch (men){
  case 1:
    option=menuone();
    break;
  case 2:
    opti=menutwo();
    break;
  case 3:
    optio=menuthree();
    break
  case 0:
    alert("Gracias por utilizar nuestro software");
    break;
}
}