"use strict";

var score = [74989, 74990, 84990, 62000, 58480, 61800];

function sDecrease(a, b) {
  if (a > b)
      return -1;
  else if (a < b)
      return 1;
  else
      return 0;
}

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
  var tmp_array = [];
  var top_three_average = 0;
  array = array || [];

  for (var i = 0; i < array.length; i++) {
    tmp_array[i] = array[i];
  }

  tmp_array.sort(sDecrease);
  for (var i = 0; i < 3; i++) {
    top_three_average += tmp_array[i];
  }
  top_three_average /= 3;
  
  return top_three_average;
}

console.log(topThreeAverage(score));
console.log(topScore(score));
console.log(score);
