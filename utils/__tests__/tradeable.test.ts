import type { PickSummaryMeta } from '~/utils/tradeable';

describe('tradeable', () => {
  describe('getTradeablePicks', () => {
    const buildMeta = (
      year: number,
      isGuaranteed = true,
      id = 1,
    ): PickSummaryMeta => ({
      id: id.toString(),
      year,
      summary: {
        isConditional: !isGuaranteed,
      },
      details: `${id}`,
    })

    const buildInputPicks = (...input: number[]) => {
      const counter: Record<number, number> = {};

      return input.map((x) => {
        if (counter[x] === undefined) counter[x] = 1;
        const num = counter[x];
        counter[x] += 1;

        return buildMeta(x, true, num)
      })
    }

    const defaultOptions = { startYear: 2025, hadPickLastYear: false }

    it('should include all non-guaranteed picks as tradeable', () => {
      const result = getTradeablePicks([
        ...buildInputPicks(2025, 2027, 2028, 2030),
        buildMeta(2025, false, 2),
        buildMeta(2026, false, 1),
        buildMeta(2027, false, 2),
      ], defaultOptions);

      expect(result).toEqual([
        buildMeta(2025, false, 2),
        buildMeta(2026, false, 1),
        buildMeta(2027, false, 2),
      ])
    })

    it('should not include traded away picks as tradeable', () => {
      const result = getTradeablePicks(
        buildInputPicks(2025, 2026, 2027, 2028, 2029).map(x => ({
          ...x,
          summary: {
            ...x.summary,
            isTradedAway: true,
          },
        })),
        defaultOptions,
      );

      expect(result).toEqual([]);
    })

    it('should not include own pick as tradeable when its also conditional', () => {
      const meta = buildMeta(2025, false);
      const result = getTradeablePicks([
        {
          ...meta,
          summary: {
            ...meta.summary,
            isOwn: true,
          },
        },
      ], defaultOptions)

      expect(result).toEqual([]);
    });

    describe('when there are no guaranteed picks the year before or after', () => {
      it('should be no tradeable picks when there are no picks before AND after', () => {
        const result = getTradeablePicks(
          buildInputPicks(2025, 2027, 2028, 2030),
          defaultOptions,
        );

        expect(result).toEqual([]);
      });

      it('should not mark a pick as tradeable when there was no pick the year before or after', () => {
        const result = getTradeablePicks(
          buildInputPicks(2026, 2027),
          defaultOptions,
        )

        expect(result).toEqual([]);
      })

      it('should mark n-1 picks as tradeable when there are multiple picks in a year', () => {
        const result = getTradeablePicks(
          buildInputPicks(2026, 2026, 2026),
          defaultOptions,
        );

        expect(result).toEqual([{
          total: 2,
          picks: buildInputPicks(2026, 2026, 2026),
        }])
      })
    })

    // A grouping is a year where there is a group of years that are surrounded
    // by years with a guaranteed pick and there is more trade flexibility
    describe('groupings', () => {
      describe('1', () => {
        it('should mark a pick as tradeable when one pick is guaranteed that year', () => {
          const result = getTradeablePicks(
            buildInputPicks(2026, 2027, 2028),
            defaultOptions,
          );

          expect(result).toEqual([buildMeta(2027)])
        })

        it('should mark all guaranteed picks as tradeable when there are mulitple', () => {
          const result = getTradeablePicks(
            buildInputPicks(2026, 2027, 2027, 2028),
            defaultOptions,
          );

          expect(result).toEqual(buildInputPicks(2027, 2027))
        })
      })

      describe('even', () => {
        it('should mark the picks as -or- tradeable (2x2)', () => {
          const result = getTradeablePicks(
            buildInputPicks(2025, 2026, 2027, 2028),
            defaultOptions,
          )

          expect(result).toEqual([{
            total: 1,
            picks: buildInputPicks(2026, 2027),
          }])
        })

        it('should mark the picks as -or- tradeable (2x3)', () => {
          const result = getTradeablePicks(
            buildInputPicks(2025, 2026, 2027, 2027, 2028),
            defaultOptions,
          )

          expect(result).toEqual([{
            total: 2,
            picks: [
              buildMeta(2026),
              buildMeta(2027),
              buildMeta(2027, true, 2),
            ],
          }])
        })

        it('should mark the picks as -or- tradeable (2x4)', () => {
          const result = getTradeablePicks(
            buildInputPicks(2025, 2026, 2026, 2027, 2027, 2028),
            defaultOptions,
          )

          expect(result).toEqual([{
            total: 3,
            picks: [
              buildMeta(2026),
              buildMeta(2026, true, 2),
              buildMeta(2027),
              buildMeta(2027, true, 2),
            ],
          }])
        })

        it('should mark the picks as -or- tradeable (4x4)', () => {
          const result = getTradeablePicks(
            buildInputPicks(2025, 2026, 2027, 2028, 2029, 2030),
            defaultOptions,
          )

          expect(result).toEqual([
            {
              total: 2,
              picks: buildInputPicks(2026, 2027, 2028, 2029),
            },
          ])
        })
      })

      describe('odd', () => {
        it('should mark all picks as tradeable every other year', () => {
          const result = getTradeablePicks(
            buildInputPicks(2025, 2026, 2027, 2028, 2028, 2029),
            defaultOptions,
          )

          expect(result).toEqual([
            buildMeta(2026),
            buildMeta(2028),
            buildMeta(2028, true, 2),
          ])
        })

        it('should mark all but one pick as tradeable in the in between years', () => {
          const result = getTradeablePicks(
            buildInputPicks(2025, 2026, 2027, 2027, 2027, 2028, 2029),
            defaultOptions,
          )

          expect(result).toEqual([
            buildMeta(2026),
            {
              total: 2,
              picks: buildInputPicks(2027, 2027, 2027),
            },
            buildMeta(2028),
          ])
        });
      })

      it('should work when there are multiple groups', () => {
        const result = getTradeablePicks(
          // missing 2027
          buildInputPicks(2025, 2026, 2028, 2029, 2030, 2031),
          { startYear: 2025, hadPickLastYear: true },
        )

        expect(result).toEqual([
          buildMeta(2025),
          buildMeta(2029),
          buildMeta(2031),
        ])
      })

      describe('frozen picks', () => {
        const makeFrozen = (picks: PickSummaryMeta[], ...years: number[]) => {
          years.forEach((year) => {
            const pick = picks.find(x => x.year === year);
            if (pick) {
              pick.summary.frozen = 2027;
            }
          })
        }

        it('should not mark a frozen pick as tradeable', () => {
          // frozen in middle
          const picks = buildInputPicks(2026, 2027, 2028);
          makeFrozen(picks, 2027);
          const result = getTradeablePicks(
            picks,
            { startYear: 2025, hadPickLastYear: true },
          )

          // since the only tradeable pick is frozen, no tradeable picks
          expect(result).toEqual([]);
        });

        it('should include a frozen pick when making groupings', () => {
          // frozen on end
          const picks = buildInputPicks(2026, 2027, 2028);
          makeFrozen(picks, 2028);
          const result = getTradeablePicks(
            picks,
            { startYear: 2025, hadPickLastYear: true },
          )

          // Still have a tradeable pick, since the frozen pick counts as guaranteed
          expect(result).toEqual([buildMeta(2027)]);
        })

        it('on even groupings when one is frozen, it should just pick the unfrozen pick', () => {
          const picks = buildInputPicks(2026, 2027, 2028, 2029);
          makeFrozen(picks, 2028);
          const result = getTradeablePicks(picks, { startYear: 2025, hadPickLastYear: true })

          expect(result).toEqual([buildMeta(2027)])
        })

        it('on big even groupings, it should pick the path with the unfrozen pick (frozen on end)', () => {
          const picks = buildInputPicks(2027, 2028, 2029, 2030, 2031);
          makeFrozen(picks, 2031);
          const result = getTradeablePicks(picks, { startYear: 2025, hadPickLastYear: false })

          expect(result).toEqual([
            buildMeta(2028),
            buildMeta(2030),
          ])
        })

        it('on big even groupings, it should pick the path with the unfrozen pick (frozen in middle)', () => {
          const picks = buildInputPicks(2027, 2028, 2029, 2030, 2031);
          makeFrozen(picks, 2030);
          const result = getTradeablePicks(picks, { startYear: 2025, hadPickLastYear: false })

          expect(result).toEqual([
            buildMeta(2029),
            buildMeta(2031),
          ])
        })
      });
    })
  });
});
