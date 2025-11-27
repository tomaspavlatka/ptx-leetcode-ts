import { FlattenNestedObjectsSolver } from "@src/solvers/practice/flatten-nested-objects.solver";

describe("FlattenNestedObjects", () => {
  const solver = new FlattenNestedObjectsSolver();

  it("returns correct results", () => {
    const obj = {
      user: {name: "Alice", age: 30},
      meta: {lastLogin: "2025-11-27", active: true}
    };

    const result = solver.flatten(obj);

    expect(result).toStrictEqual({
      "user.name": "Alice", 
      "user.age": 30, 
      "meta.lastLogin": "2025-11-27", 
      "meta.active": true
    });
  });
});
