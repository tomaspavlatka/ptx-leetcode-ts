export const lastItem = (node: Node, n: number): number[] => {
  if (n < 1) {
    return [];
  }

  const values: number[] = [];
  let payload: Node | undefined = node;
  while(payload) {
    values.push(payload.data);

    payload = payload.next;
  }

  return values.slice(-1 * n);
}

export interface Node {
  data: number
  next?: Node
}
