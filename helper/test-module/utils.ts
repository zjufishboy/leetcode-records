// 描述：随机数固定器，用于在一些随机题中固定随机返回，用于测试

class SeedRandomHelper {
  private seed: number | null = null;
  private readonly initRandom: () => number;

  constructor() {
    this.initRandom = Math.random;
    globalThis.Math.random = this.seedRandom;
  }

  private seedRandom = () => {
    if (this.seed === null) {
      return this.initRandom();
    }
    const res = parseFloat('0.' + Math.sin(this.seed).toString().substr(6));
    this.seed = res;
    return res;
  };

  fixSeedRandom = (seed: number) => {
    this.seed = seed;
  };

  resetRandom = () => {
    this.seed = null;
  };
}

export const seedRandomHelper = new SeedRandomHelper();
