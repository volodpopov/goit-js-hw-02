'use strict';

const findLongestWord = function (string) {
  const words = string.split(' ');
  let longestWord = 0;
  let word = null;
  for (let i = 0; i < words.length; i+=1) {
    if (words[i].length > longestWord) {
      longestWord = words[i].length;
      word = words[i];
    }
  }
  return word;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

console.log(findLongestWord('Google do a roll'));

console.log(findLongestWord('May the force be with you'));