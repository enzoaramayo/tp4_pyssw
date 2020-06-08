import { Component, OnInit } from '@angular/core';
import { StatisticsService } from 'src/app/services/statistics.service';
import { Country } from 'src/app/models/country';
import { CorreoService } from 'src/app/services/correo.service';
import {Correo} from 'src/app/models/correo';

@Component({
  selector: 'app-coronavirus',
  templateUrl: './coronavirus.component.html',
  styleUrls: ['./coronavirus.component.css']
})
export class CoronavirusComponent implements OnInit {


  estadisticas: Array<Country>;
  paises: Array<any>;
  paisSeleccionado: string;
  opcionCasosConfirmados: boolean;
  opcionCurados: boolean;
  opcionFallecidos: boolean;
  email: Correo;

  constructor(private estadisticaService: StatisticsService, private correoService: CorreoService) {
    this.estadisticas = Array<Country>();
    this.paises = estadisticaService.getListaPaises();
    this.email = new Correo();
    this.opcionCasosConfirmados = false;
    this.opcionCurados = false;
    this.opcionFallecidos = false;
    this.obtenerEstadisticas();


  }

  ngOnInit(): void {
  }

  obtenerEstadisticas() {
    this.paises.forEach(element => {
      // tslint:disable-next-line: prefer-const
      let pais = new Country();
      Object.assign(pais, element);

      this.estadisticaService.getEstadistica(pais).subscribe(
        (result) => {
          pais.totalCases = result['Total Cases_text'];
          pais.totalDeaths = result['Total Deaths_text'];
          pais.totalRecovered = result['Total Recovered_text'];
          pais.newCases = result['New Cases_text'];
          pais.newDeaths = result['New Deaths_text'];
          this.estadisticas.push(pais);
        }
      );


    });

    this.estadisticas.forEach(element => {
      console.log(element);
    });
  }
  enviarCorreo() {

    this.estadisticas.forEach(element => {
      if (element.country === this.paisSeleccionado) {
        this.email.value = 'País: ' + element.country.toUpperCase() + '\n';
        if (this.opcionCasosConfirmados === true) {
          this.email.value += 'Casos Confirmados: ' + element.totalCases + '\n';
        }
        if (this.opcionCurados === true) {
          this.email.value += 'Total Curados: ' + element.totalRecovered + '\n';
        }
        if (this.opcionFallecidos === true) {
          this.email.value += 'Total Fallecidos: ' + element.totalDeaths + '\n';
        }
        this.correoService.sendEmail(this.email);
        this.resetForm();
      }
    });

  }

  resetForm() {
    this.opcionCasosConfirmados = false;
    this.opcionCurados = false;
    this.opcionFallecidos = false;
    this.paisSeleccionado = null;
    this.email = new Correo();
  }


}
