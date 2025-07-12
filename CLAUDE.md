# NBA War Chest

This is a website detailing the draft picks each NBA team owns going forward. We source this data from RealGM and present it in an easy to understand way.

## Development Instructions

- Always use TypeScript. We want clean, type-safe code
- Prioritize cohesion. We want to build from many low complexity, high cohesion functions/files rather than having long functions and files.
- Use esmodules (import/export) syntax, not commonjs (require)
- Be sure to lint and typecheck after you write code to make sure it matches our standards
  - Lint: `pnpm run lint --fix`
  - Type Check: `pnpm run typecheck`

## Architecture Overview

### Tech Stack
- Nuxt
- Vue3
- TypeScript

### Folder Structure

- `/data` - Where we store each team's pick information
  - `/data/teams/*.ts` - Each file corresponds to a NBA team