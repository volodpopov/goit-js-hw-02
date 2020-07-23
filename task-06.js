'use strict';

let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Введите число для сложения:');
  if (input !== null) {
    if (Number.isNaN(+input)) {
      alert(`Было введено не число, попробуйте еще раз`);
      continue;
    }
    numbers.push(+input);
  }
} while (input !== null);
{
  if (numbers.length) {
    for (let number of numbers) {
      total += number;
    }
    console.log(`Общая сумма чисел равна ${total}`);
  }
}
