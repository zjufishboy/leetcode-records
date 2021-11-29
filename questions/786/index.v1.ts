// TODO 一定有更好的做法，但我没想到，哭了

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
export const kthSmallestPrimeFraction = (arr: number[], k: number): number[] => {
  const arrLen = arr.length;
  let lastSum = 0;
  let sum = 0;
  let i = 1;
  while (sum < k) {
    lastSum = sum;
    sum += 1 + 2 * (arrLen - 2 * i);
    i++;
  }
  const turn = i - 2;
  const last = k - lastSum;
  console.log({ turn, last });
  if (last === 1) {
    return [turn, arrLen - 1 - turn].map((idx) => arr[idx]);
  } else {
    // const subTurn = Math.floor((last - 1) / 2);
    // const resA = [turn, arrLen - 1 - subTurn];
    // const resB = [turn + subTurn, arrLen - 1];
    // const ALessThanB = arr[resA[0]] * arr[resB[1]] < arr[resB[0]] * arr[resA[1]];
    // const isSmall = last % 2 === 0;
    // if (ALessThanB === isSmall) {
    //   return resA.map((idx) => arr[idx]);
    // } else {
    //   return resB.map((idx) => arr[idx]);
    // }

    const nums = arr.slice(turn, arrLen - 1 - turn);
    const resultAreaA: [number, number][] = nums.map((idx) => [arr[idx], arr[arrLen - 1 - turn]]);
    const resultAreaB: [number, number][] = nums.map((idx) => [arr[turn], arr[idx]]);
    const resultArea = resultAreaA.concat(resultAreaB).sort((a, b) => a[0] * b[1] - b[0] * a[1]);
    console.log({ resultArea });
    return resultArea[last - 1];
  }
};
