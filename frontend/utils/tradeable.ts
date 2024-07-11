import type { CombinedMeta, PickDetails, PickSummary } from '~/data/PicksByYear';

/*
Algorithm

- Trim to guarenteed picks (we don't care about conditional)
- Any year without any picks, `hasGuarenteedPick=false`
  - Make sure the last draft year is in this list and marked accordingly
- For each year next to a FALSE value:
  - If num picks = 0; Error
  - If num picks = 1; Mark year as TRUE and do not add pick to tradable list
  - If num picks > 1; Mark year as TRUE and n-1 picks are tradable
- For remaining years, make groups
  * We know each group is surrounded by years with a true value
  * We're going to opt for efficiency instead of communicating infinite combinations
  - For groups of an odd number of years:
    - For every odd year:
      - Mark year as FALSE and all picks tradable.
    - For every even year:
      - Mark year as TRUE; If multiple picks, n-1 is tradable.
  - For groups of an even number of years:
    - RoundUp(year/2) picks may be traded from all the picks in these years
*/

export interface PickSummaryMeta {
  id: string,
  year: number,
  summary: PickSummary,
  details: string | PickDetails,
}

export interface TradablePicksGroup {
  total: number;
  picks: PickSummaryMeta[]
}

function isEven(value: number) {
  return value % 2 === 0;
}

function isArrayEven(array: unknown[]) {
  return isEven(array.length);
}

function getPicksFromMeta(metas: CombinedMeta[]): PickSummaryMeta[] {
  return metas
    .flatMap(x => x.roundOne.flatMap(y =>
      Array.isArray(y.summary)
        ? y.summary.flatMap(z => ({
          year: x.year,
          id: y.id,
          summary: z,
          details: y.details,
        }))
        : {
            year: x.year,
            id: y.id,
            summary: y.summary,
            details: y.details,
          }));
}

function getPickDescription(pick: PickSummaryMeta): string {
  if (pick.summary.desc)
    return pick.summary.desc;

  return typeof pick.details === 'string'
    ? pick.details
    : pick.details.headline;
}

function getPickData(pick: PickSummaryMeta): string {
  return `${pick.year} ${getPickDescription(pick)}`;
}

function forEachYear(
  startAt: number,
  callback: (
    year: number,
    isLastYear: boolean,
  ) => void) {
  const endYear = 2031;
  for (let i = startAt; i <= (startAt + 6); i++) {
    callback(i, i === endYear);
  }
}

export function getTradablePicks(
  picks: PickSummaryMeta[],
  options: {
    startYear: number,
    hadPickLastYear: boolean,
  },
) {
  const {
    startYear,
    hadPickLastYear,
  } = options;
  let output: (PickSummaryMeta | TradablePicksGroup)[] = [];

  // Add all conditional picks as tradable
  output = picks.filter(x => x.summary.isConditional);

  // Organize guaranteed picks by year
  const guaranteedPicks = picks.filter(x => !x.summary.isConditional);

  const years: Record<number, boolean> = {
    [startYear - 1]: hadPickLastYear,
  };

  // Mark years as false if no guarenteed picks
  forEachYear(startYear, (year) => {
    if (!guaranteedPicks.filter(x => x.year === year).length)
      years[year] = false;
  })

  const yearGroupings: number[][] = [];

  // For years next to false years
  forEachYear(startYear, (year, isLastYear) => {
    if (years[year] === false) return;

    const isLastYearFalse = years[year - 1] === false;
    const isNextYearFalse = !isLastYear && years[year + 1] === false;

    if (isLastYearFalse || isNextYearFalse) {
      const guarenteedPicksThisYear = guaranteedPicks.filter(x => x.year === year);

      if (guarenteedPicksThisYear.length === 1) {
        years[year] = true;
        // do not add this pick as tradable, as we need to keep it.
      } else if (guarenteedPicksThisYear.length > 1) {
        years[year] = true;
        output.push({
          total: guarenteedPicksThisYear.length - 1,
          picks: guarenteedPicksThisYear,
        })
      } else {
        // no picks this year or last/next year
        // Unreachable code? If no picks this year, it will be false and skipped
        throw Error(`Stepian Rule Broken: [
          ${year - 1}: ${!isLastYearFalse},
          ${year}: 0 picks,
          ${year + 1}: ${!isNextYearFalse},
        ]`)
      }
    } else {
      const lastGroup = yearGroupings.at(-1);

      if (lastGroup?.includes(year - 1)) {
        lastGroup.push(year);
      } else {
        yearGroupings.push([year]);
      }
    }
  });

  // Go through year groupings
  // We know each group has a year with a pick on each end (outside the group)
  yearGroupings.forEach((group) => {
    if (isArrayEven(group)) {
      const guarenteedPicksFromThisGroup = guaranteedPicks.filter(x => group.includes(x.year));
      const numPicksToKeep = group.length / 2;
      output.push({
        picks: guarenteedPicksFromThisGroup,
        total: guarenteedPicksFromThisGroup.length - numPicksToKeep,
      })
    } else {
      group.forEach((year, i) => {
        const guarenteedPicksThisYear = guaranteedPicks
          .filter(x => x.year === year)

        if (isEven(i)) {
          // Since arrays are 0 based, this is the odd years in a group
          output = [
            ...output,
            ...guarenteedPicksThisYear,
          ]
        } else if (guarenteedPicksThisYear.length > 1) {
          output.push({
            picks: guarenteedPicksThisYear,
            total: guarenteedPicksThisYear.length - 1,
          });
        }
      })
    }
  })

  // Calculate total + return
  return output;
}

export function getTradability(metas: CombinedMeta[]) {
  const picks = getPicksFromMeta(metas);
  const tradables = getTradablePicks(picks, {
    startYear: 2025,
    hadPickLastYear: true, // TODO
  });

  return {
    tradable: {
      total: 0,
      picks: tradables,
    },
    swappable: {
      total: 0,
      picks: [],
    },
  }
}
