import { Component, OnInit } from '@angular/core';
import {HeroesService, Iheroe} from './../../servicios/heroes.service';
import { Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-heroe-search',
  templateUrl: './heroe-search.component.html'

})
export class HeroeSearchComponent implements OnInit {
  heroesTotal: Iheroe[];
  heroeSearch: Iheroe[] ;
  public busqueda: string;
  constructor(   private heroesService: HeroesService,
                 private router: Router,
                 private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  this.heroesTotal = this.heroesService.getHeroes();
  this.activatedRoute.params.subscribe( params => {
  this.busqueda = params.buscarTexto;
  this.heroeSearch = this.heroesService.buscarHeroe(params.buscarTexto);
  console.log(params.buscarTexto);
  });
  }

  buscarHeroe(name: string){
    this.router.navigate(['/heroe-search' , name]);
  }
  verHeroe(i: number){
   const heroe: Iheroe[] = this.heroesTotal.filter( hero => hero.nombre === this.heroeSearch[i].nombre);
   const index: number = this.heroesTotal.indexOf(heroe[0]);
   this.router.navigate(['/heroe' , index]);
  }

}
