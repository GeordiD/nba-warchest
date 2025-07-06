import { parseArgs } from 'util';
import type { ComparisonOptions } from './types.js';

export function parseCommandLineArgs(): { options: ComparisonOptions; files: string[] } {
  const { values, positionals } = parseArgs({
    args: process.argv.slice(2),
    options: {
      help: { type: 'boolean', short: 'h' },
      save: { type: 'boolean', short: 's' },
    },
    allowPositionals: true,
  });

  return {
    options: {
      help: !!values.help,
      save: !!values.save,
    },
    files: positionals,
  };
}

export function showHelp(): void {
  console.log(`
Usage: node index.ts <old-file> [new-file] [options]

Compare NBA draft pick HTML files and show differences.

Arguments:
  old-file    Path to the older HTML file
  new-file    Path to the newer HTML file (optional)
              If not provided, downloads latest data from RealGM

Options:
  -h, --help  Show this help message
  -s, --save  Save downloaded file when changes are detected

Examples:
  node index.ts old.html new.html     # Compare two local files
  node index.ts old.html              # Compare local file with latest from web
  node index.ts old.html --save       # Compare and save if changes found
`);
}

export function exitForGitHubActions(hasChanges: boolean): void {
  if (process.env.GITHUB_ACTIONS && hasChanges) {
    process.exit(1);
  }
}
