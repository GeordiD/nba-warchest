import type { YearMeta, PickDetails, PickSummary } from '~/data/PickMetaTypes';

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

export interface TradablePicksGroup<T = PickSummaryMeta> {
  total: number;
  picks: T[]
}

function isEven(value: number) {
  return value % 2 === 0;
}

function isArrayEven(array: unknown[]) {
  return isEven(array.length);
}

function getPicksFromMeta(metas: YearMeta[]): PickSummaryMeta[] {
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

function isTradablePicksGroup(value: unknown): value is TradablePicksGroup {
  return (value as TradablePicksGroup).total !== undefined
}

function isConsideredTradedAway(pick: PickSummaryMeta) {
  return pick.summary.isTradedAway
    || (pick.summary.isConditional && pick.summary.isOwn)
}

function stringifyPickGroups(input: PickSummaryMeta | TradablePicksGroup): (string | TradablePicksGroup<string>) {
  if (isTradablePicksGroup(input)) {
    return {
      total: input.total,
      picks: input.picks.map(x => getPickData(x)),
    }
  } else {
    return getPickData(input as PickSummaryMeta);
  }
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

  // NOTE: I am going to leave picks that have ifNotConveyed in this algo
  // If the pick has conveyance protocols, it's still tradable, it would just have to be conditional

  // Add all conditional picks as tradable
  output = picks.filter(x =>
    x.summary.isConditional && !isConsideredTradedAway(x),
  );

  // Organize guaranteed picks by year
  const guaranteedPicks = picks.filter(x => !x.summary.isConditional && !isConsideredTradedAway(x));

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

function getSwappablePicks(allPicks: PickSummaryMeta[], tradablePicks: (PickSummaryMeta | TradablePicksGroup)[]) {
  const flatTradablePicks = tradablePicks.flatMap(x => isTradablePicksGroup(x) ? x.picks : x);
  const isSwappable = (pick: PickSummaryMeta) => pick.summary.swapType !== 'unfavorable'
    && pick.summary.swapType !== 'mixed'
    && !isConsideredTradedAway(pick)

  // if a pick is not tradable, it could be swappable
  const untradableSwaps = allPicks
    // find picks not marked as potentially tradable
    .filter(x => !flatTradablePicks
      .map(y => getPickData(y))
      .includes(getPickData(x)))
    .filter(x => isSwappable(x))

  // Additionally, any picks left out of a pick group would be swappable
  const groupedSwaps = tradablePicks
    .filter(x => isTradablePicksGroup(x))
    .map(x => x as TradablePicksGroup)
    .map(x => ({
      ...x,
      // the inverse of what is tradable is swappable
      total: x.picks.length - x.total,
    }));

  return [
    ...untradableSwaps,
    ...groupedSwaps,
  ];
}

function getTotal(input: (PickSummaryMeta | TradablePicksGroup<PickSummaryMeta>)[]): number {
  return input.reduce((prev, curr) => prev + (isTradablePicksGroup(curr) ? curr.total : 1), 0);
}

export function getTradability(metas: YearMeta[]) {
  const picks = getPicksFromMeta(metas);
  const tradables = getTradablePicks(picks, {
    startYear: 2025,
    hadPickLastYear: true, // TODO
  });
  const swappables = getSwappablePicks(picks, tradables);

  return {
    tradable: {
      total: getTotal(tradables),
      asMeta: tradables,
      asStrings: tradables.map(x => stringifyPickGroups(x)),
    },
    swappable: {
      total: getTotal(swappables),
      asMetas: swappables,
      asStrings: swappables.map(x => stringifyPickGroups(x)),
    },
  }
}
