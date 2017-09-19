$("#asdd").click(()=>{
var array = [i];
var i = 0;
sidea = Number($("#a").val());
sideb = Number($("#b").val());

side={
  sidea,
  sideb
};
if (array === null){
  array =[
    side = {
      sidea,
      sideb
    }
  ];
}else {
  array.push(side);
}
localStorage.setItem(`side`, JSON.stringify(array));
var n = JSON.parse(localStorage.getItem(`side`));

sessionStorage.setItem(`side`, JSON.stringify(array));
var z = JSON.parse(sessionStorage.getItem(`side`));

var c = (sidea**2 + sideb**2);
var d = (c**(1/2));
var result = c**d;
var date = {
  result
};
localStorage.setItem(`result`, JSON.stringify(date));
});