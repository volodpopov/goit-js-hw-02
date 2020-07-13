'use strict';

let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt('Введите число для сложения:', 0);

  if (input === '' || input === null || Number.isNaN(Number(input))) break;
  numbers.push(+input);
  console.log(numbers);
}
if (numbers.length > 0) {
  for (let number of numbers) {
    total += number;
  }
}

console.log(`Общая сумма чисел равна ${total}`);
