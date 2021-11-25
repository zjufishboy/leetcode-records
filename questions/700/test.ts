import { searchBST, TreeNode } from '.';
import { ITargetFunc, test, TestModuleInfo } from '../../helper/test-module';
import { TreeCompare } from '../../helper/test-module/tree-compare';

interface DataType {
  root: TreeNode;
  val: number;
}

type ResType = TreeNode | null;

const testModule: TestModuleInfo<DataType, ResType> = {
  dataAndValue: [
    {
      data: {
        root: {
          val: 4,
          left: {
            val: 2,
            left: { val: 1, left: null, right: null },
            right: { val: 3, left: null, right: null },
          },
          right: { val: 7, left: null, right: null },
        },
        val: 2,
      },
      result: {
        val: 2,
        left: { val: 1, left: null, right: null },
        right: { val: 3, left: null, right: null },
      },
    },
    {
      data: {
        root: {
          val: 4,
          left: {
            val: 2,
            left: { val: 1, left: null, right: null },
            right: { val: 3, left: null, right: null },
          },
          right: { val: 7, left: null, right: null },
        },
        val: 5,
      },
      result: null,
    },
  ],
  valueValidator: (res: ResType, result: ResType) => {
    return TreeCompare(res, result);
  },
};

const targetFunc: ITargetFunc<DataType, ResType> = (data) => {
  return searchBST(data.root, data.val);
};

test(testModule, targetFunc);
