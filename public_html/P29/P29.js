function menu(){
var option=Number(prompt(" Panaderia\n\
1. Introduzca el producto\n\
2. Buscar producto por nombre\n\
3. Buscar producto por codigo\n\
0. salir del programa"));
  return option;
}

function product(){
  var dato={
    nombre:"",
    codigo:""
  };
  var producto= new Array();
  dato.nombre=(prompt("Ingrese el nombre del producto:"));
  dato.codigo=(prompt("Ingrese el codigo del producto:"));
  producto.push(dato);

var dato = {
      nombre: "",
      codigo: ""
    };

  localStorage.setItem("producto", JSON.stringify(producto));
  console.log(JSON.parse(localStorage.getItem("producto")));
  }

function searchseq(){
  var nameP=(prompt("Nombre del producto que desea buscar:"));
  var flag=false;
  for (var i=0; i<Array.length; i++){
    if(Array[i] === nameP){
      console.log("el numero " + nameP + "es la posicion " + i);
      flag=true;
    }
  }
}

function searchd(){
  var idP=(prompt("Numero de código del producto que desea buscar:"));
  var flag= false;
  for (var i=0; i<Array.length; i++){
    if (Array[i] === idP){
      console.log("El numero " + idP + " es la posicion " + i++);
      flag= true;
    }
  }
}

function print(){
  console.log(Array);
}

var option=1;
while (option !== 0){
option=menu();

switch (option){
  case 1:
    product();
    break;
  case 2:
    searchseq();
    break;
  case 3:
    searchd();
    break;
  case 0:
    console.log("Bye");
    break;
}
}
