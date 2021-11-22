import { Solution } from '.';
import { ITargetFunc, test, TestModuleInfo } from '../../helper/test-module';

// 本题自测随机数seed为0.18，没有比较好的验证手段，建议直接拿我的代码当验证器
// TODO:改造一个验证器，把能通过的代码作为验证器生成答案
enum Operation {
  Reset = 'reset',
  Shuffle = 'shuffle',
}

interface DataType {
  initValue: number[];
  operations: Operation[];
}

type ResType = number[][];

const testModule: TestModuleInfo<DataType, ResType> = {
  dataAndValue: [
    {
      data: {
        initValue: [1, 2, 3],
        operations: [Operation.Shuffle, Operation.Reset, Operation.Shuffle],
      },
      result: [
        [2, 3, 1],
        [1, 2, 3],
        [1, 3, 2],
      ],
    },
    {
      data: {
        initValue: [1, 2, 3, 4, 5, 6],
        operations: [Operation.Shuffle, Operation.Reset, Operation.Shuffle],
      },
      result: [
        [1, 6, 3, 5, 2, 4],
        [1, 2, 3, 4, 5, 6],
        [3, 5, 4, 2, 1, 6],
      ],
    },
  ],
  valueValidator: (res, result) => {
    if (res.length !== result.length) {
      return false;
    }
    for (let i = 0; i < res.length; i++) {
      if (res[i].length !== result[i].length) {
        return false;
      }
      for (let j = 0; j < res[i].length; j++) {
        if (res[i][j] !== result[i][j]) {
          return false;
        }
      }
    }
    return true;
  },
};

const targetFunc: ITargetFunc<DataType, ResType> = (data) => {
  const solution = new Solution(data.initValue);
  const result = data.operations.map((op) => {
    if (op === Operation.Reset) {
      const data = solution.reset();
      return data;
    } else {
      const data = solution.shuffle();
      return data;
    }
  });
  console.log({ result });
  return result;
};

test(testModule, targetFunc, { fixRandomSeed: 0.18 });
