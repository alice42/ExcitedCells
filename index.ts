export const excitedCells = (cells: number[], k: number) => {
  if (k < 1) {
    return console.log(
      "Error, wrong value for parameter: k, it should be superior to 0 "
    );
  }
  if (cells.length <= 0) {
    return console.log(
      "Error, wrong value for parameter: cells, it must at least have 1 digit"
    );
  }
  let temp = cells;
  while (k--) {
    temp = temp.map((cell: number, index: number) => {
      let prevCell, nextCell;
      if (index === 0) {
        prevCell = temp[temp.length - 1];
        nextCell = temp[index + 1];
      } else if (index === temp.length - 1) {
        prevCell = temp[index - 1];
        nextCell = temp[0];
      } else {
        prevCell = temp[index - 1];
        nextCell = temp[index + 1];
      }
      if (prevCell === 1 && nextCell === 1) return (cell = 0);
      else if (prevCell === 1 || nextCell === 1) return (cell = 1);
      else return (cell = 0);
    });
  }
  return temp;
};

const cells = [1, 0, 1, 1];
const k = 2;

const result = excitedCells(cells, k);

result && console.log(`Result after ${k} steps: ${result}`);
