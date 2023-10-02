import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-mainpage',
  templateUrl: './main-page.component.html',
})
export class MainpageComponent {
  constructor(private dbzService: DbzService) {}

  get characters(): Character[] {
    return this.dbzService.characters;
  }

  onCharacterDelete(id: string): void {
    this.dbzService.onCharacterDelete(id);
  }

  onNewCharacter(newCharacter: Character): void {
    this.dbzService.onNewCharacter(newCharacter);
  }
}
