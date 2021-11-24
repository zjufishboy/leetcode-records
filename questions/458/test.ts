import { poorPigs } from '.';
import { ITargetFunc, test, TestModuleInfo } from '../../helper/test-module';

interface DataType {
  buckets: number;
  minutesToDie: number;
  minutesToTest: number;
}

type ResType = number;

const testModule: TestModuleInfo<DataType, ResType> = {
  dataAndValue: [
    {
      data: {
        buckets: 1000,
        minutesToDie: 15,
        minutesToTest: 60,
      },
      result: 5,
    },
  ],
  valueValidator: (res: ResType, result: ResType) => {
    return res === result;
  },
};

const targetFunc: ITargetFunc<DataType, ResType> = (data) => {
  return poorPigs(data.buckets, data.minutesToDie, data.minutesToTest);
};

test(testModule, targetFunc);
