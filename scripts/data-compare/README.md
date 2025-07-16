# NBA Draft Pick Tracker

Automated tool to monitor changes in NBA draft pick data from RealGM.

## Overview

This script parses RealGM's NBA draft pick HTML data and compares it with previous versions to detect changes. It tracks both pick counts (definite/conditional) and individual pick details, providing clear visual output with background-colored indicators.

## HTML Format

The script handles RealGM's HTML structure where:
- Pick counts are in colored spans: green (definite), gold (conditional), red (none)
- Individual picks are separated by paragraph tags (`<p>`)
- Empty cells indicate no picks for that year

## Data Structure

The script processes data into:
- **Pick Counts**: `{ definite: number, conditional: number, total: number }`
- **Individual Picks**: Array of pick description strings
- **Teams**: Collection of team data with years and pick information

## Output Format

When changes are detected, the script displays:
- **📊 Pick Counts**: Background-colored indicators showing count changes
  - Green background: definite picks
  - Yellow background: conditional picks  
  - Red background: no picks
- **🔄 Modified**: Word-level diff showing content changes
- **Summary**: Total teams with changes (used by GitHub Actions)

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
├── types.ts          # TypeScript interfaces with PickData structure
├── data-fetcher.ts   # HTTP download logic
├── html-parser.ts    # HTML parsing with color-coded pick extraction
├── comparator.ts     # Team comparison with pick count & content analysis
├── file-manager.ts   # File save/load operations
├── cli.ts            # Command line interface
├── diff-utils.ts     # Word-level diff utilities
└── html/
    └── current.html  # Baseline data file (update manually)
```

## GitHub Actions Integration

The script maintains compatibility with the automated workflow by:
- Exiting with code 1 when changes are found
- Outputting the final summary line: "X teams with changes"
- The workflow extracts the team count and sends Discord notifications

## Example Output

```
=== Brooklyn Nets ===
📊 Pick Counts: 🟢 2  → 🟡 1  + 🟢 1 
🔄 Modified: Own; [+conditional DEN,] Own

✅ Comparison complete! 21 teams with changes.
```