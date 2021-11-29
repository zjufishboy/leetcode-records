import { findAnagrams } from '.';
import { ITargetFunc, test, TestModuleInfo } from '../../helper/test-module';
import { listCompare } from '../../helper/test-module/list-compare';

interface DataType {
  s: string;
  p: string;
}

type ResType = number[];

const testModule: TestModuleInfo<DataType, ResType> = {
  dataAndValue: [
    {
      data: {
        s: 'cbaebabacd',
        p: 'abc',
      },
      result: [0, 6],
    },
    {
      data: {
        s: 'abab',
        p: 'ab',
      },
      result: [0, 1, 2],
    },
  ],
  valueValidator: listCompare,
};

const targetFunc: ITargetFunc<DataType, ResType> = (data) => {
  return findAnagrams(data.s, data.p);
};

test(testModule, targetFunc);
