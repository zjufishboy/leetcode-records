import { originalDigits } from '.';
import { ITargetFunc, test, TestModuleInfo } from '../../helper/test-module';

interface DataType {
  s: string;
}

type ResType = string;

const testModule: TestModuleInfo<DataType, ResType> = {
  dataAndValue: [
    {
      data: {
        s: 'owoztneoer',
      },
      result: '012',
    },
    {
      data: {
        s: 'fviefuro',
      },
      result: '45',
    },
    {
      data: {
        s: 'onetwothreefourfivesixseveneightnine',
      },
      result: '123456789',
    },
    {
      data: {
        s: 'oneoneonenineninenine',
      },
      result: '111999',
    },
  ],
  valueValidator: (res: ResType, result: ResType) => {
    return res === result;
  },
};

const targetFunc: ITargetFunc<DataType, ResType> = (data) => {
  return originalDigits(data.s);
};

test(testModule, targetFunc);
