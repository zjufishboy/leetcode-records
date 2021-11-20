//第三版思路：滑动窗口+升级版增量计算

export const countVowels = (word: string): number => {
  let count = 0;
  const vowel = 'aeiou';
  const tempCountMap: number[][] = new Array(word.length).fill(new Array(word.length).fill(0));
  for (let i = 0; i < word.length; i++) {
    for (let j = i + 1; j <= word.length; j++) {
      if (i === 0) {
        if (j === 1) {
          tempCountMap[0][0] = vowel.includes(word[j - 1]) ? 1 : 0;
        } else {
          // console.log('add:', word[j - 1], tempCountMap[0][j - 2]);
          tempCountMap[0][j - 1] = tempCountMap[0][j - 2] + (vowel.includes(word[j - 1]) ? 1 : 0);
          // console.log('after:', word[j - 1], tempCountMap[0][j - 1]);
        }
      } else {
        // console.log('remove', word[i - 1], tempCountMap[i - 1][j - 1]);
        tempCountMap[0][j - 1] = tempCountMap[i - 1][j - 1] - (vowel.includes(word[i - 1]) ? 1 : 0);
      }
      const result = tempCountMap[i][j - 1];
      count += result;
      // console.log(word.substring(i, j), '=>', result);
    }
  }
  return count;
};
