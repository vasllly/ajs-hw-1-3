"use strict";

var score = [74989, 74990, 84990, 62000, 58480, 61800];

function topScore(array) {
  var top_score = 0;
  array = array || [];

  array.forEach(function(value) {
    if (value > top_score) {
      top_score = value;
    }
  });

  return top_score;
}

function topThreeAverage(array) {
  var top_three = [0, 0, 0];
  var tmp_array = [];
  array = array || [];

  for (var i = 0; i < array.length; i++) {
    tmp_array[i] = array[i];
  }

  for (var i = 0; i < top_three.length; i++) {
    top_three[i] = topScore(tmp_array);
    tmp_array.splice(tmp_array.indexOf(top_three[i]), 1)
  }

  return (top_three[0] + top_three[1] + top_three[2]) / 3;
}

console.log(topThreeAverage(score));
console.log(topScore(score));
console.log(score);
