import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Iheroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-heroe-ficha',
  templateUrl: './heroe-ficha.component.html'
})
export class HeroeFichaComponent implements OnInit {
  @Input() heroe: Iheroe;
  @Input() index: number;

  @Output() heroeSeleccionado: EventEmitter<number>;
  constructor(private router: Router) {
    this.heroeSeleccionado = new EventEmitter();
  }
  ngOnInit(): void {
  }
  verHeroe(){
   this.heroeSeleccionado.emit(this.index);
  }
}
