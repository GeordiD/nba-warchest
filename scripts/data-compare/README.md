# NBA Draft Pick Tracker

Automated tool to monitor changes in NBA draft pick data from RealGM.

## Setup

### 1. Discord Webhook (Optional)

To receive Discord notifications when changes are detected:

1. Go to your Discord server settings
2. Navigate to "Integrations" → "Webhooks"
3. Click "Create Webhook"
4. Set a name (e.g., "NBA Draft Tracker") and select a channel
5. Copy the webhook URL
6. In your GitHub repository settings, go to "Secrets and variables" → "Actions"
7. Add a new repository secret named `DISCORD_WEBHOOK_URL` with the webhook URL

### 2. Current Data File

The workflow uses `scripts/data-compare/html/current.html` as the baseline for comparison. To update this file:

1. When you manually update your NBA draft data, replace `current.html` with the latest version
2. Commit the updated file to keep the baseline current

## Usage

### Manual Comparison

```bash
# Compare two local files
npx tsx scripts/data-compare/index.ts old.html new.html

# Compare local file with latest from web
npx tsx scripts/data-compare/index.ts current.html

# Compare and save if changes found
npx tsx scripts/data-compare/index.ts current.html --save
```

### Automated Monitoring

The GitHub Actions workflow runs automatically:
- **Schedule**: 5am and 5pm Central Time daily
- **Manual**: Can be triggered manually from the Actions tab
- **Notifications**: Sends Discord message when changes are detected

## File Structure

```
scripts/data-compare/
├── index.ts          # Main entry point
├── types.ts          # TypeScript interfaces
├── data-fetcher.ts   # HTTP download logic
├── html-parser.ts    # HTML parsing & extraction
├── comparator.ts     # Team comparison logic
├── file-manager.ts   # File save/load operations
├── cli.ts            # Command line interface
├── diff-utils.ts     # Word-level diff utilities
└── html/
    └── current.html  # Baseline data file (update manually)
```

## Output

The tool shows:
- Team-by-team comparison results
- Word-level diffs highlighting exact changes
- Summary of total teams with changes
- Discord notifications (if configured)

Example output:
```
=== Brooklyn Nets ===
  2032 First Round:
    Own; DEN

✅ Comparison complete! 21 teams with changes.
```