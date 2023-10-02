import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [];

  onNewCharacter(character: Character): void {
    this.characters.push(character);
  }

  onCharacterDelete(characterUUID: string): void {
    this.characters = this.characters.filter((ch) => ch.id !== characterUUID);
  }
}
