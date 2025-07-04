import type { PickSummaryMeta } from '~/utils/tradeable';

describe('tradable', () => {
  describe('getTradablePicks', () => {
    const buildMeta = (
      year: number,
      isGuarenteed = true,
      id = 1,
    ): PickSummaryMeta => ({
      id: id.toString(),
      year,
      summary: {
        isConditional: !isGuarenteed,
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

    it('should include all non-guarenteed picks as tradable', () => {
      const result = getTradablePicks([
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

    it('should not include traded away picks as tradable', () => {
      const result = getTradablePicks(
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

    it('should not include own pick as tradable when its also conditional', () => {
      const meta = buildMeta(2025, false);
      const result = getTradablePicks([
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

    describe('when there are no guarenteed picks the year before or after', () => {
      it('should be no tradable picks when there are no picks before AND after', () => {
        const result = getTradablePicks(
          buildInputPicks(2025, 2027, 2028, 2030),
          defaultOptions,
        );

        expect(result).toEqual([]);
      });

      it('should not mark a pick as tradable when there was no pick the year before or after', () => {
        const result = getTradablePicks(
          buildInputPicks(2026, 2027),
          defaultOptions,
        )

        expect(result).toEqual([]);
      })

      it('should mark n-1 picks as tradable when there are multiple picks in a year', () => {
        const result = getTradablePicks(
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
    // by years with a guarenteed pick and there is more trade flexibility
    describe('groupings', () => {
      describe('1', () => {
        it('should mark a pick as tradable when one pick is guarenteed that year', () => {
          const result = getTradablePicks(
            buildInputPicks(2026, 2027, 2028),
            defaultOptions,
          );

          expect(result).toEqual([buildMeta(2027)])
        })

        it('should mark all guarenteed picks as tradable when there are mulitple', () => {
          const result = getTradablePicks(
            buildInputPicks(2026, 2027, 2027, 2028),
            defaultOptions,
          );

          expect(result).toEqual(buildInputPicks(2027, 2027))
        })
      })

      describe('even', () => {
        it('should mark the picks as -or- tradable (2x2)', () => {
          const result = getTradablePicks(
            buildInputPicks(2025, 2026, 2027, 2028),
            defaultOptions,
          )

          expect(result).toEqual([{
            total: 1,
            picks: buildInputPicks(2026, 2027),
          }])
        })

        it('should mark the picks as -or- tradable (2x3)', () => {
          const result = getTradablePicks(
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

        it('should mark the picks as -or- tradable (2x4)', () => {
          const result = getTradablePicks(
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

        it('should mark the picks as -or- tradable (4x4)', () => {
          const result = getTradablePicks(
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
        it('should mark all picks as tradable every other year', () => {
          const result = getTradablePicks(
            buildInputPicks(2025, 2026, 2027, 2028, 2028, 2029),
            defaultOptions,
          )

          expect(result).toEqual([
            buildMeta(2026),
            buildMeta(2028),
            buildMeta(2028, true, '2'),
          ])
        })

        it('should mark all but one pick as tradable in the in between years', () => {
          const result = getTradablePicks(
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
        const result = getTradablePicks(
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
    })
  });
});
