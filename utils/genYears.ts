export function genYears(start = 2025, end = 2031): number[] {
  const output = [];

  for (let i = start; i <= end; i++) {
    output.push(i);
  }

  return output;
}
