import { Component, OnInit } from '@angular/core';
import {HeroesService, Iheroe} from './../../servicios/heroes.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  heroes: Iheroe[] ;
  constructor(   private heroesService: HeroesService,
                 private router: Router) {
  }

  ngOnInit(): void {
  this.heroes = this.heroesService.getHeroes();
  console.log(this.heroes);
  }

  verHeroe(i: number) {
  this.router.navigate(['/heroe' , i]);
  }

}
