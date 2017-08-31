class operation{
  constructor(){
    this._menu;
    this._array;
    this._sum;
    this._res;
    this._mul;
    this._div;
  }
  set array(array){
    this._array=array;
  }
  get array(){
    return this._array;
  }
  set sum(array){
    this._sum = this._array[0] + this._array[1];
  }
  get sum(){
    return this._sum;
  }
  set res(array){
    this._res = this._array[0] - this._array[1];
  }
  get res(){
    return this._res;
  }
  set mul(array){
    this._mul = this._array[0] * this._array[1];
  }
  get mul(){
    return this._mul;
  }
  set div(array){
    this._div = this._array[0] / this._array[1];
  }
  get div(){
    return this._div;
  }
  }

  var a= new operation();
  do{
    var menu=Number(prompt("1. Realizar una suma\n\
2. Realizar una resta\n\
3. Realizar una multiplicacion\n\
4. Realizar una division\n\
0. Salir del programa"));
  switch (menu){
    case 1:
      var num1=Number(prompt("Ingrese un numero"));
      var num2=Number(prompt("Ingrese un numero"));
      var array=[num1,num2];
      a.array=array;
      a.sum=a.array;
      console.log("La suma es: " + a.sum);
      break;
    case 2:
      var num3=Number(prompt("Ingrese un numero"));
      var num4=Number(prompt("Ingrese un numero"));
      var array=[num3,num4];
      a.array=array;
      a.res=a.array;
      console.log("La resta es: " + a.res);
      break;
    case 3:
      var num5=Number(prompt("Ingrese un numero"));
      var num6=Number(prompt("Ingrese un numero"));
      var array=[num5,num6];
      a.array=array;
      a.mul=a.array;
      console.log("La multiplicacion es: " + a.mul);
      break;
    case 4:
      var num7=Number(prompt("Ingrese un numero"));
      var num8=Number(prompt("Ingrese un numero"));
      var array=[num7,num8];
      a.array=array;
      a.div=a.array;
      console.log("La division es: " + a.div);
      break;
    case 0:
      alert("Gracias por usar nuestro programa");
      break;
  }
  }while(menu !==0)