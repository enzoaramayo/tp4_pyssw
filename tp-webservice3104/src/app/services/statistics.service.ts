import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  paises: Array<any>

  constructor(private _http: HttpClient) {
    this.paises = [{ country: 'world', image: './../../../assets/paises/mundo.png' },
    { country: 'argentina', image: './../../../assets/paises/argentina.png' },
    { country: 'brazil', image: './../../../assets/paises/brasil.png' },
    { country: 'russia', image: './../../../assets/paises/rusia.png' },
    { country: 'spain', image: './../../../assets/paises/españa.png' },
    { country: 'usa', image: './../../../assets/paises/estadosunidos.png' },
    { country: 'italy', image: './../../../assets/paises/italia.png' },
    { country: 'france', image: './../../../assets/paises/francia.png' },
    { country: 'germany', image: './../../../assets/paises/alemania.png' },
    { country: 'turkey', image: './../../../assets/paises/turquia.png' }
    ];
  }

  public getListaPaises(): Array<any> {
    return this.paises;
  }

  public getEstadistica(pais: Country): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-host': 'covid-19-tracking.p.rapidapi.com',
        'x-rapidapi-key': '2c9cd29fc6msh3ba6f1ff811e6e5p1cdb60jsn151f0ed72ec0'
      })
    };

    return this._http.get('https://covid-19-tracking.p.rapidapi.com/v1/' + pais.country, httpOptions);
  }

}
