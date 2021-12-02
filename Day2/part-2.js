const { instructions } = require("./data");
const sum = require("../utils/sum");
const array = instructions.split("\n");

const positions = {
  x: 0,
  y: 0,
  aim: 0,
};

array.forEach((instruction) => {
  const parts = instruction.split(" ");
  const rule = parts[0];
  const value = parseInt(parts[1], 10);

  switch (rule) {
    case "up":
      positions.aim -= value;
      break;

    case "down":
      positions.aim += value;
      break;

    case "forward":
      positions.x += value;
      positions.y += value * positions.aim;
      break;

    default:
      break;
  }

  console.log(positions);
});

console.log(positions);
console.log(positions.x * positions.y);
