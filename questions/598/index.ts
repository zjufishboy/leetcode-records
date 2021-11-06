// https://leetcode-cn.com/problems/range-addition-ii/

// 第二版思路： 计算最大区域与新操作区域的重合范围
// 就尼玛离谱，脑筋急转弯卡了半小时

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
export const maxCount = function (m: number, n: number, ops: [number, number][]): number {
  const area = [m, n];
  ops.forEach((operator) => {
    [0, 1].forEach((index) => {
      if (operator[index] < area[index]) {
        area[index] = operator[index];
      }
    });
  });
  return area[0] * area[1];
};
