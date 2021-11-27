// TODO 不知道为啥，这版的内存消耗最小，时间最高
export class Solution {
  m: number;
  n: number;
  map: Record<number, number> = {};
  count: number = 0;
  constructor(m: number, n: number) {
    this.m = m;
    this.n = n;
    this.reset();
  }

  flip = (): [number, number] => {
    const indexEnd = this.m * this.n - this.count - 1;
    const index = Math.floor(Math.random() * (indexEnd + 1));
    let indexTarget = index;
    if (this.map[index] !== undefined) {
      indexTarget = this.map[index];
    }
    // 位置不一样才置换进去，否则不用置换，浪费空间
    if (index !== indexEnd) {
      this.map[index] = this.map[indexEnd] ?? indexEnd;
    }
    // 进一步内存优化的话,可以把indexEnd的记录删除，因为后续肯定不会访问到
    // delete this.map[indexEnd];
    this.count++;
    const i = indexTarget % this.m;
    const j = (indexTarget - i) / this.m;
    return [i, j];
  };

  reset = () => {
    this.map = {};
    this.count = 0;
    return;
  };
}
