import { getAverages } from '.';
import { ITargetFunc, test, TestModuleInfo } from '../../helper/test-module';

interface DataType {
  nums: number[];
  k: number;
}

type ResType = number[];

const testModule: TestModuleInfo<DataType, ResType> = {
  dataAndValue: [
    // {
    //   data: {
    //     nums: [7, 4, 3, 9, 1, 8, 5, 2, 6],
    //     k: 3,
    //   },
    //   result: [-1, -1, -1, 5, 4, 4, -1, -1, -1],
    // },
    // {
    //   data: {
    //     nums: [100000],
    //     k: 0,
    //   },
    //   result: [100000],
    // },
    {
      data: {
        nums: [8],
        k: 100000,
      },
      result: [-1],
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
  return getAverages(data.nums, data.k);
};

test(testModule, targetFunc);
