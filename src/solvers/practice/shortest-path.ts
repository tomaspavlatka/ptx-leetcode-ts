import { TreeNode, TreeNodeDepth } from "@src/shared/tree-node";

// Time: O(n)
// Space: O(n)
export const shortestPath = (node: TreeNode): number => {
  const queue: TreeNodeDepth[] = [];
  let head = 0;

  queue.push({node, depth: 0});
  while(head < queue.length) { // O(n)
    const val = queue[head++];
    if (val!.node.val === 3) {
      return val!.depth;
    }

    if (val!.node.right) {
      queue.push({node: val!.node.right, depth: val!.depth + 1});
    }

    if (val!.node.left) {
      queue.push({node: val!.node.left, depth: val!.depth + 1});
    }
  }

  return -1;
}
