import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  anio: number;
  constructor() {
    this.anio = new Date().getFullYear();
  }

  ngOnInit(): void {
  }

}
