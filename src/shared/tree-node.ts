export interface TreeNode {
  val: number;
  left?: TreeNode;
  right?: TreeNode;
}

export interface TreeNodeDepth {
  node: TreeNode
  depth: number
}
