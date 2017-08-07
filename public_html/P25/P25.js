var array=[];
var par=[];
var primo=[];
var i=0;
var contador=0;
var contadorpar=0;
var contadorprimo=0;
var sumprimo=0;
var sumpar=0;
var promprimo=0;
var prompar=0;


while (i<=9){
    array[i]=Number(prompt("Enter the number:"));
    i++;
}

i=0;

do{
    if(array[i]%2===0){
        par[contadorpar]=array[i];
        contadorpar+=1;
    }
   i++;
}while(i<=array.length);

    for(j=0; j<=array.length; j++){
        for(c=0; c<=array[j]; c++){
            if(array[j]%c===0){
                contador+=1;
            }
        }
        if(contador<=2){
                primo[contadorprimo]=array[j];
                contadorprimo+=1;
            }
            contador=0;
    }

contadorprimo=contadorprimo-2;
contadorpar=contadorpar-1;

 console.log("The prime numbers are: ");
for(i=0; i<=contadorprimo; i++){
   console.log(primo[i]);
}


console.log("The even numbers are: ");
for(i=0; i<=contadorpar; i++){
    console.log(par[i]);
}


for(i=0; i<=contadorprimo; i++){
    sumprimo=sumprimo+primo[i];
}
console.log("The sum of the cousins ​​are: " + sumprimo);


for(i=0; i<=contadorpar; i++){
    sumpar=sumpar+par[i];
}
console.log("The sum of the even numbers are: " + sumpar);


promprimo=sumprimo/contadorprimo;
console.log("The average cousins ​​are: " + promprimo);

prompar=sumpar/contadorpar;
console.log("The average pairs are: " + prompar);