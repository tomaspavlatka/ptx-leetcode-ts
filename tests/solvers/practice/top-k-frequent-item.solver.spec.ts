import { TopKFrequentItemsSolver } from "@src/solvers/practice/top-k-frequent-items.solver";

describe("TopKFrequentItemSolver", () => {
  const solver = new TopKFrequentItemsSolver();

  it("returns second frequent item", () => {
    const items = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

    const result = solver.solve(items, 2);

    expect(result).toBe('banana');
  });

  it("returns top frequent item", () => {
    const items = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

    const result = solver.solve(items, 1);

    expect(result).toBe('apple');
  });
});
