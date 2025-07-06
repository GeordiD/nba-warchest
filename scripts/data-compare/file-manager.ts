import { writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

export function saveDownloadedFile(html: string): string {
  const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, '-');
  const filename = createOutputPath(`new-${timestamp}.html`);

  writeFileSync(filename, html, 'utf-8');
  return filename;
}

function createOutputPath(filename: string): string {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  return join(__dirname, 'html', filename);
}

export function shouldSaveFile(hasChanges: boolean, saveFlag: boolean): boolean {
  const isGitHubActions = !!process.env.GITHUB_ACTIONS;
  return hasChanges && (saveFlag || isGitHubActions);
}

export function logSaveResult(hasChanges: boolean, saveFlag: boolean, filename?: string): void {
  if (!hasChanges) return;

  if (filename) {
    console.log(`\n💾 Changes detected! Saved new data to: ${filename}`);
  } else if (!saveFlag) {
    console.log(`\n📝 Changes detected! Use --save flag to save the downloaded file.`);
  }
}
