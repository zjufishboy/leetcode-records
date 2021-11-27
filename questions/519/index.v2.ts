// 思路总结：剩余随机类题目，通常思路是将选中的数据置换到末尾，然后随机取前面的下标来获取
// 但往往会遇到数组较大内存超标的问题，这种时候可以通过map来记录需要的数据，因为默认为零的数据理论上可以不记录
// 在map里查不到说明是默认数据，查到了说明已经被置换了，只记录可能会用到的数据即可，默认数据不用记录

// TODO 不知道为啥，这版的内存消耗最高，时间最小

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
    let indexTarget = this.map[index] ?? index;
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
