import { maxDepth } from '.';
import { ITargetFunc, test, TestModuleInfo } from '../../helper/test-module';

export class Node {
  val: number;
  children: Node[];
  constructor(num: number, children: Node[]) {
    this.val = num;
    this.children = children;
  }
}

interface DataType {
  root: Node | null;
}
type ResType = number;

const testModule: TestModuleInfo<DataType, ResType> = {
  dataAndValue: [
    {
      data: {
        root: {
          val: 1,
          children: [
            {
              val: 3,
              children: [
                { val: 5, children: [] },
                { val: 6, children: [] },
              ],
            },
            {
              val: 2,
              children: [],
            },
            {
              val: 4,
              children: [],
            },
          ],
        },
      },
      result: 3,
    },
    {
      data: {
        root: {
          val: 1,
          children: [
            { val: 2, children: [] },
            {
              val: 3,
              children: [
                { val: 6, children: [] },
                { val: 7, children: [{ val: 11, children: [{ val: 14, children: [] }] }] },
              ],
            },
            { val: 4, children: [{ val: 8, children: [{ val: 12, children: [] }] }] },
            {
              val: 5,
              children: [
                { val: 9, children: [{ val: 13, children: [] }] },
                { val: 10, children: [] },
              ],
            },
          ],
        },
      },
      result: 5,
    },
    {
      data: {
        root: null,
      },
      result: 0,
    },
  ],
  valueValidator: (res: ResType, result: ResType) => {
    return res === result;
  },
};

const targetFunc: ITargetFunc<DataType, ResType> = (data) => {
  return maxDepth(data.root);
};

test(testModule, targetFunc);
