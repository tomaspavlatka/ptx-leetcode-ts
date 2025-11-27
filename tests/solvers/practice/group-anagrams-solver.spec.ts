import { groupAnagrams } from "@src/solvers/practice/group-anagrams.solver";

describe('group-anagrams', () => {
  it('provide correct values when array is empty', () => {
    const data: string[] = [];

    const result = groupAnagrams(data);

    expect(result).toStrictEqual([]);
  });

  it('provide correct values when array contain only one data', () => {
    const data: string[] = ['test'];

    const result = groupAnagrams(data);

    expect(result).toStrictEqual([['test']]);
  });
});
