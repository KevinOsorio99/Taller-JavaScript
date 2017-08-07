var espacio="    ";
var aste="*";
var z="";
var x="";
var s=" ";
for (i=1; i<=13; i++){
    if (i===1){
        console.log(z=espacio+aste);
    }
    if(i>=2 && i<=4){
        if(i===3){
            x=z;
        }
        console.log(z= z.slice(1) + aste + aste);
    }
    if(i===5){
        console.log(x);
    }
    if(i===6){
        console.log(x);
    }
    if(i>=7 && i<=9){
        console.log( x = x.slice(1) + aste + aste);
    }
    if(i>9){
        console.log(x= s + x.slice(0,-2));
    }
    }