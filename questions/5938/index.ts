// TODO 这题放的较宽,还有优化空间

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export const targetIndices = (nums: number[], target: number): number[] => {
  let start = -1;
  let end = -2;
  const sortedNums = nums.sort((a, b) => a - b);
  for (let i = 0; i < sortedNums.length; i++) {
    if (sortedNums[i] === target) {
      if (start === -1) {
        start = i;
      }
      end = i;
    } else if (sortedNums[i] > target) {
      break;
    }
  }
  const result = new Array(end - start + 1).fill(0).map((n, index) => index + start);
  return result;
};
