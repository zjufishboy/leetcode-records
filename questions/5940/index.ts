/**
 * @param {number[]} nums
 * @return {number}
 */
export const minimumDeletions = (nums: number[]): number => {
  let minIndex = 0;
  let maxIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    if (nums[maxIndex] < cur) {
      maxIndex = i;
    }
    if (nums[minIndex] > cur) {
      minIndex = i;
    }
  }
  const deleteCountFromStart = [minIndex + 1, maxIndex + 1].sort((a, b) => a - b);
  const deleteCountFromEnd = [nums.length - minIndex, nums.length - maxIndex].sort((a, b) => a - b);

  const result = [deleteCountFromStart[0] + deleteCountFromEnd[0], deleteCountFromEnd[1], deleteCountFromStart[1]].sort(
    (a, b) => a - b
  );
  return result[0];
};
