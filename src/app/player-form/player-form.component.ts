import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Player, PlayerPositions } from '../player';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css'],
})
export class PlayerFormComponent {
  playerForm = this.fb.group({
    name: this.fb.control<string | null>(null, Validators.required),
    position: this.fb.control<PlayerPositions | null>(null, Validators.required),
  });

  @Output('onCreate') onCreate = new EventEmitter<Player>();

  constructor(private fb: FormBuilder) {
    console.log(this.playerForm);
  }

  get positions() {
    return Player.listPositionNames();
  }

  getPosition(name: string) {
    return Player.getPositionFromName(name as PlayerPositions);
  }

  submit() {
    const { name, position } = this.playerForm.value;
    if (name && position) {
      this.onCreate.emit(new Player(name, position));
    }
  }
}
