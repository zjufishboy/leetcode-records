// 暴力睡大觉

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
export const kthSmallestPrimeFraction = (arr: number[], k: number): number[] => {
  const resultArea: [number, number][] = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      resultArea.push([arr[i], arr[j]]);
    }
  }
  resultArea.sort((a, b) => a[0] * b[1] - b[0] * a[1]);
  return resultArea[k - 1];
};
