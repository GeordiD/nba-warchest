import { setActivePinia, createPinia } from 'pinia';
import { useSwapStore } from '~/stores/useSwapStore';
import { Teams } from '~/test/MockTeams';
import type { Pick, Swap } from '~/utils/types/Pick';

vi.mock('~/stores/usePickStore');
vi.mock('~/stores/useSwapStore');

describe('useTeamInfoStore', () => {
  const mockPicks = (picks: Pick[]) => {
    const mockPicksStore = {
      picks,
    };
    vi.mocked(usePickStore).mockReturnValue(mockPicksStore as unknown as ReturnType<typeof usePickStore>);
  }

  const mockSwaps = (swaps: Swap[]) => {
    const mockSwapStore = {
      swaps,
    };
    vi.mocked(useSwapStore).mockReturnValue(mockSwapStore as unknown as ReturnType<typeof useSwapStore>);
  }

  beforeEach(() => {
    setActivePinia(createPinia())
    mockSwaps([]);
    mockPicks([]);
  })

  describe('picks', () => {
    it('should be empty when no picks match', () => {
      mockPicks([
        buildPick({ originator: Teams.POR }),
      ])
      const store = useTeamInfoStore(Teams.OKC)();

      expect(store.picks).toEqual([]);
    });

    [
      {
        desc: 'own picks',
        include: { originator: Teams.OKC },
        neg: { originator: Teams.POR },
      },
      {
        desc: 'picks traded to team',
        include: {
          originator: Teams.POR,
          toTeam: Teams.OKC,
        },
        neg: {
          originator: Teams.POR,
          toTeam: Teams.WAS,
        },
      },
      {
        desc: 'picks traded away from team',
        include: {
          originator: Teams.OKC,
          toTeam: Teams.POR,
        },
      },
    ].forEach(
      ({ desc, include, exclude, neg }: {
        desc: string,
        include?: Partial<Pick>,
        exclude?: Partial<Pick>,
        neg?: Partial<Pick>,
      }) => {
        describe(desc, () => {
          if (include) {
            it(`should include ${desc}`, () => {
              const pick = buildPick(include)
              mockPicks([
                pick,
              ])
              const store = useTeamInfoStore(Teams.OKC)();

              expect(store.picks).toEqual([
                pick,
              ]);
            })
          }

          if (exclude) {
            it(`should exclude ${desc}`, () => {
              const pick = buildPick(exclude)
              mockPicks([
                pick,
              ])
              const store = useTeamInfoStore(Teams.OKC)();

              expect(store.picks).toEqual([
                pick,
              ]);
            })
          }

          if (neg) {
            it('negative', () => {
              const pick = buildPick(neg)
              mockPicks([
                pick,
              ])
              const store = useTeamInfoStore(Teams.OKC)();

              expect(store.picks).toEqual([]);
            })
          }
        })
      });
  })

  describe('availablePicks', () => {
    [
      {
        desc: 'own picks',
        include: { originator: Teams.OKC },
        neg: { originator: Teams.POR },
      },
      {
        desc: 'picks traded to team',
        include: {
          originator: Teams.POR,
          toTeam: Teams.OKC,
        },
        neg: {
          originator: Teams.POR,
          toTeam: Teams.WAS,
        },
      },
      {
        desc: 'picks traded away from team',
        exclude: {
          originator: Teams.OKC,
          toTeam: Teams.POR,
        },
      },
    ].forEach(
      ({ desc, include, exclude, neg }: {
        desc: string,
        include?: Partial<Pick>,
        exclude?: Partial<Pick>,
        neg?: Partial<Pick>,
      }) => {
        describe(desc, () => {
          if (include) {
            it(`should include ${desc}`, () => {
              const pick = buildPick(include)
              mockPicks([
                pick,
              ])
              const store = useTeamInfoStore(Teams.OKC)();

              expect(store.availablePicks).toEqual([
                pick,
              ]);
            })
          }

          if (exclude) {
            it(`should exclude ${desc}`, () => {
              const pick = buildPick(exclude)
              mockPicks([
                pick,
              ])
              const store = useTeamInfoStore(Teams.OKC)();

              expect(store.availablePicks).toEqual([]);
            })
          }

          if (neg) {
            it('negative test', () => {
              const pick = buildPick(neg)
              mockPicks([
                pick,
              ])
              const store = useTeamInfoStore(Teams.OKC)();

              expect(store.availablePicks).toEqual([]);
            })
          }
        })
      });

    it.skip('should include a traded pick that looks like a swap', () => {
      mockPicks([
        buildPick({ originator: Teams.MEM, id: 'test-MEM' }),
        buildPick({ originator: Teams.BOS, id: 'test-BOS' }),
      ]);
      mockSwaps([{
        picks: ['test-MEM', 'test-BOS'],
        bestTo: Teams.OKC,
        worstTo: Teams.ORL,
        protections: [],
      }])

      const store = useTeamInfoStore(Teams.OKC)();

      expect(store.availablePicks).toEqual([
        {
          picks: ['test-MEM', 'test-BOS'],
          bestTo: Teams.OKC,
          worstTo: Teams.ORL,
          protections: [],
        },
      ])
    });
  })
})
