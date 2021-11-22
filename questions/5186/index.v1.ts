// 超时
export class RangeFreqQuery {
  arr: number[];
  constructor(arr: number[]) {
    this.arr = arr;
  }

  /**
   * @param {number} left
   * @param {number} right
   * @param {number} value
   * @return {number}
   */
  query = (left: number, right: number, value: number): number => {
    let count = 0;
    for (let i = left; i <= right; i++) {
      if (this.arr[i] === value) {
        count++;
      }
    }
    return count;
  };
}
