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
  var menu=Number(prompt(" Bakery \n\
1. Enter the product \n\
2. Find product by name \n\
3. Find product by code \n\
0 exit the program"));
  
  switch (menu) {
    case 1:
      name=(prompt("Enter the name of the product:"));
      code=(prompt("Enter the product code:"));
      product={
        name,
        code
      };
      a.product=product;
      break;
    case 2:
      var nameP = (prompt("Name of product to be searched:"));
      var flag = false;
      for (var i = 0; i < Array.length; i++) {
        if (Array[i] === nameP) {
          console.log("The number " + nameP + "is the position" + i);
          flag = true;
        }
      }
      break;
    case 3:
      var idP = (prompt("Product code number to search:"));
      var flag = false;
      for (var i = 0; i < Array.length; i++) {
        if (Array[i] === idP) {
          console.log("The number " + idP + " is the position " + i++);
          flag = true;
        }
      }
      break;
  }
}while (menu !==0)