//第一版思路：老实人算法

export const countVowels = (word: string): number => {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    for (let j = i + 1; j <= word.length; j++) {
      const subStr = word.substring(i, j);
      const result = countVowelsInSubStr(subStr);
      count += result;
    }
  }
  return count;
};

const countVowelsInSubStr = (word: string): number => {
  const vowel = 'aeiou';
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    const s = word[i];
    if (vowel.includes(s)) {
      count++;
    }
  }
  return count;
};
