import { minimumDeletions } from '.';
import { ITargetFunc, test, TestModuleInfo } from '../../helper/test-module';

interface DataType {
  nums: number[];
}

type ResType = number;

const testModule: TestModuleInfo<DataType, ResType> = {
  dataAndValue: [
    // {
    //   data: {
    //     nums: [2, 10, 7, 5, 4, 1, 8, 6],
    //   },
    //   result: 5,
    // },
    // {
    //   data: {
    //     nums: [0, -4, 19, 1, 8, -2, -3, 5],
    //   },
    //   result: 3,
    // },
    // {
    //   data: {
    //     nums: [101],
    //   },
    //   result: 1,
    // },
    {
      data: {
        nums: [48, -49, -67, 18, -59, -56, 47, -26, -24, -73, -96, 27, -2, -45],
      },
      result: 5,
    },
  ],
  valueValidator: (res: ResType, result: ResType) => {
    return res === result;
  },
};

const targetFunc: ITargetFunc<DataType, ResType> = (data) => {
  return minimumDeletions(data.nums);
};

test(testModule, targetFunc);
