import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from "./components/layout/footer/footer.component";
import { HeaderComponent } from "./components/layout/header/header.component";

import { InicioComponent } from "./components/inicio/inicio.component";
import { NoticiasComponent } from "./components/noticias/noticias.component";
import { CotizacionesComponent } from "./components/cotizaciones/cotizaciones.component";
import { HoroscopoComponent } from "./components/horoscopo/horoscopo.component";
import { CoronavirusComponent } from "./components/coronavirus/coronavirus.component";


const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  
   { path: 'inicio', component: InicioComponent },

   { path: 'noticias', component: NoticiasComponent },
   { path: 'cotizaciones', component: CotizacionesComponent },
   { path: 'horoscopo', component: HoroscopoComponent },
   { path: 'coronavirus', component: CoronavirusComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
