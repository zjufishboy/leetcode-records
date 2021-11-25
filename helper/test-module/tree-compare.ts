interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

export const TreeCompare = (node?: TreeNode | null, target?: TreeNode | null) => {
  const isBothUndefined = node === undefined && target === undefined;
  if (isBothUndefined) {
    return true;
  }
  const isNodeValSame = node?.val === target?.val;
  if (!isNodeValSame) {
    return false;
  }
  const isLeftSame = TreeCompare(node?.left, target?.left);
  if (!isLeftSame) {
    return false;
  }
  const isRightSame = TreeCompare(node?.right, target?.right);
  if (!isRightSame) {
    return false;
  }
  return true;
};
