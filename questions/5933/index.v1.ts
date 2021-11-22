// 超时

/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
export const kMirror = (k: number, n: number): number => {
  let count = 0;
  let sum = 0;
  for (let i = 1; count < n; i++) {
    // console.log('now i=', i);
    const tm = isTenMirror(i);
    const km = isKMirror(k, i);
    if (tm && km) {
      count++;
      sum += i;
    }
  }
  return sum;
};

const isStrMirror = (str: string) => {
  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[i] !== str[j]) {
      return false;
    }
  }
  return true;
};

const isTenMirror = (n: number) => {
  const str = n.toString();
  return isStrMirror(str);
};

const isKMirror = (k: number, n: number) => {
  const str = n.toString(k);
  return isStrMirror(str);
};
