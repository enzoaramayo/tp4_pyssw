import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { CotizacionesComponent } from './components/cotizaciones/cotizaciones.component';
import { HoroscopoComponent } from './components/horoscopo/horoscopo.component';
import { CoronavirusComponent } from './components/coronavirus/coronavirus.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    NoticiasComponent,
    CotizacionesComponent,
    HoroscopoComponent,
    CoronavirusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
