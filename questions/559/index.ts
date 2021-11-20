// 思路：dfs遍历所有节点，

import { Node } from './test';

/**
 * @param {Node|null} root
 * @return {number}
 */
export const maxDepth = (root: Node | null): number => {
  if (root === null) return 0;
  const depths = root.children.map(maxDepth);
  return findMax(depths) + 1;
};

const findMax = (list: number[]): number => {
  if (list.length === 0) return 0;
  let max = list[0];
  list.forEach((n) => {
    if (n > max) {
      max = n;
    }
  });
  return max;
};
