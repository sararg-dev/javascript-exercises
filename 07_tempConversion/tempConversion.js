const convertToCelsius = function (number) {
  let result = (number - 32) * (5 / 9);

  let formattedResult = result.toFixed(1);

  return Number.parseFloat(formattedResult);
};

const convertToFahrenheit = function (number) {
  let result = number * (9 / 5) + 32;

  let formattedResult = result.toFixed(1);

  

  return Number.parseFloat(formattedResult);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
