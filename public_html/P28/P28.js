op = 0;
var array = [];

do {
  
  function menu() {

    var option = prompt('1. Fill arrangement \n\
2. Find element by sequential search method\n\
3. Apply bubble sorting method \n\
4. Apply bidirectional bubble sorting method \n\
5. Apply insertion sort method \n\
6. Apply method of sorting by mixing \n\
7. Apply the Sorting method by selection \n\
8. Print arrangement. \n\
0. Quit the program');

    return parseInt(option);
  }

  var result = menu();


  function fill () {
for (var i=0;  i<max; i++) {
    array.push(Math.round(Math.random() * 100));
}
}

  function searchseq() {
   var num = Number(prompt('Number you want to search'));
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
  }

  function bubble () {
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
    return array;
}


function Bidirecbubble () {
  for ( i = 0 ; i < array.length-1; i++) {
     for( j=i+1 ; j<array.length; j++) {
       if(array[j] < array[i]) {
         k=array[i];
         array[i]=array[j];
         array[j]=k;
       }
     }
  }
  return array;
}

function insertion () {
   for ( i = 1; i < array.length; i++) {
    for ( j=i-1; j >= 0 && (array[j] > array[i]); i++) {
         r=array[i];
         array[i]=array[j];
         array[j]=r;
      }
    }
    return array;
    }
 

  function print() {
    console.log(array);
  }

  switch (result) {
    case 1:
      var max = prompt('Size of the array you want to create');
      fill();
      break;
    case 2:
      searchseq();
      break;
    case 3:
      bubble(array);
      break;
    case 4:
      Bidirecbubble();
      break;
      case 5:
      insertion();
      break;
      case 6:

      break;
      case 7:

      break;
    case 8:
      print();
      break;
    case 0:
      op = 1;
      console.log('bye');
      break;
    default:
     alert('Enter a number from 0 to 8');
      break;
  }
} while (op === 0)
{

}
