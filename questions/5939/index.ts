/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
export const getAverages = (nums: number[], k: number): number[] => {
  const result = [];
  let sum = 0;
  let sumCount = 0;
  for (let i = 0; i < nums.length && i < k; i++) {
    sum += nums[i];
    sumCount++;
  }
  for (let i = 0; i < nums.length; i++) {
    if (i < nums.length - k) {
      sum += nums[i + k];
      sumCount++;
    }
    if (i > k) {
      sum -= nums[i - k - 1];
      sumCount--;
    }
    if (sumCount === k * 2 + 1) {
      result.push(Math.floor(sum / sumCount));
    } else {
      result.push(-1);
    }
  }
  return result;
};
