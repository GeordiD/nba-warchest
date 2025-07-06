import { diffWords } from 'diff';

export function createWordDiff(oldText: string, newText: string): string {
  const changes = diffWords(oldText, newText);
  const result: string[] = ['    '];
  
  for (const change of changes) {
    if (change.added) {
      result.push(`\x1b[32m${change.value}\x1b[0m`);
    } else if (change.removed) {
      result.push(`\x1b[31m${change.value}\x1b[0m`);
    } else {
      result.push(change.value);
    }
  }
  
  return result.join('');
}