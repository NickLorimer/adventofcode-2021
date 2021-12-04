const { data, testData } = require("./data");
const sum = require("../utils/sum");
const readings = data.split("\n");

const values = readings.map((reading) => reading.split(""));

const getOccurrencesAtIndex = (data, index) => {
  const occurrencesAtIndex = [0, 0];

  data.forEach((value) => {
    const reading = value[index];
    occurrencesAtIndex[reading] += 1;
  });

  return occurrencesAtIndex;
};

let oxygenValues = [...values];
let co2Values = [...values];

for (let index = 0; index < values[0].length; index++) {
  const oxygenOccurrenceAtIndex = getOccurrencesAtIndex(oxygenValues, index);
  const mostCommonOxygen =
    oxygenOccurrenceAtIndex[0] > oxygenOccurrenceAtIndex[1] ? "0" : "1";

  if (oxygenValues.length > 1) {
    oxygenValues = oxygenValues.filter(
      (value) => value[index] === mostCommonOxygen
    );
  }

  const co2OccurrenceAtIndex = getOccurrencesAtIndex(co2Values, index);
  const leastCommonC02 =
    co2OccurrenceAtIndex[0] > co2OccurrenceAtIndex[1] ? "1" : "0";

  if (co2Values.length > 1) {
    co2Values = co2Values.filter((value) => value[index] === leastCommonC02);
  }
}

const oxygenDecimal = parseInt(oxygenValues[0].join(""), 2);
const co2Decimal = parseInt(co2Values[0].join(""), 2);

console.log(oxygenDecimal);
console.log(co2Decimal);

console.log(oxygenDecimal * co2Decimal);
