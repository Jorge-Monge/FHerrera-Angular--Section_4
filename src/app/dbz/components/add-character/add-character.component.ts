import { Component, EventEmitter, Output } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css'],
})
export class AddCharacterComponent {
  public character: Character = {
    id: '',
    name: '',
    power: 0,
  };

  emitCharacter(): void {
    if (this.character.name.length === 0) return;
    this.onNewCharacter.emit({
      id: uuid(),
      name: this.character.name,
      power: this.character.power,
    });
    this.character = { id: '', name: '', power: 0 };
  }

  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();
}
