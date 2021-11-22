import { maxDistance } from '.';
import { ITargetFunc, test, TestModuleInfo } from '../../helper/test-module';

interface DataType {
  colors: number[];
}

type ResType = number;

const testModule: TestModuleInfo<DataType, ResType> = {
  dataAndValue: [
    {
      data: {
        colors: [1, 1, 1, 6, 1, 1, 1],
      },
      result: 3,
    },
    {
      data: {
        colors: [1, 8, 3, 8, 3],
      },
      result: 4,
    },
    {
      data: {
        colors: [0, 1],
      },
      result: 1,
    },
  ],
  valueValidator: (res: ResType, result: ResType) => {
    return res === result;
  },
};

const targetFunc: ITargetFunc<DataType, ResType> = (data) => {
  return maxDistance(data.colors);
};

test(testModule, targetFunc);
