import { maxCount } from '.';
import { ITargetFunc, test, TestModuleInfo } from '../../helper/test-module';

interface DataType {
  m: number;
  n: number;
  ops: [number, number][];
}
type ResType = number;

const testModule: TestModuleInfo<DataType, ResType> = {
  dataAndValue: [
    {
      data: {
        m: 3,
        n: 3,
        ops: [
          [2, 2],
          [3, 3],
        ],
      },
      result: 4,
    },
    {
      data: {
        m: 40000,
        n: 40000,
        ops: [],
      },
      result: 40000 * 40000,
    },
    {
      data: {
        m: 39999,
        n: 39999,
        ops: [[19999, 19999]],
      },
      result: 19999 * 19999,
    },
  ],
  valueValidator: (res: ResType, result: ResType) => {
    return res === result;
  },
};

const targetFunc: ITargetFunc<DataType, ResType> = (data) => {
  return maxCount(data.m, data.n, data.ops);
};

test(testModule, targetFunc);
