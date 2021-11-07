//第二版思路：滑动窗口+增量计算

export const countVowels = (word: string): number => {
  let count = 0;
  let tempCount = 0;
  const vowel = 'aeiou';
  for (let i = 0; i < word.length; i++) {
    for (let j = i + 1; j <= word.length; j++) {
      if (vowel.includes(word[j - 1])) {
        tempCount++;
      }
      count += tempCount;
    }
    tempCount = 0;
  }
  return count;
};
