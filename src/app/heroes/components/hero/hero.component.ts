import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;
  public nameNotYetChanged: boolean = true;
  public ageNotYetChanged: boolean = true;
  public strengths: string[] = ['speed', 'strength', 'climbing ability'];

  get capitalizedName(): string {
    return this.name.toLocaleUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'spiderman';
    this.nameNotYetChanged = false;
  }

  changeAge(): void {
    this.age = 25;
    this.ageNotYetChanged = false;
  }
}
