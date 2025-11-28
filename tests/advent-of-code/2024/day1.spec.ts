import { part1, part2 } from "@src/advent-of-code/2024/day01";

describe('day1', () => {
  it('part 1 - sample', () => {
    expect(part1(true)).toBe(11);
  });

  it('part 1', () => {
    expect(part1(false)).toBe(1320851);
  });

  it('part 2 - sample', () => {
    expect(part2(true)).toBe(31);
  });

  it('part 2', () => {
    expect(part2(false)).toBe(26859182);
  });
});
