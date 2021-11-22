/**
 * @param {number[]} colors
 * @return {number}
 */
export const maxDistance = (colors: number[]): number => {
  // 首先找到颜色A
  const firstIndex = 0;
  // 从后往前找到颜色B
  let secondIndex = colors.length - 1;
  for (secondIndex; secondIndex > firstIndex; secondIndex--) {
    if (colors[secondIndex] !== colors[firstIndex]) {
      break;
    }
  }

  if (secondIndex === firstIndex) {
    // 全都是A,不可能存在
    return 0;
  } else {
    if (secondIndex !== colors.length - 1) {
      // A ... B ... A
      let thirdIndex = firstIndex + 1;
      for (thirdIndex; thirdIndex < secondIndex; thirdIndex++) {
        if (colors[thirdIndex] !== colors[firstIndex]) {
          break;
        }
      }
      if (thirdIndex === secondIndex) {
        // console.log('A ... B ... A');
        // A ... B ... A
        const len1 = secondIndex - firstIndex;
        const len2 = colors.length - 1 - secondIndex;
        if (len1 > len2) {
          return len1;
        } else {
          return len2;
        }
      } else {
        if (colors[thirdIndex] === colors[secondIndex]) {
          //   console.log('A ... B ... B ... A');
          // A ... B ... B ... A
          const len1 = secondIndex - firstIndex;
          const len2 = colors.length - 1 - thirdIndex;
          if (len1 > len2) {
            return len1;
          } else {
            return len2;
          }
        } else {
          //   console.log('A ... C ... B ... A');
          // A ... C ... B ... A
          const len1 = secondIndex - firstIndex;
          const len2 = colors.length - 1 - thirdIndex;
          if (len1 > len2) {
            return len1;
          } else {
            return len2;
          }
        }
      }
    } else {
      //   console.log('A ... B');
      // A ... B
      return secondIndex - firstIndex;
    }
  }
};
