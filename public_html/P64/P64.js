var array = [];

function fill() {
  var max = ($("#max").val());
  for (var i = 0; i < max; i++) {
    array.push(Math.round(Math.random() * 100));
  }
  $("#text64").text(array);
}

function searchseq() {
  var num = Number($("#search").val());
  var flag = false;
  var max = ($("#max").val());
  for (var i = 0; i < max; i++) {
    if (array[i] === num) {
      $("#text641").text('the number ' + num + ' Is in position ' + i);
      flag = true;
    }
  }
  if (flag === false) {
    $("#text641").text('the numbernum ' + num + ' Not in the array');
  }
}

function bubble() {
  for (i = 0; i < array.length - 1; i++) {
    for (j = 1; j < array.length; j++) {
      if (array[j] < array[j - 1]) {
        g = array[j];
        array[j] = array[j - 1];
        array[j - 1] = g;
        j++;
      }
    }
  }
}

function Bidirecbubble() {
  for (i = 0; i < array.length - 1; i++) {
    for (j = i + 1; j < array.length; j++) {
      if (array[j] < array[i]) {
        k = array[i];
        array[i] = array[j];
        array[j] = k;
      }
    }
  }
}

function insertion() {
  for (i = 1; i < array.length; i++) {
    for (j = i - 1; j >= 0 && (array[j] > array[i]); i++) {
      r = array[i];
      array[i] = array[j];
      array[j] = r;
    }
  }
}

function mixture() {
  var tam = mix;
  var mix;
  const mergeSort = array;
  if (array.length < 2) {
    return array;
  }
  const middle = parseInt(array.length / 2) | 0;
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  const merge = (left, right) => {
    const result = [];
    let il = ir = 0;

    while (il < left.length && ir < right.length) {
      result.push((left[il] < right[ir]) ? left[il++] : right[ir++]);
    }
    return [...result, ...left.slice(il), ...right.slice(ir)];
  };
  return mix;
}

function selection() {
  var tam = selec;
  var selec;
  for (i = 0; i < array.length; i++) {
    var i = iMin = j;
    for (++i; i < array.length; ++i) {
      (array[i] < array[iMin]) && (iMin = i);
    }
    [array[j], array[iMin]] = [array[iMin], array[j]];
  }
  return array;
  return selec;
}

function print() {
  $("#text643").text(array);
}

$(document).ready(() => {
  $("#ocult").hide();
  $("#fill").click(() => {
    $("#ocult").show();
  });

  $("#ocult1").hide();
  $("#searchseq").click(() => {
    $("#ocult1").show();
  });
});