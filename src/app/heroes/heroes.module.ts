import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeroComponent } from './components/hero/hero.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [HeroComponent, ListComponent],
  imports: [BrowserModule],
  exports: [HeroComponent, ListComponent],
})
export class HeroesModule {}
