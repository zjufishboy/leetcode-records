import { kthSmallestPrimeFraction } from '.';
import { ITargetFunc, test, TestModuleInfo } from '../../helper/test-module';
import { listCompare } from '../../helper/test-module/list-compare';

interface DataType {
  arr: number[];
  k: number;
}

type ResType = number[];

const testModule: TestModuleInfo<DataType, ResType> = {
  dataAndValue: [
    {
      data: {
        arr: [1, 2, 3, 5],
        k: 3,
      },
      result: [2, 5],
    },
    {
      data: {
        arr: [1, 7],
        k: 1,
      },
      result: [1, 7],
    },
    {
      data: {
        arr: [1, 13, 17, 59],
        k: 6,
      },
      result: [13, 17],
    },
    {
      data: {
        arr: [1, 7, 23, 29, 47],
        k: 8,
      },
      result: [23, 47],
    },
  ],
  valueValidator: listCompare,
};

const targetFunc: ITargetFunc<DataType, ResType> = (data) => {
  return kthSmallestPrimeFraction(data.arr, data.k);
};

test(testModule, targetFunc);
