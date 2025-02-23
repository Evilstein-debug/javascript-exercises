const convertToCelsius = function(T1) {
  let C = (T1-32)*(5/9)
  let roundedC = parseFloat(C.toFixed(1)) 
  return roundedC
};

const convertToFahrenheit = function(T2) {
  let F = (T2*(9/5)+32)
  let roundedF = parseFloat(F.toFixed(1))
  return roundedF
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
