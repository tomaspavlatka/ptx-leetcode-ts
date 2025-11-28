export class TopKFrequentItemsSolver {
  solve(items: string[], top: number): string {

    const frequencies = items.reduce((m, item) => {
      m.set(item, (m.get(item) || 0) + 1);
      return m;
    }, new Map<string, number>());

    const groups = [...frequencies.entries()].reduce((m, frequency) => {
      var group = m.get(frequency[1]) || [];
      group.push(frequency[0]);
      m.set(frequency[1], group);
      return m;
    }, new Map<number, string[] >());

    const values = [...groups.keys()].sort().reverse();

    if (top > groups.size) {
      return "n/a";
    }

    const topKey = values[top-1];

    const winners =  groups.get(topKey);

    return winners == undefined ? "n/a" : winners[0];
     
  }
}
