import { excitedCells } from "./index";

describe("Excited cells tests", () => {
  const cellsTest = [1, 0, 1, 1];
  test("1 step", () => {
    const expected = [1, 0, 1, 0];
    const result = excitedCells(cellsTest, 1);
    expect(expected).toEqual(result);
  });
  test("2 steps", () => {
    const expected = [0, 0, 0, 0];
    const result = excitedCells(cellsTest, 2);
    expect(expected).toEqual(result);
  });
});
