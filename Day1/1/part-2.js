const { measurements } = require("./data");
const array = measurements.split("\n");

const windowMeasurements = array.map((measurement, index) => {
  const measurement1 = parseInt(measurement);
  const measurement2 = parseInt(array[index + 1]) || null;
  const measurement3 = parseInt(array[index + 2]) || null;

  if (!measurement2 || !measurement3) {
    return null;
  }
  return measurement1 + measurement2 + measurement3;
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
