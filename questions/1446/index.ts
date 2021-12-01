/**
 * @param {string} s
 * @return {number}
 */
export const maxPower = (s: string): number => {
  let result = 1;
  let count = 1;
  let lastChar = s[0];
  for (let i = 1; i < s.length; i++) {
    if (s[i] === lastChar) {
      count++;
    } else {
      if (count > result) {
        result = count;
      }
      lastChar = s[i];
      count = 1;
    }
  }
  if (count > result) {
    result = count;
  }
  return result;
};
