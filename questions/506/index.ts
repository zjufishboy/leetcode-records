/**
 * @param {number[]} score
 * @return {string[]}
 */
export const findRelativeRanks = (score: number[]): string[] => {
  const result = new Array<number>(score.length).fill(0).map((_v, idx) => idx);
  result.sort((idxA, idxB) => score[idxB] - score[idxA]);
  const rank = new Array<string>(score.length);
  for (let i = 0; i < result.length; i++) {
    if (i < 3) {
      rank[result[i]] = medals[i];
    } else {
      rank[result[i]] = (i + 1).toString();
    }
  }

  return rank;
};

const medals = ['Gold Medal', 'Silver Medal', 'Bronze Medal'];
