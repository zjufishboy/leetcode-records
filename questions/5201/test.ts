import { wateringPlants } from '.';
import { ITargetFunc, test, TestModuleInfo } from '../../helper/test-module';

interface DataType {
  plants: number[];
  capacity: number;
}

type ResType = number;

const testModule: TestModuleInfo<DataType, ResType> = {
  dataAndValue: [
    {
      data: {
        plants: [2, 2, 3, 3],
        capacity: 5,
      },
      result: 14,
    },
    {
      data: {
        plants: [7, 7, 7, 7, 7, 7, 7],
        capacity: 8,
      },
      result: 49,
    },
    {
      data: {
        plants: [1, 1, 1, 4, 2, 3],
        capacity: 4,
      },
      result: 30,
    },
    {
      data: {
        plants: [3, 2, 4, 2, 1],
        capacity: 6,
      },
      result: 17,
    },
  ],
  valueValidator: (res: ResType, result: ResType) => {
    return res === result;
  },
};

const targetFunc: ITargetFunc<DataType, ResType> = (data) => {
  return wateringPlants(data.plants, data.capacity);
};

test(testModule, targetFunc);
