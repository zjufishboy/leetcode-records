import { countVowelSubstrings } from '.';
import { ITargetFunc, test, TestModuleInfo } from '../../helper/test-module';

interface DataType {
  word: string;
}
type ResType = number;

const testModule: TestModuleInfo<DataType, ResType> = {
  dataAndValue: [
    {
      data: {
        word: 'aeiouu',
      },
      result: 2,
    },
    {
      data: {
        word: 'unicornarihan',
      },
      result: 0,
    },
    {
      data: {
        word: 'cuaieuouac',
      },
      result: 7,
    },
  ],
  valueValidator: (res: ResType, result: ResType) => {
    return res === result;
  },
};

const targetFunc: ITargetFunc<DataType, ResType> = (data) => {
  return countVowelSubstrings(data.word);
};

test(testModule, targetFunc);
