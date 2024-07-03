import type { DraftAsset } from '#imports';

export function getTradeablePicks(allAssets: DraftAsset[]): (DraftAsset | DraftAsset[])[] {
  const availableAssets = allAssets.filter(x => x.isOwnedBySelf());

  const availableAssetsByYear = allAssets
    .reduce((prev, curr) => !prev.includes(curr.year)
      ? [...prev, curr.year]
      : prev, [] as number[])
    .map(year => availableAssets.filter(asset => asset.year === year))

  return availableAssets;
}
