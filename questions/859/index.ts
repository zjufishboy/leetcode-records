/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
export const buddyStrings = (s: string, goal: string): boolean => {
  if (s.length !== goal.length) {
    return false;
  }
  if (s.length < 2) {
    return false;
  }

  // 26以上必有相同，开启加速，减少同字母计算
  const openSpeedUp = s.length > 26;
  const alphabets: Record<string, boolean> = {};
  const diffArr: number[] = [];
  let isSameExist = openSpeedUp;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      diffArr.push(i);
      if (diffArr.length > 2) {
        // 超过2个位置不一样就返回false
        return false;
      }
    }
    // 没开加速需要计算同字母
    if (!openSpeedUp) {
      if (alphabets[s[i]]) {
        isSameExist = true;
      } else {
        alphabets[s[i]] = true;
      }
    }
  }
  if (diffArr.length == 1) {
    return false;
  }
  if (diffArr.length == 0) {
    // 相同,就看有没有相同字母
    return isSameExist;
  }
  // 最后检查两个位置上的字母是否相同
  return s[diffArr[0]] === goal[diffArr[1]] && goal[diffArr[0]] === s[diffArr[1]];
};
