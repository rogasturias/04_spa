import { Component, OnInit } from '@angular/core';
import {HeroesService, Iheroe} from './../../servicios/heroes.service';
import { Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-heroe-search',
  templateUrl: './heroe-search.component.html'

})
export class HeroeSearchComponent implements OnInit {

  heroeSearch: Iheroe[] ;
  constructor(   private heroesService: HeroesService,
                 private router: Router,
                 private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  this.heroeSearch = this.heroesService.getHeroes();
  this.activatedRoute.params.subscribe( params => {
  this.heroeSearch = this.heroesService.buscarHeroe(params.buscarTexto);
  });
  }

  buscarHeroe(name: string){
    this.router.navigate(['/heroe-search/' + name]);
  }

}
