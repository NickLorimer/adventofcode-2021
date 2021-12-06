const { initialFish, testFish } = require("./data");

let fish = [...initialFish];

const days = 80;

for (let day = 0; day < days; day++) {
  const newFish = [];
  fish.forEach((element, index) => {
    if (element === 0) {
      newFish.push(6);
      newFish.push(8);
    } else {
      newFish.push(element - 1);
    }
  });
  fish = newFish;
}

console.log(fish.length);
