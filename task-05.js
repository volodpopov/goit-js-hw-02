'use strict';

const checkForSpam = function (message) {
  const words = message.toLowerCase();
  const isInWords = words.includes('spam') || words.includes('sale');
  return isInWords;
};

console.log(checkForSpam('Latest technology news'));

console.log(checkForSpam('JavaScript weekly newsletter'));

console.log(checkForSpam('Get best sale offers now!'));

console.log(checkForSpam('[SPAM] How to earn fast money?'));
