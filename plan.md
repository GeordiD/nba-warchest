# Plan: Update RealGM Parser for New Format

## Current Situation Analysis
The script is currently working but not optimally handling the new RealGM format. Key observations:

1. **New format includes color-coded pick counts** (green numbers, gold conditionals, red zeros)
2. **Better HTML structure** with `<p>`, `<strong>`, `<small>` tags for hierarchy
3. **Line breaks separate individual picks** enabling better granular tracking
4. **Current parser strips all HTML** treating everything as plain text, losing the new benefits

## Proposed Solution

### 1. Enhanced Data Structure
- Add `pickCount` field to track the numerical pick counts from colored spans
- Add `individualPicks` array to separately track each pick description
- Replace existing `firstRound`/`secondRound` string approach with the new structure

### 2. Improved HTML Parser (`html-parser.ts`)
- **Extract pick count indicators**: Parse `<span style="color: green/gold/red;">` for numerical summaries
- **Separate individual picks**: Split content by `<p>` tags to track each pick separately
- **Enhanced text cleaning**: Better handling of `<strong>`, `<small>`, `<br />` tags while preserving structure
- **Simplified for new format only**: No need to handle old format complexity

### 3. Enhanced Comparison & Output (`comparator.ts`, `types.ts`)
- **Pick count change detection**: Show when total pick counts change (very valuable!)
- **Individual pick tracking**: When picks are added/removed/modified, show exactly which ones
- **Better diff formatting**: 
  - Highlight pick count changes prominently
  - Show individual pick changes separately from bulk changes
  - Use colors/symbols to distinguish pick types (definite vs conditional)

### 4. Implementation Strategy
- **Phase 1**: Update types and parser to extract new data structure
- **Phase 2**: Enhance comparator to use new granular data for better output
- **Phase 3**: Add specialized formatting for pick count changes and individual pick tracking

## Benefits
- **Better change detection**: Know exactly when pick counts change
- **Granular tracking**: See individual picks added/removed rather than just text diffs
- **Improved readability**: Clearer output showing what actually changed
- **Future-proof**: Ready for any further RealGM format improvements
- **Simplified codebase**: No legacy format support needed

## Files to Modify
- `types.ts` - Enhanced data structures
- `html-parser.ts` - New parsing logic focused on new format
- `comparator.ts` - Enhanced comparison and output formatting