import type { ExpandedPick, ExpandedSwap } from '~/utils/types/Pick';
import type { Team } from '~/utils/types/Team';

function isPick(asset: ExpandedPick | ExpandedSwap): asset is ExpandedPick {
  return (asset as ExpandedPick).originator !== undefined;
}

function isSwap(asset: ExpandedPick | ExpandedSwap): asset is ExpandedSwap {
  return (asset as ExpandedSwap).picks !== undefined;
}

export class DraftAsset {
  team: Team;

  round: number;
  year: number;

  pick?: ExpandedPick;
  swap?: ExpandedSwap;

  constructor(team: Team, asset: ExpandedPick | ExpandedSwap) {
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

  getNetQuantity() {
    return -2;
  }

  private hasPickInSwap(swap: ExpandedSwap) {
    return swap.picks.map(x => x.originator.id).includes(this.team.id);
  }

  private inBestWorstOrRemainder(swap: ExpandedSwap) {
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
}
