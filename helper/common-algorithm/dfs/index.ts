interface NodeLike {
  children: NodeLike[];
}

// 单纯对节点做操作
const dfs = (node: NodeLike, func: (target: NodeLike) => void) => {
  func(node);
  node.children.forEach((node) => dfs(node, func));
};

// 对节点进行计算，且计算结果依赖于下级节点的返回值
const dfsWithValue = <T>(node: NodeLike, resHandler: (node: NodeLike, value: T[]) => T): T => {
  const valueList = node.children.map((node) => dfsWithValue(node, resHandler));
  return resHandler(node, valueList);
};
