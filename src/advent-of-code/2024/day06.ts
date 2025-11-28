import { readLines } from "../shared/line-reader"

export const part1 = (sample: boolean): number =>  {
  const maze = getMaze(1, sample);

  const locations: Set<string> = new Set();
  locations.add(getLocation(maze.guard.location.row, maze.guard.location.col));

  let next = nextMove(maze.guard, maze.obstacles);
  locations.add(getLocation(next.location.row, next.location.col));
  while (isInMaze(next.location, maze)) {
    next = nextMove(next, maze.obstacles);

    locations.add(getLocation(next.location.row, next.location.col));
  }

  return locations.size - 1;

}

const isObstacle = (location: Location, obstacles: Set<string>): boolean => {
  var key = getLocation(location.row, location.col);

  return obstacles.has(key);
}

export const part2 = (sample: boolean): number =>  {
  return 0;
}

const getLocation = (row: number, col: number): string => {
  return  `${row}-${col}`;
}

const nextDirection = (dir: Direction): Direction => {
  switch (dir) {
    case "up": 
      return "right";
    case "right": 
      return "down";
    case "down": 
      return "left";
    default: 
      return "up";
  }
}

const nextMove = (guard: Guard, obstacles: Set<string>): Guard => {
  const planned = nextPlannedMove(guard, guard.direction);

  return isObstacle(planned.location, obstacles) 
    ? nextPlannedMove(guard, nextDirection(guard.direction))
    : planned;
  
}

const isInMaze = (location: Location, maze: Maze): boolean => {
  return location.row >= 0 
    && location.row < maze.rows 
    && location.col >= 0 
    && location.col < maze.cols;
}

const getMaze = (part: number, sample: boolean): Maze => {
  const puzzle = getPuzzle(part, sample);

  const rows = puzzle.length;
  const obstacles: Set<string> = new Set();
  let guard: Guard;

  for (let row = 0; row < rows; row++) {
    const line = puzzle[row];

    const symbols = line.split("");
    for (let col = 0; col < line.length; col++) {
      const symbol = symbols[col];
      if (symbol == "#") {
        obstacles.add(getLocation(row, col));
      } else if (symbol == "^") {
        guard = {
          direction: "up",
          location: {row, col}
        }
      }

    }
  }

  return {
    rows, 
    cols: puzzle[0].length,
    obstacles,
    guard: guard!
  }
}

const nextPlannedMove = (guard: Guard, direction: Direction): Guard => {
  switch (direction) {
    case "up": 
      return {direction: "up", location: {row: guard.location.row - 1, col: guard.location.col }}
    case "right": 
      return {direction: "right", location: {row: guard.location.row, col: guard.location.col + 1 }}
    case "down": 
      return {direction: "down", location: {row: guard.location.row + 1, col: guard.location.col }}
    default: 
      return {direction: "left", location: {row: guard.location.row, col: guard.location.col - 1 }}
  }
}

const getPuzzle = (part: number, sample: boolean): string[] => {
  return sample ? readLines(2024, 6, part) : readLines(2024, 6);
}

type Direction = "up" | "down" | "left" | "right";

interface Maze {
  cols: number, 
  rows: number, 
  obstacles: Set<string>,
  guard: Guard
}

interface Location {
  row: number,
  col: number
}

interface Guard {
  direction: Direction,
  location: Location
}

