const sumAll = function (num1, num2) {
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    return "ERROR";
  }

  if (num1 < 0 || num2 < 0) {
    return "ERROR";
  }

  let numbers = [num1, num2];

  numbers.sort((a, b) => a - b);

  let rest = 0;

  for (let i = numbers[0]; i <= numbers[1]; i++) {
    rest += i;
  }

  return rest;
};

sumAll(1, 4);

// Do not edit below this line
module.exports = sumAll;
