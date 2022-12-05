import { Component, Input } from '@angular/core';
import { Player, PlayerStats } from '../player';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent {
  @Input('player') player: Player | null = null;

  increment(statName: keyof PlayerStats, value: number) {
    if (this.player) {
      this.player.incrementStat(statName, value);
    }
  }
}
