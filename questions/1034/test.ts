import { colorBorder } from '.';
import { ITargetFunc, test, TestModuleInfo } from '../../helper/test-module';
import { listCompare, listCompareBy } from '../../helper/test-module/list-compare';

interface DataType {
  grid: number[][];
  row: number;
  col: number;
  color: number;
}

type ResType = number[][];

const testModule: TestModuleInfo<DataType, ResType> = {
  dataAndValue: [
    {
      data: {
        grid: [
          [1, 1],
          [1, 2],
        ],
        row: 0,
        col: 0,
        color: 3,
      },
      result: [
        [3, 3],
        [3, 2],
      ],
    },
    {
      data: {
        grid: [
          [1, 2, 2],
          [2, 3, 2],
        ],
        row: 0,
        col: 1,
        color: 3,
      },
      result: [
        [1, 3, 3],
        [2, 3, 3],
      ],
    },
    {
      data: {
        grid: [
          [1, 1, 1],
          [1, 1, 1],
          [1, 1, 1],
        ],
        row: 1,
        col: 1,
        color: 2,
      },
      result: [
        [2, 2, 2],
        [2, 1, 2],
        [2, 2, 2],
      ],
    },
    {
      data: {
        grid: [
          [1, 1, 1, 2, 2],
          [2, 1, 2, 2, 2],
          [1, 1, 2, 2, 1],
        ],
        row: 1,
        col: 0,
        color: 1,
      },
      result: [
        [1, 1, 1, 2, 2],
        [1, 1, 2, 2, 2],
        [1, 1, 2, 2, 1],
      ],
    },
  ],
  valueValidator: listCompareBy<number[]>(listCompare),
};

const targetFunc: ITargetFunc<DataType, ResType> = (data) => {
  return colorBorder(data.grid, data.row, data.col, data.color);
};

test(testModule, targetFunc);
