export const countVowelSubstrings = (word: string): number => {
  if (word.length < 5) {
    return 0;
  }
  let count = 0;
  for (let i = 0; i < word.length - 4; i++) {
    for (let j = i + 5; j <= word.length; j++) {
      const subStr = word.substring(i, j);
      const result = testVowel(subStr);
      if (result) {
        count++;
      }
    }
  }
  return count;
};

const testVowel = (word: string): boolean => {
  const vowel = 'aeiou';
  const vowelMap: Record<string, boolean> = {};
  let result = false;
  for (let i = 0; i < word.length; i++) {
    const s = word[i];
    if (!vowel.includes(s)) {
      result = false;
      return result;
    } else {
      vowelMap[s] = true;
    }
  }
  result = vowelMap.a && vowelMap.e && vowelMap.i && vowelMap.o && vowelMap.u;
  return result;
};
