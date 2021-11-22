import { kMirror } from '.';
import { ITargetFunc, test, TestModuleInfo } from '../../helper/test-module';

interface DataType {
  k: number;
  n: number;
}

type ResType = number;

const testModule: TestModuleInfo<DataType, ResType> = {
  dataAndValue: [
    {
      data: {
        k: 2,
        n: 5,
      },
      result: 25,
    },
    {
      data: {
        k: 3,
        n: 7,
      },
      result: 499,
    },
    {
      data: {
        k: 7,
        n: 17,
      },
      result: 20379000,
    },
    {
      data: {
        k: 4,
        n: 20,
      },
      result: 12448815,
    },
    {
      data: {
        k: 5,
        n: 20,
      },
      result: 12448815,
    },
  ],
  valueValidator: (res: ResType, result: ResType) => {
    return res === result;
  },
};

const targetFunc: ITargetFunc<DataType, ResType> = (data) => {
  return kMirror(data.k, data.n);
};

test(testModule, targetFunc);
