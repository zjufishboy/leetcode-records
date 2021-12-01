import { maxPower } from '.';
import { ITargetFunc, test, TestModuleInfo } from '../../helper/test-module';

interface DataType {
  s: string;
}

type ResType = number;

const testModule: TestModuleInfo<DataType, ResType> = {
  dataAndValue: [
    {
      data: {
        s: 'leetcode',
      },
      result: 2,
    },
    {
      data: {
        s: 'abbcccddddeeeeedcba',
      },
      result: 5,
    },
    {
      data: {
        s: 'triplepillooooow',
      },
      result: 5,
    },
    {
      data: {
        s: 'hooraaaaaaaaaaay',
      },
      result: 11,
    },
    {
      data: {
        s: 'tourist',
      },
      result: 1,
    },
    {
      data: {
        s: 'cc',
      },
      result: 2,
    },
  ],
  valueValidator: (res: ResType, result: ResType) => {
    return res === result;
  },
};

const targetFunc: ITargetFunc<DataType, ResType> = (data) => {
  return maxPower(data.s);
};

test(testModule, targetFunc);
