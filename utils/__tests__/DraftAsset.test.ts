import { Teams } from '~/test/MockTeams';
import { buildPick } from '~/test/buildPick';
import type { Protection, Swap } from '~/utils/types/Pick';
import type { Team } from '~/utils/types/Team';

describe('DraftAsset', () => {
  const self = Teams.OKC;
  const otherTeam = Teams.ORL;

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
      with: Team[],
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
              ...swap.with.map(x => buildPick({ originator: x })),
            ],
            bestTo: swap.bestTo,
            worstTo: swap.worstTo,
            remainderTo: swap.remainderTo,
            protections: swap.protections ?? [],
            year: 2024,
            round: 1,
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

  const cases = {
    ownPick: buildPickAsset(),
    sendUnprotectedPick: buildPickAsset({ to: otherTeam }),
    sendProtectedPick: buildPickAsset({ to: otherTeam, topXProtected: 10 }),
    receiveUnprotectedPick: buildPickAsset({ org: otherTeam, to: self }),
    receiveProtectedPick: buildPickAsset({ org: otherTeam, to: self, topXProtected: 10 }),
    favorableSwap: buildPickAsset({
      swap: {
        with: [otherTeam],
        bestTo: self,
      },
    }),
    unfavorableSwap: buildPickAsset({
      swap: {
        with: [otherTeam],
        bestTo: otherTeam,
      },
    }),
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
      const asset = new DraftAsset(self, buildPick({
        originator: self,
        year: 2024,
        round: 1,
        swaps: [{
          picks: [
            buildPick({ originator: self, id: '1' }),
            buildPick({ originator: otherTeam, id: '2' }),
          ],
          protections: [],
          bestTo: self,
          year: 2024,
          round: 1,
        }],
      }));

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
  });

  describe('getNetQuantity', () => {
    [
      {
        description: 'receiving a pick',
        asset: buildPickAsset({ org: otherTeam, to: self }),
        expected: 1,
      },
      {
        description: 'sending a pick',
        asset: buildPickAsset({ to: otherTeam }),
        expected: -1,
      },
      {
        description: 'swapping the pick',
        asset: buildPickAsset({
          org: self,
          swap: {
            with: [otherTeam],
            bestTo: self,
          },
        }),
        expected: 0,
      },
    ].forEach(({ description, asset, expected }) => {
      it(`should be ${expected} when ${description}`, () => {
        expect(asset.getNetQuantity()).toBe(expected);
      });
    });
  });

  describe('isProtected', () => {
    it('should be true when receiving a protected pick', () => {
      const asset = buildPickAsset({ org: otherTeam, to: self, topXProtected: 10 });

      expect(asset.isProtected()).toBe(true);
    })

    it('should be true when sending a protected pick', () => {
      const asset = buildPickAsset({ to: otherTeam, topXProtected: 10 });

      expect(asset.isProtected()).toBe(true);
    })

    it('should be false when sending an unprotected pick', () => {
      const asset = buildPickAsset({ to: otherTeam });

      expect(asset.isProtected()).toBe(false);
    })

    it('should be false when receiving an unprotected pick', () => {
      const asset = buildPickAsset({ org: otherTeam, to: self });

      expect(asset.isProtected()).toBe(false);
    })
  });

  describe('getProtection', () => {
    it('should be 0 when unprotected', () => {
      expect(cases.sendUnprotectedPick.getProtection()).toBe(0);
    })

    it('should be the top number when protected', () => {
      expect(cases.sendProtectedPick.getProtection()).toBe(10);
    });

    it('should be 0 for an unprotected swap', () => {
      const asset = buildPickAsset({
        swap: {
          with: [otherTeam],
          bestTo: self,
        },
      })

      expect(asset.getProtection()).toBe(0);
    });

    it('should be the top number when protected swap', () => {
      const asset = buildPickAsset({
        swap: {
          with: [otherTeam],
          protections: [
            { id: '1', rangeMin: 1, rangeMax: 10, toTeam: otherTeam },
            // adding both just for testing and in case we do
            { id: '2', rangeMin: 11, rangeMax: 30, toTeam: self },
          ],
        },
      })

      expect(asset.getProtection()).toBe(10);
    });
  })

  describe('isIncoming', () => {
    it('should be true when receiving a pick', () => {
      expect(cases.receiveProtectedPick.isIncoming()).toBe(true);
    })

    it('should be false when sending a pick', () => {
      expect(cases.sendProtectedPick.isIncoming()).toBe(false);
    })

    it('should be false for own pick', () => {
      expect(cases.ownPick.isIncoming()).toBe(false);
    });

    it('should be false when swapping a pick', () => {
      expect(cases.favorableSwap.isIncoming()).toBe(false);
    });
  });

  describe('isOutgoing', () => {
    it('should be false when receiving a pick', () => {
      expect(cases.receiveProtectedPick.isOutgoing()).toBe(false);
    })

    it('should be true when sending a pick', () => {
      expect(cases.sendProtectedPick.isOutgoing()).toBe(true);
    })

    it('should be false for own pick', () => {
      expect(cases.ownPick.isOutgoing()).toBe(false);
    });

    it('should be false when swapping a pick', () => {
      expect(cases.favorableSwap.isOutgoing()).toBe(false);
    });
  });

  describe('isSwap', () => {
    it('should be false for a pick', () => {
      expect(cases.sendProtectedPick.isSwap()).toBe(false);
    });

    it('should be true for a swap', () => {
      expect(cases.favorableSwap.isSwap()).toBe(true);
    });
  });

  describe('isFavorableSwap', () => {
    it('should be false for a pick', () => {
      expect(cases.sendProtectedPick.isFavorableSwap()).toBe(false);
    });

    it('should be true for a favorable swap', () => {
      expect(cases.favorableSwap.isFavorableSwap()).toBe(true);
    });

    it('should be true for a unfavorable swap', () => {
      expect(cases.unfavorableSwap.isFavorableSwap()).toBe(false);
    });
  });

  describe('isUnfavorableSwap', () => {
    it('should be false for a pick', () => {
      expect(cases.sendProtectedPick.isUnfavorableSwap()).toBe(false);
    });

    it('should be true for a favorable swap', () => {
      expect(cases.favorableSwap.isUnfavorableSwap()).toBe(false);
    });

    it('should be true for a unfavorable swap', () => {
      expect(cases.unfavorableSwap.isUnfavorableSwap()).toBe(true);
    });
  });

  describe('isPick', () => {
    it('should be true for a pick', () => {
      expect(cases.ownPick.isPick()).toBe(true);
    });

    it('should be false for a swap', () => {
      expect(cases.favorableSwap.isPick()).toBe(false);
    })
  });

  describe('hasErrors', () => {
    describe('should be false', () => {
      [
        { asset: cases.ownPick, desc: 'own pick' },
        { asset: cases.sendProtectedPick, desc: 'send protected pick' },
        { asset: cases.unfavorableSwap, desc: 'unfavorable swap' },
      ].forEach(({ asset, desc }) => {
        it(`normally (${desc})`, () => {
          expect(asset.hasErrors()).toBe(false);
        })
      })
    })

    it('should be true when has a swap AND a to Team', () => {
      expect(buildPickAsset({
        to: otherTeam,
        swap: { with: [otherTeam], bestTo: otherTeam },
      }).hasErrors()).toBe(true);
    })
  });
});

