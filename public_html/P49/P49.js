var espacio="----";
var aste="*";
var z="";
var x="";
var s="-";
for (i = 1; i <= 13; i++) {
  if (i === 1) {
    $("#iniciar").append(z = espacio + aste, "<br>");
  }
  if (i >= 2 && i <= 4) {
    if (i === 3) {
      x = z;
    }
    $("#iniciar").append(z = z.slice(1) + aste + aste, "<br>");
  }
  if (i === 5) {
    $("#iniciar").append(x, "<br>");
  }
  if (i === 6) {
    $("#iniciar").append(x, "<br>");
  }
  if (i >= 7 && i <= 9) {
    $("#iniciar").append(x = x.slice(1) + aste + aste, "<br>");
  }
  if (i > 9) {
    $("#iniciar").append(x = s + x.slice(0, -2), "<br>");
  }
}