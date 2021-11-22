import { RangeFreqQuery } from '.';
import { ITargetFunc, test, TestModuleInfo } from '../../helper/test-module';

interface DataType {
  arr: number[];
  params: [number, number, number][];
}

type ResType = number[];

const testModule: TestModuleInfo<DataType, ResType> = {
  dataAndValue: [
    {
      data: {
        arr: [12, 33, 4, 56, 22, 2, 34, 33, 22, 12, 34, 56],
        params: [
          [1, 2, 4],
          [0, 11, 33],
          [0, 0, 1],
          [0, 0, 12],
        ],
      },
      result: [1, 2, 0, 1],
    },
  ],
  valueValidator: (res: ResType, result: ResType) => {
    if (res.length !== result.length) {
      return false;
    }
    for (let i = 0; i < res.length; i++) {
      if (res[i] !== result[i]) {
        return false;
      }
    }
    return true;
  },
};

const targetFunc: ITargetFunc<DataType, ResType> = (data) => {
  const rangeFreqQuery = new RangeFreqQuery(data.arr);
  return data.params.map((p) => rangeFreqQuery.query(p[0], p[1], p[2]));
};

test(testModule, targetFunc);
