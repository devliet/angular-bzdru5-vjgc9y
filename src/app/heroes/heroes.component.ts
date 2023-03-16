import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
@Component({
  selector: 'appHeroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  constructor(private heroService: HeroService) {}
  heroes: Hero[] = [];
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  //getHeroes(): void {
  //  this.heroes = this.heroService.getHeroes();
  //}
  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe((heroes2) => (this.heroes = heroes2));
  }
  ngOnInit(): void {
    this.getHeroes();
  }
}
