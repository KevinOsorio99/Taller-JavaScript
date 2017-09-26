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

$("#array").click(()=>{
  for (var i=0;  i<10; i++) {
    array.push(Math.round(Math.random() * 100));
    $("#text61").text(array);
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

$("#text611").text("The prime numbers are:");
for(i=0; i<=contadorprimo; i++){
   $("#text612").text(primo);
}


$("#text613").text("The even numbers are:");
for(i=0; i<=contadorpar; i++){
    $("#text614").text(par);
} 


for(i=0; i<=contadorprimo; i++){
    sumprimo=sumprimo+primo[i];
}
$("#text615").text("The sum of the cousins are: " + sumprimo);

for(i=0; i<=contadorpar; i++){
    sumpar=sumpar+par[i];
}
$("#text616").text("The sum of the even numbers are: " + sumpar);

promprimo=sumprimo/contadorprimo;
$("#text617").text("The average cousins are: " + promprimo);

prompar=sumpar/contadorpar;
$("#text618").text("The average pairs are: " + prompar);
});