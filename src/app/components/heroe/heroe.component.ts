import { Component, OnInit } from '@angular/core';
import {HeroesService, Iheroe} from './../../servicios/heroes.service';
import { HeroesComponent } from '../heroes/heroes.component';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {
  heroe: Iheroe ;
  index: number;
  constructor( private heroesService: HeroesService,
               private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      this.index = params.id;
      this.heroe = this.heroesService.getHeroe(this.index);
      console.log(this.heroe);
    });

  }

}
