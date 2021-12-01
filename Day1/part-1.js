const { measurements } = require("./data");
const array = measurements.split("\n");

let increases = 0;

array.forEach((measurement, index) => {
  if (index > 0) {
    if (measurement > parseInt(array[index - 1], 10)) {
      increases++;
    }
  }
});

console.log(increases);
