function restaFechas() {
  function restarfechas(f1, f2) {
    if (f1.getTime() > f2.getTime()) {
      var dif = f1.getTime() - f2.getTime();
    } else {
      var dif = f2.getTime() - f1.getTime();
    }
    var rsp = [];
    rsp[0] = Math.floor(dif / (1000 * 60 * 60 * 24));
    rsp[1] = Math.floor(dif / (1000 * 60 * 60 * (24 * 30)));
    rsp[2] = Math.floor(dif / (1000 * 60 * 60 * (24 * 365)));
    return rsp;
  }
  var a = new Date($("#fecha1").val());
  var b = new Date($("#fecha2").val());

  var rsp = restarfechas(a, b);
  $("#text59").text('days: ' + rsp[0]);
  $("#texte").text('Months: ' + rsp[1]);
  $("#texte1").text('years: ' + rsp[2]);
}