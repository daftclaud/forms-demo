import { Component } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
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

  constructor(private fb: FormBuilder) {}

  get points() {
    return this.players.reduce((acc, player) => acc + player.getStat('points'), 0)
  }

  addPlayer(player: Player) {
    this.players.push(player)
  }

  toggleAddPlayer(value: boolean) {
    this.isAddPlayer = value;
  }
}
