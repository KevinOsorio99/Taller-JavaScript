class ar{
  constructor(){
    this._array;
    this._searchseq;
    this._bubble;
    this._bidirecbubble;
    this._insertion;
    this._mixture;
    this._selection;
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
  set mixture(array){
    this._mixture=array;
  }
  get mixture(){
    return this._mixture;
  }
  set selection(array){
    this._selection=array;
  }
  get selection(){
    return this._selection;
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
      var max=Number(prompt("Enter the size of the arrangement:"));
      for (var i=0; i<max; i++){
      array.push(Math.round(Math.random()*100));
    }
      a.array=array;
      console.log(a.array);
      break;
    
    case 2:
   var num = Number(prompt("Number you want to search:"));
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
   var tam = mix;
   var mix;
   const mergeSort = array;
   if (array.length < 2){
   }
   const middle = parseInt(array.length / 2) | 0;
   const left = array.slice(0, middle);
   const right = array.slice(middle);
   const merge = (left, right) => {
     const result = [];
     let il = ir = 0;
     
     while (il < left.length && ir < right.length){
       result.push((left[il] < right[ir]) ? left[il++] : right[ir++]);
     }
     return [...result, ...left.slice(il), ...right.slice(ir)];
 };
 console.log(array);
 a.mixture=array;
      break;
      
    case 7:
  var tam = selec;
  var selec;
  for (i = 0; i < array.length; i++){
    var i = iMin = j;
    for (++i; i < array.length; ++i){
      (array[i] < array[iMin]) && (iMin = i);
    }
    [array[j], array[iMin]] = [array[iMin], array[j]];
  }
  console.log(array);
  a.selection=array;
      break;
      
    case 8:
      console.log(array);
      break;
      
    case 0:
      alert("Thank you for using our program.");
      break;
  }
}while(menu !== 0)