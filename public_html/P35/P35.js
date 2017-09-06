class pan{
  constructor(){
    this._product;
    this._searchseq;
    this._searchd;
  }
  set product(product){
    this._product=product;
    localStorage.setItem("producto", JSON.stringify(this._product));
    console.log(JSON.parse(localStorage.getItem("producto")));
  }
  get product(){
    return this._product;
  }
  set searchseq(product){
    this._searchseq=product;
  }
  get searchseq(){
    return this._searchseq;
  }
  set searchd(product){
    this._searchd=product;
  }
  get searchd(){
    return this._searchd;
  }
}
var Array=[];
var a= new pan();
do{
  var menu=Number(prompt(" Panaderia\n\
1. Introduzca el producto\n\
2. Buscar producto por nombre\n\
3. Buscar producto por codigo\n\
0. salir del programa"));
  
  switch (menu) {
    case 1:
      name=(prompt("Ingrese el nombre del producto:"));
      code=(prompt("Ingrese el codigo del producto:"));
      product={
        name,
        code
      };
      a.product=product;
      break;
    case 2:
      var nameP = (prompt("Nombre del producto que desea buscar:"));
      var flag = false;
      for (var i = 0; i < Array.length; i++) {
        if (Array[i] === nameP) {
          console.log("el numero " + nameP + "es la posicion " + i);
          flag = true;
        }
      }
      break;
    case 3:
      var idP = (prompt("Numero de código del producto que desea buscar:"));
      var flag = false;
      for (var i = 0; i < Array.length; i++) {
        if (Array[i] === idP) {
          console.log("El numero " + idP + " es la posicion " + i++);
          flag = true;
        }
      }
      break;
  }
}while (menu !==0)