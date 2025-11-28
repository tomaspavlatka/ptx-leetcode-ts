import { lastItem, Node } from "@src/practice/last-items";

describe('last-items', () => {
  const node: Node = {
    data: 22, 
    next: {
      data: 32, 
      next: {
        data: 42,
        next: {
          data: 52,
          next: {
            data: 62
          }
        }
      }
    }
  };

  it('test1', () => {
    expect(lastItem(node, 0)).toStrictEqual([]);
  });

  it('test2', () => {
    expect(lastItem(node, 2)).toStrictEqual([52, 62]);
  });

  it('test3', () => {
    expect(lastItem(node, 5)).toStrictEqual([22, 32, 42, 52, 62]);
  });

  it('test4', () => {
    expect(lastItem(node, 15)).toStrictEqual([22, 32, 42, 52, 62]);
  });
});
