'use strict';

let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Введите число для сложения:', '');
  if (input === null) {
    break;
  }
  if (Number.isNaN(Number(input)) || input === '') {
    alert(`Было введено не число, попробуйте еще раз`);
    continue;
  }
  numbers.push(+input);
} while (input !== null);
{
  if (numbers.length == 0) {
    console.log(`Ваш массив пуст!`);
  } else {
    for (let number of numbers) {
      total += number;
    }
    alert(`Общая сумма чисел равна ${total}`);
  }
}
