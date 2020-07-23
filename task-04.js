'use strict';

const formatString = function (string) {
  return string.split('').length <= 40
    ? string
    : string.split('').splice(0, 40).join('');
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
