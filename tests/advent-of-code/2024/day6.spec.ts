import { part1, part2 } from "@src/advent-of-code/2024/day06";

describe('day1', () => {
  it('part 1 - sample', () => {
    expect(part1(true)).toBe(41);
  });

  it('part 1', () => {
    expect(part1(false)).toBe(5242);
  });

  it.skip('part 2 - sample', () => {
    expect(part2(true)).toBe(6);
  });

  it.skip('part 2', () => {
    expect(part2(false)).toBe(1424);
  });
});
