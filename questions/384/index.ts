export class Solution {
  private initNumbers: number[];
  private numbers: number[];

  constructor(numbers: number[]) {
    this.numbers = [...numbers];
    this.initNumbers = [...numbers];
  }

  reset = () => {
    this.numbers = [...this.initNumbers];
    return this.initNumbers;
  };

  shuffle = () => {
    for (let i = this.numbers.length - 1; i >= 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1)); // 0-i的随机数
      const temp = this.numbers[i];
      this.numbers[i] = this.numbers[randomIndex];
      this.numbers[randomIndex] = temp;
    }
    return this.numbers;
  };
}
