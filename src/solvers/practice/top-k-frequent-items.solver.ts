export class TopKFrequentItemsSolver {
  solve(items: string[], top: number): string {

    const frequencies = items.reduce((m, item) => {
      m.set(item, (m.get(item) || 0) + 1);
      return m;
    }, new Map<string, number>());

    const groups = [...frequencies.entries()].reduce((m, frequency) => {
      m.
      m.set(item, (m.get(item) || 0) + 1);
      return m;
    }, new Map<number, string[] >());

    const groups = new Map<number, string[]>();
    [...frequencies.entries()].forEach(entry => {
      let group = groups.get(entry[1]) || [];
      group.push(entry[0]);

      groups.set(entry[1], group);
    });

    const values = [...groups.keys()].sort().reverse();


    if (top > groups.size) {
      return "n/a";
    }

    const topKey = values[top-1];

    const winners =  groups.get(topKey);

    return winners == undefined ? "n/a" : winners[0];
     
  }
}
