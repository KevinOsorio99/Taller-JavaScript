$("#ocult").hide();
$("#suma").click(() => {
  $("#ocult").show();
  $("#result").click(() => {
    $("#ocult").hide();
    var a = Number($("#num1").val());
    var b = Number($("#num2").val());
    $("#text62").text(a + b);
  });
});


$("#ocult1").hide();
$("#resta").click(() => {
  $("#ocult1").show();
  $("#resu").click(()=>{
    $("#ocult1").hide();
    var c = Number($("#num3").val());
    var d = Number($("#num4").val());
    $("#text621").text(c-d);
  });
});


$("#ocult2").hide();
$("#multi").click(()=>{
  $("#ocult2").show();
  $("#resul").click(()=>{
    $("#ocult2").hide();
    var e = Number($("#num5").val());
    var f = Number($("#num6").val());
    $("#text622").text(e*f);
  });
});


$("#ocult3").hide();
$("#div").click(()=>{
  $("#ocult3").show();
  $("#res").click(()=>{
    $("#ocult3").hide();
    var g = Number($("#num7").val());
    var h = Number($("#num8").val());
    $("#text623").text(g/h);
  });
});