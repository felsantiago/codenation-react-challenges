"use strict";

const calculateFibonacci = n => {
  if (n === 1) return 1;
  if (n === 2) return 2;

  return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
};

const fibonacci = () => {
  const fibonacci = [0, 1];

  let cont = 1;
  let result = 0;
  while (fibonacci[cont - 1] + fibonacci[cont] < 350) {
    result = calculateFibonacci(cont);
    fibonacci.push(result);
    cont++;
  }

  return fibonacci;
};

const isFibonnaci = num => fibonacci().includes(num);

module.exports = {
  fibonacci,
  isFibonnaci
};
