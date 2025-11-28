import * as fs from 'fs';
import * as path from 'path';

export const readLines = (year: number, day: number, part?: number): string[] => {
  let filePath = `../../../resources/advent-of-code/${year}/day${day}`;
  if (part != undefined) {
    filePath += `.sample${part}`;
  }

  return fs.readFileSync(path.join(__dirname, filePath), 'utf-8')
    .split(/\r?\n/)
    .filter(Boolean);
}
