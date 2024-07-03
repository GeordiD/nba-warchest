import { Teams } from '~/test/MockTeams';
import type { Pick } from '~/utils/types/Pick';

vi.mock('../DraftAsset');

describe('getTradeablePicks', () => {
  const self = Teams.OKC;

  const buildAsset = (year: number, isOwnedBySelf: boolean, {
    isProtected = false,
  } = {}) => {
    const asset = vi.mocked(new DraftAsset(self, {} as unknown as Pick));
    asset.isOwnedBySelf.mockReturnValue(isOwnedBySelf);
    asset.isProtected.mockReturnValue(isProtected);

    return asset;
  }

  it('it should filter out picks unowned by the team', () => {
    const assets = [
      buildAsset(2024, false),
      buildAsset(2025, false),
      buildAsset(2026, false),
    ]

    expect(getTradeablePicks(assets).length).toBe(0);
  });

  describe.skip('Stepien Rule', () => {
    it('should not mark a pick as tradable if team woul', () => {
      const assets = [
        buildAsset(2025, true),
      ]

      expect(getTradeablePicks(assets).length).toBe(0);
    })
  });
});
