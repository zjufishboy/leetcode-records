/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

export interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
export const searchBST = (root: TreeNode, val: number): TreeNode | null => {
  let curNode: TreeNode | null = root;
  while (1) {
    // console.log('curNode:', curNode);
    if (curNode === null) {
      return null;
    }
    if (val < curNode.val) {
      curNode = curNode.left;
    } else if (val > curNode.val) {
      curNode = curNode.right;
    } else {
      return curNode;
    }
  }
  return null;
};
