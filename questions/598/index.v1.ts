// https://leetcode-cn.com/problems/range-addition-ii/

// 第一版思路：直接操作数组，老实人计算

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
export const maxCount = function (m: number, n: number, ops: [number, number][]): number {
  if (ops.length === 0) {
    return m * n;
  }
  if (ops.length === 1) {
    return ops[0][0] * ops[0][1];
  }
  const data = new Array<number>(m * n).fill(0);
  ops.forEach((operator) => {
    dataOps(m, data, operator);
  });
  return countMaxValue(data);
};

const dataOps = (m: number, arr: number[], ops: [number, number]) => {
  for (let i = 0; i < ops[0]; i++) {
    for (let j = 0; j < ops[1]; j++) {
      arr[i * m + j] += 1;
    }
  }
};

const countMaxValue = (arr: number[]) => {
  let max = 0;
  let count = 0;
  for (const n of arr) {
    if (n > max) {
      max = n;
      count = 1;
    } else if (n === max) {
      count += 1;
    }
  }
  return count;
};
