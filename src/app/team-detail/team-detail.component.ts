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

  addPlayer(player: Player) {
    this.players.push(player);
    this.isAddPlayer = false;
  }

  toggleAddPlayer(value: boolean) {
    this.isAddPlayer = value;
  }
}
