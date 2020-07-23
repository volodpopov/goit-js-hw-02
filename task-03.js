'use strict';

const findLongestWord = function (string) {
  const words = string.split(' ');
  let word = words[0];
  for (let i = 0; i < words.length; i += 1) {
    if (words[i].length >= word.length) {
      word = words[i];
    }
  }
  return word;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

console.log(findLongestWord('Google do a roll'));

console.log(findLongestWord('May the force be with you'));
