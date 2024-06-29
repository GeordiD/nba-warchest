import type { Pick, Swap } from '~/utils/types/Pick';
import type { Team } from '~/utils/types/Team';

function isPick(asset: Pick | Swap): asset is Pick {
  return (asset as Pick).originator !== undefined;
}

function isSwap(asset: Pick | Swap): asset is Swap {
  return (asset as Swap).picks !== undefined;
}

export class DraftAsset {
  team: Team;

  round: number;
  year: number;

  pick?: Pick;
  swap?: Swap;

  constructor(team: Team, asset: Pick | Swap) {
    this.team = team;

    this.round = asset.round;
    this.year = asset.year;

    if (isPick(asset)) {
      this.pick = asset;
    } else {
      this.swap = asset;
    }
  }

  isOwn() {
    return this.pick?.originator.id === this.team.id;
  }

  isOwnedBySelf() {
    if (this.pick) {
      return (this.isOwn() && !this.pick?.toTeam) // owns own pick
        || (this.pick?.toTeam?.id === this.team.id) // owns other's pick
    } else if (this.swap) {
      return !this.hasPickInSwap(this.swap) && this.inBestWorstOrRemainder(this.swap)
    } else {
      throw Error('must be either pick or swap');
    }
  }

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

  private hasPickInSwap(swap: Swap) {
    return swap.picks.map(x => x.originator.id).includes(this.team.id);
  }

  private inBestWorstOrRemainder(swap: Swap) {
    return [swap.bestTo, swap.worstTo, swap.remainderTo]
      .some(x => x?.id === this.team.id);
  }

  // quantity?
  // isProtected
  // isIncoming
  // isOutgoing
  // isFavorableSwap
  // isUnfavorableSwap
  // isPick
  // isSwap

  // hasErrors: self idenitify when data isn't right
  // - has a swap AND has a to team
  // - pick has swap but no pick in that swap
  // - has multiple swaps (I'm going to assume you can only have one for now)
}
