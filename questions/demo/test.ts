import { solutionFunc } from '.';
import { ITargetFunc, test, TestModuleInfo } from '../../helper/test-module';

interface DataType {}

type ResType = number;

const testModule: TestModuleInfo<DataType, ResType> = {
  dataAndValue: [
    {
      data: {},
      result: 0,
    },
  ],
  valueValidator: (res: ResType, result: ResType) => {
    return res === result;
  },
};

const targetFunc: ITargetFunc<DataType, ResType> = (data) => {
  return solutionFunc();
};

test(testModule, targetFunc);
