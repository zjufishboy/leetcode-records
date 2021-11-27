import { Solution } from '.';
import { ITargetFunc, test, TestModuleInfo } from '../../helper/test-module';

enum Operation {
  FLIP = 'flip',
  RESET = 'reset',
}

interface DataType {
  source: {
    m: number;
    n: number;
  };
  operations: Operation[];
}

type ResType = [number, number][];

const testModule: TestModuleInfo<DataType, ResType> = {
  dataAndValue: [
    {
      data: {
        source: {
          m: 3,
          n: 1,
        },
        operations: [Operation.FLIP, Operation.FLIP, Operation.FLIP, Operation.RESET, Operation.FLIP],
      },
      result: [
        [1, 0],
        [2, 0],
        [0, 0],
        [-1, -1],
        [1, 0],
      ],
    },
    {
      data: {
        source: {
          m: 10000,
          n: 10000,
        },
        operations: [],
      },
      result: [],
    },
  ],
  valueValidator: (res: ResType, result: ResType) => {
    if (res.length !== result.length) {
      return false;
    }
    for (let i = 0; i < result.length; i++) {
      if (result[i][0] !== res[i][0] || result[i][1] !== res[i][1]) {
        return false;
      }
    }
    return true;
  },
};

const targetFunc: ITargetFunc<DataType, ResType> = (data) => {
  const solution = new Solution(data.source.m, data.source.n);
  const result = data.operations.map<[number, number]>((op) => {
    if (op === Operation.FLIP) {
      return solution.flip();
    }
    if (op === Operation.RESET) {
      solution.reset();
      return [-1, -1];
    }
    return [-1, -1];
  });
  return result;
};

test(testModule, targetFunc, { fixRandomSeed: 0.1 });
