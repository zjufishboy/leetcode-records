// TODO: 尚未解决

/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
export const kMirror = (k: number, n: number): number => {
  let count = 0;
  let sum = 0;
  for (let i = 1; count < n; i++) {
    console.log('now i=', i);
    const tm = isKMirror(10, i);
    console.log(i.toString(10));
    console.log({ tm });

    if (!tm) {
      continue;
    }
    const km = isKMirror(k, i);
    console.log(i.toString(k));
    console.log({ km });

    if (!km) {
      continue;
    }
    count++;
    sum += i;
  }
  return sum;
};

const isKMirror = (k: number, n: number) => {
  const numbers = [];
  let tempN = n;
  while (tempN != 0) {
    numbers.push(tempN % k);
    tempN = (tempN - (tempN % k)) / k;
  }

  for (let i = 0, j = numbers.length - 1; i < j; i++, j--) {
    if (numbers[i] !== numbers[j]) {
      return false;
    }
  }

  return true;
};
