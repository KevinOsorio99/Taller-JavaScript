function menu(){
var option=Number(prompt("Bakery \n\
1. Enter the product \n\
2. Find product by name \n\
3. Find product by code \n\
0 exit the program"));
  return option;
}

function product(){
  var dato={
    nombre:"",
    codigo:""
  };
  var producto= new Array();
  dato.nombre=(prompt("Enter the name of the product:"));
  dato.codigo=(prompt("Enter the product code:"));
  producto.push(dato);

var dato = {
      nombre: "",
      codigo: ""
    };

  localStorage.setItem("producto", JSON.stringify(producto));
  console.log(JSON.parse(localStorage.getItem("producto")));
  }

function searchseq(){
  var nameP=(prompt("Name of product to be searched:"));
  var flag=false;
  for (var i=0; i<Array.length; i++){
    if(Array[i] === nameP){
      console.log("The number " + nameP + "is the position " + i);
      flag=true;
    }
  }
}

function searchd(){
  var idP=(prompt("Product code number to search:"));
  var flag= false;
  for (var i=0; i<Array.length; i++){
    if (Array[i] === idP){
      console.log("the number " + idP + " is the position" + i++);
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
