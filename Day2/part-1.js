const { instructions } = require("./data");
const sum = require("../utils/sum");
const array = instructions.split("\n");

const positions = {
  x: 0,
  y: 0,
};

const xInstructions = [];
const yInstructions = [];

array.forEach((instruction) => {
  const parts = instruction.split(" ");
  const rule = parts[0];
  const value = parseInt(parts[1], 10);

  switch (rule) {
    case "up":
      yInstructions.push(value * -1);
      break;

    case "down":
      yInstructions.push(value);
      break;

    case "forward":
      xInstructions.push(value);
      break;

    default:
      break;
  }
});

const totalX = sum(xInstructions);

const totalY = sum(yInstructions);

console.log("totalX", totalX);
console.log("totaly", totalY);

console.log(totalX * totalY);
