// 超时
export class RangeFreqQuery {
  arr: number[];
  indexMap: Record<number, number[]> = {};
  constructor(arr: number[]) {
    this.arr = arr;
    this.initIndexMap();
  }

  initIndexMap = () => {
    for (let i = 0; i < this.arr.length; i++) {
      const n = this.arr[i];
      if (this.indexMap[n] === undefined) {
        this.indexMap[n] = [i];
      } else {
        this.indexMap[n].push(i);
      }
    }
  };

  /**
   * @param {number} left
   * @param {number} right
   * @param {number} value
   * @return {number}
   */
  query = (left: number, right: number, value: number): number => {
    let count = 0;
    const indexList = this.indexMap[value];
    if (indexList === undefined) {
      return 0;
    }
    for (const index of indexList) {
      if (index <= right && index >= left) {
        count++;
      }
      if (index > right) {
        break;
      }
    }
    return count;
  };
}
