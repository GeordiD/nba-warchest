import { diffWords } from 'diff';

const COLORS = {
  GREEN: '\x1b[32m',
  RED: '\x1b[31m',
  RESET: '\x1b[0m',
} as const;

export function createWordDiff(oldText: string, newText: string): string {
  const changes = diffWords(oldText, newText);
  const result = ['    '];

  for (const change of changes) {
    if (change.added) {
      result.push(`${COLORS.GREEN}${change.value}${COLORS.RESET}`);
    } else if (change.removed) {
      result.push(`${COLORS.RED}${change.value}${COLORS.RESET}`);
    } else {
      result.push(change.value);
    }
  }

  return result.join('');
}
