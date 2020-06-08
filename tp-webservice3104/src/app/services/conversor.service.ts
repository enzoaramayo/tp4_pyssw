import { Injectable, ɵɵresolveBody } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Conversion } from '../models/conversion';


@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  monedas: Array<any>;

  constructor(private _http: HttpClient) {
    this.monedas = [
      { 
      codigoMoneda: 'USD', imagen: './../../../assets/conversor/usd.png' },
    { codigoMoneda: 'EUR', imagen: './../../../assets/conversor/eur.png' },
    { codigoMoneda: 'JPY', imagen: './../../../assets/conversor/jpy.png' },
    { codigoMoneda: 'GBP', imagen: './../../../assets/conversor/gbp.png' },
    { codigoMoneda: 'CAD', imagen: './../../../assets/conversor/cad.png' },
    { codigoMoneda: 'AUD', imagen: './../../../assets/conversor/aud.png' },
    { codigoMoneda: 'CHF', imagen: './../../../assets/conversor/chf.png' },
    { codigoMoneda: 'HKD', imagen: './../../../assets/conversor/hkd.png' },
    { codigoMoneda: 'SEK', imagen: './../../../assets/conversor/sek.png' },
    { codigoMoneda: 'NZD', imagen: './../../../assets/conversor/nzd.png' }
    ];
  }
}
