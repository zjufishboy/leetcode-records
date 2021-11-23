// 老实人算法

/**
 * @param {string} s
 * @return {string}
 */
export const originalDigits = (s: string): string => {
  const alphabetMap: Record<string, number> = {};
  const numberCountMap: Record<number, number> = {};
  const canNumberExistMap = { ...defaultCanNumberExistMap };
  for (const char of s) {
    alphabetMap[char] = (alphabetMap[char] ?? 0) + 1;
  }
  let count = 0;
  loop1: for (const a of keys) {
    // console.log('==========================');
    // console.log('check:', a);
    const numExistCount = alphabetMap[a];
    if (numExistCount && numExistCount > 0) {
      // 遍历目标英文单词列表
      for (const targetNumber of alphabetToNumberMap[a]) {
        // console.log('targetWord:', targetNumber);
        if (canNumberExistMap[targetNumber]) {
          // console.log('canExist');
          // 计算能有多少个
          let targetNumberCount = s.length;
          for (const char of targetNumber) {
            let tempTargetNumberCount = s.length;
            const numExistCountForChar = alphabetMap[char];
            if (!numExistCountForChar) {
              tempTargetNumberCount = 0;
            } else {
              tempTargetNumberCount = Math.floor(numExistCountForChar / numberWordToAlphaMapMap[targetNumber][char]);
            }
            if (tempTargetNumberCount < targetNumberCount) {
              targetNumberCount = tempTargetNumberCount;
            }
          }
          numberCountMap[numberWordsToNumberMap[targetNumber]] =
            (numberCountMap[numberWordsToNumberMap[targetNumber]] ?? 0) + targetNumberCount;
          count += targetNumber.length * targetNumberCount;
          if (count === s.length) {
            break loop1;
          }
          // 遍历减少
          for (const char of targetNumber) {
            alphabetMap[char] -= numExistCount;
            if (alphabetMap[char] === 0) {
              for (const num of alphabetToNumberMap[char]) {
                canNumberExistMap[num] = false;
              }
            }
          }
          canNumberExistMap[targetNumber] = false;
        } else {
          // console.log('notExist');
        }
      }
    } else {
      // 字母不存在
      for (const targetNumber of alphabetToNumberMap[a]) {
        canNumberExistMap[targetNumber] = false;
      }
    }
    // console.log(alphabetMap);
    // console.log(canNumberExistMap);
  }
  // console.log('res:', numberCountMap);
  let result = '';
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < numberCountMap[i] ?? 0; j++) {
      result += i.toString();
    }
  }
  return result;
};

// 数字英文
const numberWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

const defaultCanNumberExistMap: Record<string, boolean> = {
  zero: true,
  one: true,
  two: true,
  three: true,
  four: true,
  five: true,
  six: true,
  seven: true,
  eight: true,
  nine: true,
};

// 换算
const numberWordsToNumberMap: Record<string, number> = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

// 字母对应的单词
const alphabetToNumberMap: Record<string, string[]> = {
  z: ['zero'],
  e: ['zero', 'one', 'three', 'three', 'five', 'seven', 'seven', 'eight', 'nine'],
  r: ['zero', 'three', 'four'],
  o: ['zero', 'one', 'two', 'four'],
  n: ['one', 'seven', 'nine', 'nine'],
  t: ['two', 'three', 'eight'],
  w: ['two'],
  h: ['three', 'eight'],
  f: ['four', 'five'],
  u: ['four'],
  i: ['five', 'six', 'eight', 'nine'],
  v: ['five', 'seven'],
  s: ['six', 'seven'],
  x: ['six'],
  g: ['eight'],
};

// 按出现频率计算的字母顺序
const keys = ['z', 'w', 'u', 'x', 'g', 'h', 'f', 'v', 's', 'r', 't', 'o', 'n', 'i', 'e'];

const numberWordToAlphaMapMap: Record<string, Record<string, number>> = {
  zero: { z: 1, e: 1, r: 1, o: 1 },
  one: { o: 1, n: 1, e: 1 },
  two: { t: 1, w: 1, o: 1 },
  three: { t: 1, h: 1, r: 1, e: 2 },
  four: { f: 1, o: 1, u: 1, r: 1 },
  five: { f: 1, i: 1, v: 1, e: 1 },
  six: { s: 1, i: 1, x: 1 },
  seven: { s: 1, e: 2, v: 1, n: 1 },
  eight: { e: 1, i: 1, g: 1, h: 1, t: 1 },
  nine: { n: 2, i: 1, e: 1 },
};
