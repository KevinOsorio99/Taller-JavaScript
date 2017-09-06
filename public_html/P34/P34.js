class ar{
  constructor(){
    this._array;
    this._searchseq;
    this._bubble;
    this._bidirecbubble;
    this._insertion;
  }
  set array(array){
    this._array=array;
    }
  get array(){
      return this._array;
    }
  set searchseq(array){
    this._searchseq=array;
  }  
  get searchseq(){
    return this._searchseq;
  }
  set bubble(array){
    this._bubble=array;
  }
  get bubble(){
    return this._bubble;
  }
  set bidirecbubble(array){
    this._bidirecbubble=array;
  }
  get bidirecbubble(){
    return this._bidirecbubble; 
  }
  set insertion(array){
    this._insertion=array;
  }
  get insertion(){
    return this._insertion;
  }
}

var array=[];

var a= new ar();
do{
  var menu=Number((prompt("1. Fill arrangement \n\
2. Find element by sequential search method\n\
3. Apply bubble sorting method \n\
4. Apply bidirectional bubble sorting method \n\
5. Apply insertion sort method \n\
6. Apply method of sorting by mixing \n\
7. Apply the Sorting method by selection \n\
8. Print arrangement. \n\
0. Quit the program'")));

  switch (menu) {
    case 1:
      var max=Number(prompt("Ingrese el tamaño el arreglo:"));
      for (var i=0; i<max; i++){
      array.push(Math.round(Math.random()*100));
    }
      a.array=array;
      console.log(a.array);
      break;
    
    case 2:
   var num = Number(prompt("Número que desea buscar:"));
   var flag = false;
    for (var i=0;  i<max; i++) {
        if (array[i] === num) {
          console.log('the number ' + num + ' Is in position ' + i);
          flag = true;
        }
    }
     if (flag === false) {
          console.log('the numbernum ' + num + ' Not in the array');
        }
        a.searchseq=array;
      break;
    
    case 3:
     for ( i = 0; i < array.length - 1; i++) {
     for (j = 1; j < array.length; j++) {
         if (array[j] < array[j-1]) {
             g = array[j];
             array[j] = array[j-1];
             array[j-1] = g;
             j++;
         }
     }
 }
 console.log(array);
 a.bubble=array;
      break;
      
    case 4:
      for (i = 0; i < array.length - 1; i++) {
        for (j = i + 1; j < array.length; j++) {
          if (array[j] < array[i]) {
            k = array[i];
            array[i] = array[j];
            array[j] = k;
          }
        }
      }
      console.log(array);
      a.bidirecbubble=array;
      break;
      
    case 5:
      for (i = 1; i < array.length; i++) {
        for (j = i - 1; j >= 0 && (array[j] > array[i]); i++) {
          r = array[i];
          array[i] = array[j];
          array[j] = r;
        }
      }
      console.log(array);
      a.insertion=array;
      break;
    case 6:
      break;
    case 7:
      break;
    case 8:
      console.log(array);
      break;
    case 0:
      alert("Gracias por usar nuestro programa.");
      break;
  }
}while(menu !== 0)