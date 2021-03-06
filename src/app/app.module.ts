import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// rutas
import {APP_ROUNTING} from './app.routes';


// servicios
import { HeroesService } from './servicios/heroes.service';


// componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroeSearchComponent } from './components/heroe-search/heroe-search.component';
import { HeroeFichaComponent } from './components/heroe-ficha/heroe-ficha.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    HeroeSearchComponent,
    HeroeFichaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUNTING
  ],
  providers: [ HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
