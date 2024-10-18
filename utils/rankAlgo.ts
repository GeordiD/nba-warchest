import type { RichTeamMeta } from '~/utils/tradeable';

function isTradablePicksGroup(val: PickSummaryMeta | TradablePicksGroup<PickSummaryMeta>): val is TradablePicksGroup<PickSummaryMeta> {
  return (val as TradablePicksGroup).total !== undefined;
}

function processMetas(
  input: PickSummaryMeta | TradablePicksGroup,
  isConditional: boolean,
  // fn: (x: PickSummaryMeta) => boolean,
) {
  if (isTradablePicksGroup(input)) {
    return isConditional ? 0 : input.total;
  } else {
    return !!input.summary.isConditional == isConditional ? 1 : 0;
  }
}

export function getData(meta: RichTeamMeta) {
  const guarenteedFirsts = meta.tradeInfo.firsts.tradable.asMeta.reduce((acc, curr) => {
    return acc + processMetas(curr, false);
  }, 0)

  const conditionalFirsts = meta.tradeInfo.firsts.tradable.asMeta.reduce((acc, curr) => {
    return acc + processMetas(curr, true);
  }, 0)

  const swappableFirsts = meta.tradeInfo.firsts.swappable;
  const seconds = meta.tradeInfo.seconds;

  return {
    guaranteed_firsts: guarenteedFirsts,
    conditional_firsts: conditionalFirsts,
    swaps: swappableFirsts.total,
    seconds: seconds.total,
    team: meta.info.abbr,
  }
}

type Feature = keyof Omit<ReturnType<typeof getData>, 'team'>

type Rule = {
  feature: Feature,
  numToEqualNextLevel?: number,
}

const rules: Rule[] = [
  { feature: 'guaranteed_firsts' },
  { feature: 'conditional_firsts', numToEqualNextLevel: 2 },
  { feature: 'swaps' },
  { feature: 'seconds' },
]

export function score(meta: ReturnType<typeof getData>) {
  const results = rules.map((rule) => {
    const mult = rule.numToEqualNextLevel ? (1 / rule.numToEqualNextLevel) * 10 : 1;
    return meta[rule.feature] * mult;
  });

  const finalScore = results.toReversed()
    .reduce((prev, curr, i) => {
      return prev += curr * Math.pow(10, i - 1);
    }, 0);

  return finalScore;
}

export function rankAlgo(a: RichTeamMeta, b: RichTeamMeta) {
  const aInfo = getData(a);
  const bInfo = getData(b);

  return score(bInfo) - score(aInfo)
}
