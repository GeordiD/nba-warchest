import { Teams } from '~/test/MockTeams';
import { buildPick } from '~/test/buildPick';
import type { Pick, Protection, Swap } from '~/utils/types/Pick';
import type { Team } from '~/utils/types/Team';

describe('DraftAsset', () => {
  const self = Teams.OKC;
  const otherTeam = Teams.ORL;
  const secondTeam = Teams.BOS;

  function buildPickAsset({
    org = self,
    to = undefined,
    topXProtected = 0,
    swap,
  }: {
    org?: Team,
    to?: Team,
    topXProtected?: number,
    swap?: {
      with: Team,
      bestTo?: Team,
      worstTo?: Team,
      remainderTo?: Team,
      protections?: Protection[],
    }
  } = {}) {
    const swaps = swap
      ? [
          {
            picks: [
              buildPick({ originator: org }),
              buildPick({ originator: to }),
            ],
            bestTo: swap.bestTo,
            worstTo: swap.worstTo,
            remainderTo: swap.remainderTo,
            protections: swap.protections ?? [],
          } as Swap,
        ]
      : [];

    return new DraftAsset(self, buildPick({
      originator: org,
      toTeam: to,
      protections: topXProtected > 0
        ? [{ id: '1', rangeMin: 1, rangeMax: topXProtected, toTeam: org }, { id: '2', rangeMin: (topXProtected + 1), rangeMax: 30, toTeam: to! }]
        : [],
      swaps,
    }))
  }

  const buildSwapAsset = ({
    picks = [],
    pickTeams = [],
    bestTo,
    worstTo,
    remainderTo,
    protections = [],
  }: {
    picks?: Pick[],
    pickTeams?: Team[],
    bestTo?: Team,
    worstTo?: Team,
    remainderTo?: Team,
    protections?: Protection[]
  }) => {
    let builtPicks: Pick[];

    if (picks.length) {
      builtPicks = picks;
    } else if (pickTeams.length) {
      builtPicks = pickTeams.map(team => buildPick({ originator: team }));
    } else {
      throw Error('please use either picks or pickTeams');
    }

    return new DraftAsset(self, {
      picks: builtPicks,
      protections,
      round: 1,
      year: 2024,
      bestTo,
      worstTo,
      remainderTo,
    })
  };

  const memBosOkcOrlSituation = (from: Team) => {
    return new DraftAsset(from, {
      picks: [
        buildPick({ originator: Teams.BOS, id: 'bos-pick' }),
        buildPick({ originator: Teams.MEM, id: 'mem-pick' }),
      ],
      bestTo: Teams.OKC,
      worstTo: Teams.ORL,
      protections: [],
      year: 2024,
      round: 1,
    })
  }

  describe('constructor', () => {
    describe('basic pick', () => {
      const setup = () => {
        const pick = buildPick({
          originator: self,
          round: 2,
          year: 2025,
        });

        return {
          asset: new DraftAsset(self, pick),
          pick,
        }
      }

      it('should grab the round', () => {
        const { asset } = setup();

        expect(asset.round).toBe(2);
      });

      it('should grab the year', () => {
        const { asset } = setup();

        expect(asset.year).toBe(2025);
      });
    });

    describe('basic swap', () => {
      const asset = new DraftAsset(self, {
        picks: [
          buildPick({ originator: self, id: '1' }),
          buildPick({ originator: otherTeam, id: '2' }),
        ],
        protections: [],
        bestTo: self,
        year: 2024,
        round: 1,
      });

      it('should set the round', () => {
        expect(asset.round).toBe(1);
      })

      it('should set the year', () => {
        expect(asset.year).toBe(2024);
      })
    });
  });

  describe('isOwn', () => {
    it('should be true when pick came from input team', () => {
      const asset = buildPickAsset();

      expect(asset.isOwn()).toBe(true);
    });

    it('should be true when own pick is traded away', () => {
      const asset = buildPickAsset({ to: otherTeam });

      expect(asset.isOwn()).toBe(true);
    });

    it('should be false when pick not from input team', () => {
      const asset = buildPickAsset({ org: otherTeam })

      expect(asset.isOwn()).toBe(false);
    });

    it('should be false when pick not from input team (even if traded to input team)', () => {
      const asset = buildPickAsset({ org: otherTeam, to: self })

      expect(asset.isOwn()).toBe(false);
    });
  });

  describe('isOwnedBySelf', () => {
    it('should be true when T owns its own pick', () => {
      const asset = buildPickAsset();

      expect(asset.isOwnedBySelf()).toBe(true);
    })

    it('should be false when T traded away its own pick (unprotected)', () => {
      const asset = buildPickAsset({ to: otherTeam });

      expect(asset.isOwnedBySelf()).toBe(false);
    })

    it('should be false when T traded away its own pick (protected)', () => {
      const asset = buildPickAsset({
        to: otherTeam,
        topXProtected: 10,
      });

      expect(asset.isOwnedBySelf()).toBe(false);
    })

    it('should be true when T is receiving another teams pick (unprotected)', () => {
      const asset = buildPickAsset({
        org: otherTeam,
        to: self,
      });

      expect(asset.isOwnedBySelf()).toBe(true);
    })

    it('should be true when T is receiving another teams pick(protected)', () => {
      const asset = buildPickAsset({
        org: otherTeam,
        to: self,
        topXProtected: 10,
      });

      expect(asset.isOwnedBySelf()).toBe(true);
    })

    describe('when both picks underneath a swap have been traded (mem/bos to okc/orl)', () => {
      [
        { team: Teams.OKC, expected: true, desc: 'is receiving bestOf' },
        { team: Teams.ORL, expected: true, desc: 'is receiving worstOf' },
        { team: Teams.BOS, expected: false, desc: 'has traded away pick' },
      ].forEach(({ team, expected, desc }) => {
        it(`should be ${expected} when T ${desc}`, () => {
          const asset = memBosOkcOrlSituation(team);

          expect(asset.isOwnedBySelf()).toBe(expected);
        })
      });
    });
  });

  // describe('getQuantity', () => {
  //   [
  //     {
  //       description: 'receiving a pick',
  //       asset: buildPickAsset({ org: otherTeam, to: self }),
  //       expected: 1,
  //     },
  //     {
  //       description: 'sending a pick',
  //       asset: buildPickAsset({ to: otherTeam }),
  //       expected: -1,
  //     },
  //     {
  //       description: 'swapping (input as pick)',
  //       asset: buildPickAsset({
  //         org: self,
  //         swap: {
  //           with: otherTeam,
  //           bestTo: self,
  //         },
  //       }),
  //       expected: 0,
  //     },
  //     {
  //       description: 'swapping (input as swap)',
  //       asset: buildSwapAsset({
  //         pickTeams: [self, otherTeam],
  //         bestTo: self,
  //       }),
  //       expected: 0,
  //     },
  //     {
  //       description: 'receiving a pick that looks like a swap',
  //       asset: buildSwapAsset({
  //         pickTeams: [Teams.BOS, Teams.MEM],
  //         bestTo: self,
  //         worstTo: Teams.ORL,
  //       }),
  //       expected: 1,
  //     },
  //     {
  //       description: 'sending a pick that looks like a swap',
  //       asset: buildSwapAsset({
  //         pickTeams: [self, Teams.MEM],
  //         bestTo: Teams.BOS,
  //         worstTo: Teams.ORL,
  //       }),
  //       expected: -1,
  //     },
  //     {
  //       description: 'sending worst pick of three',
  //       asset: buildSwapAsset({
  //         pickTeams: [self, otherTeam, secondTeam],
  //         worstTo: otherTeam,
  //         remainderTo: self,
  //       }),
  //       expected: 2,
  //     },
  //   ].forEach(({ description, asset, expected }) => {
  //     it(`should be ${expected} when ${description}`, () => {
  //       expect(asset.getNetQuantity()).toBe(expected);
  //     });
  //   });
  // })
});
