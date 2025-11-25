export class DummySolver {
  solve(input: number[]): number {
    return input.reduce((a, b) => a + b, 0);
  }

  test(input: number[]): number {
    return this.solve(input);

  }
}

