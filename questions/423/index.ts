// 第二版：说白了就是解方程嘛
// 1n0 = CountZ
// 1n2 = CountW
// 1n4 = CountU
// 1n6 = CountX
// 1n8 = CountG
// 1n3 + 1n8 = CountH
// 1n4 + 1n5 = CountF
// 1n5 + 1n7 = CountV
// 1n6 + 1n7 = CountS
// 1n0 + 1n3 + 1n4 = CountR
// 1n2 + 1n3 + 1n8 = CountT
// 1n0 + 1n1 + 1n2 + 1n4 = CountO
// 1n1 + 1n7 + 2n9 = CountN
// 1n5 + 1n6 + 1n8 + 1n9 = CountI
// 1n0 + 1n1 + 2n3 + 1n5 + 2n7 + 1n8 + 1n9 = CountE

/**
 * @param {string} s
 * @return {string}
 */
export const originalDigits = (s: string): string => {
  const alphabetMap: Record<string, number> = {};
  for (const char of s) {
    alphabetMap[char] = (alphabetMap[char] ?? 0) + 1;
  }
  const n0 = alphabetMap['z'] ?? 0;
  const n2 = alphabetMap['w'] ?? 0;
  const n4 = alphabetMap['u'] ?? 0;
  const n6 = alphabetMap['x'] ?? 0;
  const n8 = alphabetMap['g'] ?? 0;
  const n3 = (alphabetMap['h'] ?? 0) - n8;
  const n5 = (alphabetMap['f'] ?? 0) - n4;
  const n7 = (alphabetMap['v'] ?? 0) - n5;
  const n1 = (alphabetMap['o'] ?? 0) - n0 - n2 - n4;
  const n9 = (alphabetMap['i'] ?? 0) - n5 - n6 - n8;
  const numberCountMap: Record<number, number> = {
    0: n0,
    1: n1,
    2: n2,
    3: n3,
    4: n4,
    5: n5,
    6: n6,
    7: n7,
    8: n8,
    9: n9,
  };
  let result = '';
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < numberCountMap[i] ?? 0; j++) {
      result += i.toString();
    }
  }
  return result;
};
