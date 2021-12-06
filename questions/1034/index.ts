/**
 * @param {number[][]} grid
 * @param {number} row
 * @param {number} col
 * @param {number} color
 * @return {number[][]}
 */
export const colorBorder = (grid: number[][], row: number, col: number, color: number): number[][] => {
  const colHeight = grid.length;
  const rowWidth = grid[0].length;
  const mark = getMatrix(colHeight, rowWidth, false);
  const records = getMatrix(colHeight, rowWidth, false);
  const targetColor = grid[row][col];
  const dfsGrid = (x: number, y: number) => {
    const curColor = grid[x][y];
    // console.log({ mark });
    mark[x][y] = true;
    // console.log({ mark });
    if (curColor !== targetColor) {
      return;
    }
    for (const direction of directions) {
      const howToMove = move[direction];
      const nextAxisX = x + howToMove[0];
      const nextAxisY = y + howToMove[1];
      // console.log({ curAxis: [x, y], direction, nextAxis: [nextAxisX, nextAxisY] });
      if (nextAxisX === colHeight || nextAxisX < 0 || nextAxisY === rowWidth || nextAxisY < 0) {
        // 当前节点为边缘
        // console.log('边缘');
        records[x][y] = true;
        continue;
      }
      if (mark[nextAxisX][nextAxisY]) {
        // console.log('走过了');

        continue;
      }
      const nextColor = grid[nextAxisX][nextAxisY];
      if (nextColor !== targetColor) {
        // console.log('不同色');
        records[x][y] = true;
        continue;
      }
      dfsGrid(nextAxisX, nextAxisY);
    }
  };

  dfsGrid(row, col);

  for (let i = 0; i < colHeight; i++) {
    for (let j = 0; j < rowWidth; j++) {
      if (records[i][j]) {
        grid[i][j] = color;
      }
    }
  }

  return grid;
};

const getMatrix = <T = number>(col: number, row: number, num: T) => {
  return new Array(col).fill(0).map(() => new Array<T>(row).fill(num));
};

enum Direction {
  UP = 'UP',
  DOWN = 'DOWN',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

const directions = [Direction.UP, Direction.RIGHT, Direction.DOWN, Direction.LEFT];

const move: Record<Direction, [number, number]> = {
  [Direction.UP]: [-1, 0],
  [Direction.DOWN]: [1, 0],
  [Direction.LEFT]: [0, -1],
  [Direction.RIGHT]: [0, 1],
};
