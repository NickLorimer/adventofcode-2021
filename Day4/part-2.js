const { numbers, boardsData } = require("./data");

const boards = boardsData.map((data) => {
  const columns = [];
  const numbers = {};
  const rows = data[0].split("\n").map((row) =>
    row.split(",").map((item) => {
      return { value: item, picked: false };
    })
  );

  rows.forEach((row, rowIndex) => {
    row.forEach((item, columnIndex) => {
      if (columns[rowIndex] === undefined) {
        columns[rowIndex] = [];
      }
      columns[rowIndex][columnIndex] = { value: item.value, picked: false };
      numbers[item.value] = { row: rowIndex, col: columnIndex };
    });
  });

  return {
    rows,
    columns,
    numbers,
    finished: false,
  };
});

const isFinished = (array) => {
  return array.every((item) => item.picked);
};

const findIndexOfNumber = (array, number) => {
  return array.findIndex((item) => item.number === number);
};

let winningBoard = null;
let winningNumber = null;

const testBoard = boards[0];

// return;

numbers.forEach((number) => {
  boards.forEach((board) => {
    if (board.numbers[number] !== undefined && !board.finished) {
      cordinates = board.numbers[number];
      board.rows[cordinates.row][cordinates.col].picked = true;
      board.columns[cordinates.col][cordinates.row].picked = true;
      const rowFinished = isFinished(board.rows[cordinates.row]);
      const columnFinished = isFinished(board.columns[cordinates.col]);

      if (rowFinished || columnFinished) {
        winningBoard = board;
        winningNumber = number;
        board.finished = true;
      }
    }
  });
});

console.log("winningNumber", winningNumber);
console.log("winningBoard", winningBoard);

let sum = 0;

winningBoard.rows.forEach((row) => {
  row.forEach((item) => {
    if (!item.picked) {
      sum += parseInt(item.value, 10);
      console.log(sum);
    }
  });
});

console.log(sum * winningNumber);
