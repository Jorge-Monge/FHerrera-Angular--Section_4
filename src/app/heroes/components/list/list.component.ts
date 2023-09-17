import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  heroNames: string[] = [
    'Spiderman',
    'Hulk',
    'Thor',
    'Ironman',
    'Elastic Woman',
  ];

  deletedHero: string = '';

  deleteLastHero(): void {
    this.deletedHero = this.heroNames.pop() || '';
    //this.heroNames = this.heroNames.slice(0, -1);
  }
}
