import { buddyStrings } from '.';
import { ITargetFunc, test, TestModuleInfo } from '../../helper/test-module';

interface DataType {
  s: string;
  goal: string;
}

type ResType = boolean;

const testModule: TestModuleInfo<DataType, ResType> = {
  dataAndValue: [
    {
      data: {
        s: 'ba',
        goal: 'ab',
      },
      result: true,
    },
    {
      data: {
        s: 'ab',
        goal: 'ab',
      },
      result: false,
    },
    {
      data: {
        s: 'ab',
        goal: 'ab',
      },
      result: false,
    },
    {
      data: {
        s: 'aa',
        goal: 'aa',
      },
      result: true,
    },
    {
      data: {
        s: 'aaaaaaabc',
        goal: 'aaaaaaacb',
      },
      result: true,
    },
    {
      data: {
        s: 'abcaa',
        goal: 'abcbb',
      },
      result: false,
    },
  ],
  valueValidator: (res: ResType, result: ResType) => {
    return res === result;
  },
};

const targetFunc: ITargetFunc<DataType, ResType> = (data) => {
  return buddyStrings(data.s, data.goal);
};

test(testModule, targetFunc);
