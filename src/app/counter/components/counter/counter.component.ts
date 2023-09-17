import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>
    <button (click)="add(1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="add(-1)">-1</button>
  `,
  styleUrls: [],
})
export class CounterComponent {
  public counter: number = 10;

  add(quantity: number): void {
    this.counter += quantity;
  }

  reset(): void {
    this.counter = 0;
  }
}
