import { findRelativeRanks } from '.';
import { ITargetFunc, test, TestModuleInfo } from '../../helper/test-module';
import { listCompare } from '../../helper/test-module/list-compare';

interface DataType {
  score: number[];
}

type ResType = string[];

const testModule: TestModuleInfo<DataType, ResType> = {
  dataAndValue: [
    {
      data: {
        score: [5, 4, 3, 2, 1],
      },
      result: ['Gold Medal', 'Silver Medal', 'Bronze Medal', '4', '5'],
    },
    {
      data: {
        score: [10, 3, 8, 9, 4],
      },
      result: ['Gold Medal', '5', 'Bronze Medal', 'Silver Medal', '4'],
    },
  ],
  valueValidator: listCompare,
};

const targetFunc: ITargetFunc<DataType, ResType> = (data) => {
  return findRelativeRanks(data.score);
};

test(testModule, targetFunc);
