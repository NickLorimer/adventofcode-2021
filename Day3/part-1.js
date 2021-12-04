const { data } = require("./data");
const sum = require("../utils/sum");
const readings = data.split("\n");

const values = readings.map((reading) => reading.split(""));

const occurrences = [];

values.forEach((value) => {
  for (let index = 0; index < value.length; index++) {
    const reading = value[index];
    if (occurrences[index] === undefined) {
      occurrences[index] = [0, 0];
    }
    occurrences[index][reading] += 1;
  }
});

let epsilon = "";
let gamma = "";

occurrences.forEach((occurrence) => {
  if (occurrence[0] > occurrence[1]) {
    epsilon += "1";
    gamma += "0";
  } else {
    epsilon += "0";
    gamma += "1";
  }
});

console.log("epsilon", epsilon);
console.log("gamma", gamma);

console.log(parseInt(epsilon, 2) * parseInt(gamma, 2));