// TBD

// const buildSwapAsset = ({
//   picks = [],
//   pickTeams = [],
//   bestTo,
//   worstTo,
//   remainderTo,
//   protections = [],
// }: {
//   picks?: Pick[],
//   pickTeams?: Team[],
//   bestTo?: Team,
//   worstTo?: Team,
//   remainderTo?: Team,
//   protections?: Protection[]
// }) => {
//   let builtPicks: Pick[];

//   if (picks.length) {
//     builtPicks = picks;
//   } else if (pickTeams.length) {
//     builtPicks = pickTeams.map(team => buildPick({ originator: team }));
//   } else {
//     throw Error('please use either picks or pickTeams');
//   }

//   return new DraftAsset(self, {
//     picks: builtPicks,
//     protections,
//     round: 1,
//     year: 2024,
//     bestTo,
//     worstTo,
//     remainderTo,
//   })
// };

// const memBosOkcOrlSituation = (from: Team) => {
//   return new DraftAsset(from, {
//     picks: [
//       buildPick({ originator: Teams.BOS, id: 'bos-pick' }),
//       buildPick({ originator: Teams.MEM, id: 'mem-pick' }),
//     ],
//     bestTo: Teams.OKC,
//     worstTo: Teams.ORL,
//     protections: [],
//     year: 2024,
//     round: 1,
//   })
// }

// // isOwnedBySelf
// describe('when both picks underneath a swap have been traded (mem/bos to okc/orl)', () => {
//   [
//     { team: Teams.OKC, expected: true, desc: 'is receiving bestOf' },
//     { team: Teams.ORL, expected: true, desc: 'is receiving worstOf' },
//     { team: Teams.BOS, expected: false, desc: 'has traded away pick' },
//   ].forEach(({ team, expected, desc }) => {
//     it(`should be ${expected} when T ${desc}`, () => {
//       const asset = memBosOkcOrlSituation(team);

//       expect(asset.isOwnedBySelf()).toBe(expected);
//     })
//   });
// });
