import { DummySolver } from "@src/solvers/dummy.solver";

describe("DummySolver", () => {
  const solver = new DummySolver(); 

  it("returns correct sum", () => {
    const result = solver.solve([1, 2, 3]);

    expect(result).toBe(6);

  });
});
