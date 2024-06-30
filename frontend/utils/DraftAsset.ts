import type { Pick, Protection, Swap } from '~/utils/types/Pick';
import type { Team } from '~/utils/types/Team';

// function isPick(asset: Pick | Swap): asset is Pick {
//   return (asset as Pick).originator !== undefined;
// }

// function isSwap(asset: Pick | Swap): asset is Swap {
//   return (asset as Swap).picks !== undefined;
// }

export class DraftAsset {
  team: Team;

  round: number;
  year: number;

  pick: Pick;

  constructor(team: Team, asset: Pick) {
    this.team = team;

    this.round = asset.round;
    this.year = asset.year;
    this.pick = asset;
  }

  isOwn() {
    return this.pick.originator.id === this.team.id;
  }

  isOwnedBySelf() {
    return (this.isOwn() && !this.pick?.toTeam) // owns own pick
      || (this.pick?.toTeam?.id === this.team.id) // owns other's pick
  }

  getNetQuantity() {
    if (!this.pick.swaps.length) {
      return this.isOwnedBySelf() ? 1 : -1;
    } else {
      return 0;
    }
  }

  isProtected() {
    return this.pick.protections.length > 0;
  }

  getProtection() {
    if (!this.pick.swaps.length) {
      return this.pick.protections.length
        ? this.getTopXProtected(this.pick.protections)
        : 0;
    } else {
      return this.pick.swaps[0].protections.length
        ? this.getTopXProtected(this.pick.swaps[0].protections)
        : 0;
    }
  }

  private getTopXProtected(protections: Protection[]) {
    return protections.reduce((prev, current) => {
      return prev > current.rangeMax ? current.rangeMax : prev;
    }, 100)
  }

  isIncoming() {
    return this.isSelf(this.pick.toTeam);
  }

  isOutgoing() {
    return this.pick.toTeam
      ? !this.isSelf(this.pick.toTeam)
      : false;
  }

  private isSelf(team?: Team) {
    return !!team && team.id === this.team.id;
  }

  isSwap() {
    return this.pick.swaps.length > 0;
  }

  isPick() {
    return !this.isSwap();
  }

  isFavorableSwap() {
    if (this.pick.swaps.length) {
      const swap = this.pick.swaps[0];
      return this.isSelf(swap.bestTo);
    }

    return false;
  }

  isUnfavorableSwap() {
    if (this.pick.swaps.length) {
      const swap = this.pick.swaps[0];
      return !this.isSelf(swap.bestTo);
    }

    return false;
  }

  hasErrors() {
    if (!!this.pick.toTeam && this.pick.swaps.length > 0) return true;

    return false;
  }

  // hasErrors: self idenitify when data isn't right
  // x has a swap AND has a to team
  // - pick has swap but no pick in that swap
  // - has multiple swaps (I'm going to assume you can only have one for now)

  // TBD

  // private hasPickInSwap(swap: Swap) {
  //   return swap.picks.map(x => x.originator.id).includes(this.team.id);
  // }

  // private inBestWorstOrRemainder(swap: Swap) {
  //   return [swap.bestTo, swap.worstTo, swap.remainderTo]
  //     .some(x => x?.id === this.team.id);
  // }

  // getNetQuantity() {
  //   if (this.pick) {
  //     if (!this.pick.swaps.length) {
  //       return this.isOwnedBySelf() ? 1 : -1;
  //     } else {
  //       // TODO - I think this needs to be robust for sending a pick as a swap situations
  //       return 0;
  //     }
  //   } else if (this.swap) {
  //     // is swap
  //     if (this.hasPickInSwap(this.swap)) {
  //       if (!this.inBestWorstOrRemainder(this.swap)) {
  //         return -1;
  //       } else {
  //         // const isBestTo = this.swap.bestTo?.id === this.team.id;
  //         // const isWorstTo = this.swap.worstTo?.id === this.team.id;
  //         // const isRemainderTo = this.swap.remainderTo?.id === this.team.id;
  //         // const numPicks = this.swap.picks.length;

  //         // TODO
  //         return -100;
  //       }
  //     }
  //   }
  // }
}
