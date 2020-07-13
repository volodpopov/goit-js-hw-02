'use strict';

const formatString = function (string) {
  const stringToSimbols = string.split('');
  if (stringToSimbols.length <= 40) {
    return string;
  } else {
    const cropString = stringToSimbols.splice(0, 40);
    cropString.push('...');
    const newString = cropString.join('');
    return newString;
  }
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
