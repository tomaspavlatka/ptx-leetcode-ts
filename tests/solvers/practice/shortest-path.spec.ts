import { TreeNode } from "@src/shared/tree-node";
import { shortestPath } from "@src/solvers/practice/shortest-path";

describe('shortest-path', () => {
  it('test1', () => {
    const node: TreeNode = {
      val: 1
    };

    expect(shortestPath(node)).toBe(-1);
  });

  it('test2', () => {
    const node: TreeNode = {
      val: 1, 
      left: {
        val: 2,
        left: {
          val: 3
        },
      },
      right: {
        val: 4, 
        left: {
          val: 5, 
          left: {
            val: 6, 
            left: {
              val: 7, 
              left: {
                val: 3
              }
            }
          }
        }
      }
    };

    expect(shortestPath(node)).toBe(2);
  });
});
