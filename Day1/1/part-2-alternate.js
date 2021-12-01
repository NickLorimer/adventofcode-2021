const { measurements } = require("./data");
const array = measurements.split("\n");

const windowMeasurements = [];

array.forEach((measurement, index) => {
  const measurement1 = parseInt(measurement);

  for (let k = 0; k < 3; k++) {
    if (index + k < array.length - 2) {
      if (windowMeasurements[index + k] === undefined) {
        windowMeasurements[index + k] = measurement1;
      } else {
        windowMeasurements[index + k] += measurement1;
      }
    }
  }
});

// console.log(windowMeasurements);

let increases = 0;

windowMeasurements.forEach((measurement, index) => {
  if (index > 0 && measurement !== null) {
    if (measurement > windowMeasurements[index - 1]) {
      increases++;
    }
  }
});

console.log(increases);
