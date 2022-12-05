import { Component } from '@angular/core';
import { Player } from '../player';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent {
  players: Player[] = [];
  isAddPlayer = false;
  selectedPlayer: Player | null = null;

  addPlayer(player: Player) {
    this.players.push(player);
  }

  toggleAddPlayer(value: boolean) {
    this.isAddPlayer = value;
  }
}
