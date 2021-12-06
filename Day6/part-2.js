const { initialFish, testFish } = require("./data");
const sum = require("../utils/sum");

let fishAtAge = {
  0: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
};

initialFish.forEach((fish) => {
  fishAtAge[fish] += 1;
});

const days = 256;

const addFishToAge = (data, age, number) => {
  if (data[age] === undefined) {
    data[age] = number;
  } else {
    data[age] += number;
  }
};

for (let day = 0; day < days; day++) {
  const newFishAtAge = {};

  Object.keys(fishAtAge).forEach((ageString) => {
    const age = parseInt(ageString);
    if (age === 0) {
      addFishToAge(newFishAtAge, 6, fishAtAge[age]);
      addFishToAge(newFishAtAge, 8, fishAtAge[age]);
    } else {
      addFishToAge(newFishAtAge, age - 1, fishAtAge[age]);
    }
  });
  fishAtAge = newFishAtAge;
}

console.log(sum(Object.values(fishAtAge)));
