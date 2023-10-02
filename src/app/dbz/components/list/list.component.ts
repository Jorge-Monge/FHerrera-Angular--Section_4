import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [];

  /* Click events on the 'Delete' button invoke this function.
    This function, in turn, emit an event with a payload of 'character.id'.
    The event is handled by the parent component. */
  deleteCharacter(characterId: string): void {
    this.onCharacterDelete.emit(characterId);
  }

  @Output()
  onCharacterDelete: EventEmitter<string> = new EventEmitter();
}
