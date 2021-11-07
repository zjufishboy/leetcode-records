//第三版思路：滑动窗口+动态规划+总结计算
//又被关了，别当老实人一个个算子串，直接按结尾统一算就行了，因为新的子串最后一个字母肯定会加i+1/0,没必要一个个算

export const countVowels = (word: string): number => {
  let count = 0;
  const vowel = 'aeiou';
  const tempCountMap: number[] = new Array(word.length).fill(0);
  for (let i = 0; i < word.length; i++) {
    if (i === 0) {
      if (vowel.includes(word[i])) {
        tempCountMap[i] = 1;
      } else {
        tempCountMap[i] = 0;
      }
    } else {
      if (vowel.includes(word[i])) {
        tempCountMap[i] = tempCountMap[i - 1] + i + 1;
      } else {
        tempCountMap[i] = tempCountMap[i - 1];
      }
    }
    count += tempCountMap[i];
  }
  return count;
};
