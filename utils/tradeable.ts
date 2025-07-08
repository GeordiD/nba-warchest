import type { PickDetails, PickSummary, YearMeta } from '~/data/PickMetaTypes';
import type { TeamMeta } from '~/data/TeamMeta';
import { teamsWithoutFirstLastYear } from '~/data/teamsWithoutFirstLastYear';

/*
Algorithm

- Trim to guaranteed picks (we don't care about conditional)
- Any year without any picks, `hasGuaranteedPick=false`
  - Make sure the last draft year is in this list and marked accordingly
- For each year next to a FALSE value:
  - If num picks = 0; Error
  - If num picks = 1; Mark year as TRUE and do not add pick to tradeable list
  - If num picks > 1; Mark year as TRUE and n-1 picks are tradeable
- For remaining years, make groups
  * We know each group is surrounded by years with a true value
  * We're going to opt for efficiency instead of communicating infinite combinations
  - For groups of an odd number of years:
    - For every odd year:
      - Mark year as FALSE and all picks tradeable.
    - For every even year:
      - Mark year as TRUE; If multiple picks, n-1 is tradeable.
  - For groups of an even number of years:
    - RoundUp(year/2) picks may be traded from all the picks in these years
*/

export interface PickSummaryMeta {
  year: number,
  summary: PickSummary,
  details: string | PickDetails,
}

export interface TradeablePicksGroup<T = PickSummaryMeta> {
  total: number;
  picks: T[]
}

export interface RichTeamMeta extends TeamMeta {
  tradeInfo: ReturnType<typeof getTradeability>;
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
          summary: z,
          details: y.details,
        }))
        : {
            year: x.year,
            summary: y.summary,
            details: y.details,
          }));
}

export function getPickDescription(pick: Omit<PickSummaryMeta, 'year'>): string {
  if (pick.summary.desc)
    return pick.summary.desc;

  return typeof pick.details === 'string'
    ? pick.details
    : pick.details.headline;
}

function getPickData(pick: PickSummaryMeta): string {
  return `${pick.year} ${getPickDescription(pick)}`;
}

function isTradeablePicksGroup(value: unknown): value is TradeablePicksGroup {
  return (value as TradeablePicksGroup).total !== undefined
}

function isConsideredTradedAway(pick: { summary: PickSummary }) {
  return pick.summary.isTradedAway
    || (pick.summary.isConditional && pick.summary.isOwn);
}

