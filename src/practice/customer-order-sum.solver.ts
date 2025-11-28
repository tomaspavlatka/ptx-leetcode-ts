export interface Order {
    id: string;
    customerId: string;
    amount: number;
}

export class CustomerOrderSumSolver {
  countSum(orders: Order[]): Record<string, number> {
    const totals: Record<string, number> = {};

    orders.forEach(order => {
      if (!totals[order.customerId]) {
        totals[order.customerId] = 0;
      }

      totals[order.customerId] += order.amount;
    });

    return totals;
  }
}

