/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
export const findAnagrams = (s: string, p: string): number[] => {
  const result = [];
  if (s.length >= p.length) {
    const alphabetForP: Record<string, number> = calStrAlphabetMap(p);
    const alphabetForSubstring: Record<string, number> = calStrAlphabetMap(s.substring(0, p.length));
    for (let i = 0; i <= s.length - p.length; i++) {
      const compareResult = alphabetMapCompare(alphabetForP, alphabetForSubstring);
      // console.log({ p, sSub: s.substring(i, p.length + i), compareResult });
      if (compareResult) {
        result.push(i);
      }
      if (i !== s.length - p.length) {
        alphabetForSubstring[s[i]]--;
        if (!alphabetForSubstring[s[i]]) {
          delete alphabetForSubstring[s[i]];
        }
        alphabetForSubstring[s[i + p.length]] = (alphabetForSubstring[s[i + p.length]] ?? 0) + 1;
      }
    }
  }
  return result;
};

const calStrAlphabetMap = (s: string): Record<string, number> => {
  const map: Record<string, number> = {};
  for (const char of s) {
    map[char] = (map[char] ?? 0) + 1;
  }
  return map;
};

const alphabetMapCompare = (a: Record<string, number>, b: Record<string, number>): boolean => {
  const chars = 'abcdefghijklmnopqrstuvwxyz';
  // console.log({ a, b });
  for (const char of chars) {
    if (a[char] !== b[char]) {
      return false;
    }
  }
  return true;
};
