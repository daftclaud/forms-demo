export interface PlayerStats {
  points: number;
  rebounds: number;
  assists: number;
  blocks: number;
  steals: number;
  turnovers: number;
}

export type PlayerPosition = 'PG' | 'SG' | 'SF' | 'PF' | 'C'

export class Player {
  stats: PlayerStats = {
    points: 0,
    rebounds: 0,
    assists: 0,
    blocks: 0,
    steals: 0,
    turnovers: 0,
  };
  constructor(public name: string, public position: PlayerPosition) {}

  incrementStat(statName: keyof PlayerStats, amount: number) {
    this.stats[statName] += amount;
  }

  getStat(statName: keyof PlayerStats) {
    return this.stats[statName];
  }

  listStats(): (keyof PlayerStats)[] {
    return Object.keys(this.stats) as (keyof PlayerStats)[];
  }
}
