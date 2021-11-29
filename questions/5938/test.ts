import { targetIndices } from '.';
import { ITargetFunc, test, TestModuleInfo } from '../../helper/test-module';

interface DataType {
  nums: number[];
  target: number;
}

type ResType = number[];

const testModule: TestModuleInfo<DataType, ResType> = {
  dataAndValue: [
    {
      data: {
        nums: [1, 2, 5, 2, 3],
        target: 2,
      },
      result: [1, 2],
    },
    {
      data: {
        nums: [1, 2, 5, 2, 3],
        target: 3,
      },
      result: [3],
    },
    {
      data: {
        nums: [1, 2, 5, 2, 3],
        target: 4,
      },
      result: [],
    },
  ],
  valueValidator: (res: ResType, result: ResType) => {
    if (res.length !== result.length) {
      return false;
    }
    for (let i = 0; i < res.length; i++) {
      if (res[i] !== result[i]) {
        return false;
      }
    }
    return true;
  },
};

const targetFunc: ITargetFunc<DataType, ResType> = (data) => {
  return targetIndices(data.nums, data.target);
};

test(testModule, targetFunc);