function stringifyPickGroups(input: PickSummaryMeta | TradeablePicksGroup): (string | TradeablePicksGroup<string>) {
  if (isTradeablePicksGroup(input)) {
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
  const endYear = 2032;
  for (let i = startAt; i <= (startAt + 6); i++) {
    callback(i, i === endYear);
  }
}

export function getTradeablePicks(
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
  let output: (PickSummaryMeta | TradeablePicksGroup)[] = [];

  // NOTE: I am going to leave picks that have ifNotConveyed in this algo
  // If the pick has conveyance protocols, it's still tradeable, it would just have to be conditional

  // Add all conditional picks as tradeable
  output = picks.filter(x =>
    x.summary.isConditional
    && !isConsideredTradedAway(x)
    && !x.summary.frozen, // I'm not sure this would ever happen, but just in case
  );

  // Organize guaranteed picks by year
  const guaranteedPicks = picks.filter(x => !x.summary.isConditional && !isConsideredTradedAway(x));

  const years: Record<number, boolean> = {
    [startYear - 1]: hadPickLastYear,
  };

  // Mark years as false if no guaranteed picks
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
      const guaranteedPicksThisYear = guaranteedPicks.filter(x => x.year === year);

      if (guaranteedPicksThisYear.length === 1) {
        years[year] = true;
        // do not add this pick as tradeable, as we need to keep it.
      } else if (guaranteedPicksThisYear.length > 1) {
        years[year] = true;
        output.push({
          total: guaranteedPicksThisYear.length - 1,
          picks: guaranteedPicksThisYear,
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
      const guaranteedPicksFromThisGroup = guaranteedPicks.filter(x => group.includes(x.year));
      const frozenPicksInGroup = guaranteedPicksFromThisGroup.filter(x => x.summary.frozen);

      if (frozenPicksInGroup.length === 1) {
        const frozenPickYear = frozenPicksInGroup[0].year;
        const place = group.indexOf(frozenPickYear);
        const chosenPicks = guaranteedPicksFromThisGroup.filter(x => isEven(place) !== isEven(group.indexOf(x.year)))

        output.push(...chosenPicks);
      } else {
        if (frozenPicksInGroup.length > 1) {
          console.error('We did not expect this; We need to update this logic');
          // just do the normal thing and treat it like a tradeable pick
        }

        const numPicksToKeep = group.length / 2;

        output.push({
          picks: guaranteedPicksFromThisGroup,
          total: guaranteedPicksFromThisGroup.length - numPicksToKeep,
        })
      }
    } else {
      group.forEach((year, i) => {
        const guaranteedPicksThisYear = guaranteedPicks
          .filter(x => x.year === year)
          .filter(x => !x.summary.frozen) // can't trade frozen picks

        if (isEven(i)) {
          // Since arrays are 0 based, this is the odd years in a group
          output = [
            ...output,
            ...guaranteedPicksThisYear,
          ]
        } else if (guaranteedPicksThisYear.length > 1) {
          output.push({
            picks: guaranteedPicksThisYear,
            total: guaranteedPicksThisYear.length - 1,
          });
        }
      })
    }
  })

  // Calculate total + return
  return output;
}

function getSwappablePicks(allPicks: PickSummaryMeta[], tradeablePicks: (PickSummaryMeta | TradeablePicksGroup)[]) {
  const flatTradeablePicks = tradeablePicks.flatMap(x => isTradeablePicksGroup(x) ? x.picks : x);
  const isSwappable = (pick: PickSummaryMeta) => pick.summary.swapType !== 'unfavorable'
    && pick.summary.swapType !== 'mixed'
    && !isConsideredTradedAway(pick)

  // if a pick is not tradeable, it could be swappable
  const untradeableSwaps = allPicks
    // find picks not marked as potentially tradeable
    .filter(x => !flatTradeablePicks
      .map(y => getPickData(y))
      .includes(getPickData(x)))
    .filter(x => isSwappable(x))

  // Additionally, any picks left out of a pick group would be swappable
  const groupedSwaps = tradeablePicks
    .filter(x => isTradeablePicksGroup(x))
    .map(x => x as TradeablePicksGroup)
    .map(x => ({
      ...x,
      // the inverse of what is tradeable is swappable
      total: x.picks.length - x.total,
    }));

  return [
    ...untradeableSwaps,
    ...groupedSwaps,
  ];
}

function getTotal(input: (PickSummaryMeta | TradeablePicksGroup<PickSummaryMeta>)[]): number {
  return input.reduce((prev, curr) => prev + (isTradeablePicksGroup(curr) ? curr.total : 1), 0);
}

function getOwnedObject(input: PickSummary[]) {
  return {
    swaps: input.filter(x => x.swapType && x.swapType !== 'unfavorable'),
    ownDestiny: input.filter(x => x.isOwn),
  }
}

export function getTradeability(meta: TeamMeta) {
  const picks = getPicksFromMeta(meta.picks);
  const tradeables = getTradeablePicks(picks, {
    startYear: 2026,
    hadPickLastYear: !teamsWithoutFirstLastYear.includes(meta.info.abbr),
  });
  const swappables = getSwappablePicks(picks, tradeables);

  const allFirsts = meta.picks
    .flatMap(x => x.roundOne.flatMap(y => y.summary))
    .filter(x => !isConsideredTradedAway({ summary: x }))

  const allSeconds = meta.picks
    .flatMap(x => x.roundTwo.flatMap(y => y.summary))
    .filter(x => !x.isTradedAway && !(x.isOwn && x.isConditional))

  return {
    firsts: {
      picks: allFirsts,
      total: allFirsts.length,
      owned: getOwnedObject(allFirsts),
      tradeable: {
        total: getTotal(tradeables),
        asMeta: tradeables,
        asStrings: tradeables.map(x => stringifyPickGroups(x)),
      },
      swappable: {
        total: getTotal(swappables),
        asMetas: swappables,
        asStrings: swappables.map(x => stringifyPickGroups(x)),
      },
    },
    seconds: {
      owned: getOwnedObject(allSeconds),
      picks: allSeconds,
      total: allSeconds.length,
    },
  }
}
