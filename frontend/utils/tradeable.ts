import type { CombinedMeta, PickSummary } from '~/data/PicksByYear';

export interface PickSummaryMeta {
  id: string,
  year: number,
  summary: PickSummary,
}

export interface TradablePicksResults {
  tradableIds: string[][],
  hasPickThisYear: boolean,
}

function getPicksFromMeta(metas: CombinedMeta[]): PickSummaryMeta[] {
  return metas
    .flatMap(x => x.roundOne.flatMap(y =>
      Array.isArray(y.summary)
        ? y.summary.flatMap(z => ({
          year: x.year,
          id: y.id,
          summary: z,
        }))
        : {
            year: x.year,
            id: y.id,
            summary: y.summary,
          }));
}

function recurseThroughPicks(props: {
  year: number,
  allPicksByYear: Record<number, PickSummaryMeta[]>,
  outcome: Record<number, TradablePicksResults>
  mustHaveGuarenteed: boolean
}): Record<number, TradablePicksResults> {
  const {
    year,
    outcome,
    allPicksByYear,
    mustHaveGuarenteed,
  } = props;

  // base case
  if (year === 2032) return outcome;

  const picks = allPicksByYear[year];
  const hasGuarenteedPickThisYear = picks.some(x => !x.summary.isConditional);

  if (mustHaveGuarenteed || !outcome[year - 1]?.hasPickThisYear) {
    if (hasGuarenteedPickThisYear) {
      const conditionalPicks = picks.filter(x => x.summary.isConditional);
      const guarenteedPicks = picks.filter(x => !x.summary.isConditional);

      if (guarenteedPicks.length > 1) {
        outcome[year] = {
          tradableIds: [
            ...conditionalPicks.map(x => [x.id]),
            guarenteedPicks.map(y => y.id),
          ],
          hasPickThisYear: true,
        }
      } else {
        outcome[year] = {
          tradableIds: [
            ...conditionalPicks.map(x => [x.id]),
          ],
          hasPickThisYear: true,
        }
      }
    } else {
      if (mustHaveGuarenteed) {
        throw Error(`Received must have guarenteed, but not guarenteed picks in ${year}`);
      }

      if (!outcome[year - 1]) {
        throw Error('Trying to recurse backwards but nothing in last year. somethings wrong');
      }

      recurseThroughPicks({
        ...props,
        year: year - 1,
        mustHaveGuarenteed: true,
      });
    }
  } else {
    outcome[year] = {
      tradableIds: picks.map(x => [x.id]),
      hasPickThisYear: false,
    }
  }

  return recurseThroughPicks({
    ...props,
    year: year + 1,
    mustHaveGuarenteed: false,
  });
}

function getTradableGroups(picks: PickSummaryMeta[]) {
  const byYear = picks.reduce((prev, curr) => {
    if (!Object.keys(prev).includes(curr.year.toString()))
      prev[curr.year] = [];

    prev[curr.year].push(curr);

    return prev;
  }, {} as Record<number, PickSummaryMeta[]>);

  const hadPickInLastYearsDraft = true;
  const lastDraft = 2024;
  const outcome = recurseThroughPicks({
    year: lastDraft + 1,
    allPicksByYear: byYear,
    outcome: { [lastDraft]: { tradableIds: [], hasPickThisYear: hadPickInLastYearsDraft } },
    mustHaveGuarenteed: false,
  })

  // whatever lastDraft is
  delete outcome[2024];

  return outcome;
}

export function getTradability(metas: CombinedMeta[]) {
  const picks = getPicksFromMeta(metas);
  const groups = getTradableGroups(picks);
  console.log(groups);
}

/*
1. Inputs
  a. Get pick summaries + year + id
  b. Did they have a pick in last year's draft?
2. For each year, how many guarenteed picks does the team have?
3. Algo
  pre: If `tradeStatus` is defined, let it win.
  pre: All conditional picks are considered tradable

  - If there was not a guarenteed pick in the last year
    or if forced to have a pick
    - If there is at least one guarenteed pick this year
      - For one - it's not tradable
      - For many - put them in an array. n-1 is tradable.
    - If not at least one guarenteed pick this year,
      - Go back and redo last year but force it to have a pick.
  - If there was a guarenteed pick in the last year
    - All picks in this year are tradable
*/
