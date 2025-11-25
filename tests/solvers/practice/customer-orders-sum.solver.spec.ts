import { CustomerOrderSumSolver, Order } from "@src/solvers/practice/customer-order-sum.solver";

describe("CustomerOrdersSumSolver", () => {
  var solver = new CustomerOrderSumSolver();

  it("returns correct sum", () => {
    const orders: Order[] = [
        { id: 'o1', customerId: 'c1', amount: 100 },
        { id: 'o2', customerId: 'c2', amount: 50 },
        { id: 'o3', customerId: 'c1', amount: 150 },
    ];

    const sum = solver.countSum(orders);

    expect(sum).toStrictEqual({
      "c1": 250,
      "c2": 50
    });
  });
});
