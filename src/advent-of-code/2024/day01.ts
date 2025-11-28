import { readLines } from "../shared/line-reader"

export const part1 = (sample: boolean): number =>  {

  const left: number[] = [];
  const right: number[] = [];

  const puzzle = getPuzzle(1, sample);
  for (const line of puzzle) {
    const numbers = line.match(/\d+/g)!.map(Number);

    left.push(numbers[0]);
    right.push(numbers[1]);

  }

  left.sort();
  right.sort();

  let sum = 0;
  for (const idx in left) {
    sum += Math.abs(left[idx] - right[idx]);
  }

  return sum;
}

export const part2 = (sample: boolean): number =>  {
  const left: number[] = [];
  const occurences: Map<number, number> = new Map();

  const puzzle = getPuzzle(1, sample);

  for (const line of puzzle) {
    const numbers = line.match(/\d+/g)!.map(Number);
    left.push(numbers[0]);
    occurences.set(numbers[1], (occurences.get(numbers[1]) || 0) + 1);
  }

  let sum = 0;
  for (const number of left) {
    sum += number * (occurences.get(number) || 0);
  }


  return sum;
}

const getPuzzle = (part: number, sample: boolean): string[] => {
  return sample ? readLines(2024, 1, part) : readLines(2024, 1);
}

