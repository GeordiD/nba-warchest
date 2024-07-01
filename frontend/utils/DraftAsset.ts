import type { Pick, Protection } from '~/utils/types/Pick';
import type { Team } from '~/utils/types/Team';

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
    if (!this.isSwap()) {
      return this.isOwnedBySelf() ? 1 : -1;
    } else {
      return 0;
    }
  }

  isProtected() {
    return this.pick.protections.length > 0;
  }

  getProtection() {
    if (this.isSwap()) {
      // doesn't work - cause each pick can have protections.
      return this.pick.swaps[0].protections.length
        ? this.getTopXProtected(this.pick.swaps[0].protections)
        : 0;
    } else {
      return this.pick.protections.length
        ? this.getTopXProtected(this.pick.protections)
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

  isPick() {
    return !this.isSwap();
  }

  isSwap() {
    return this.pick.swaps.length > 0;
  }

  isFavorableSwap() {
    if (this.isSwap()) {
      const swap = this.pick.swaps[0];
      return this.isSelf(swap.bestTo);
    }

    return false;
  }

  isUnfavorableSwap() {
    if (this.isSwap()) {
      const swap = this.pick.swaps[0];
      return !this.isSelf(swap.bestTo);
    }

    return false;
  }

  hasErrors() {
    if (!!this.pick.toTeam && this.pick.swaps.length > 0) return true;

    return false;
  }

  // Ideas:
  // conveyance rules?
  // describe swap?

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
}
