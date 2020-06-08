import { Injectable, ɵɵresolveBody } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignoZodiacal } from '../models/signo-zodiacal';

@Injectable({
  providedIn: 'root'
})
export class HoroscopoService {

  signos: Array<any>;

  constructor(private _http: HttpClient) {
    this.signos = [{ signo: 'aquarius', imagen: './../../../assets/acuario.jpg' },
    { signo: 'pisces', imagen: './../../../assets/piscis.jpg' },
    { signo: 'aries', imagen: './../../../assets/aries.jpg' },
    { signo: 'taurus', imagen: './../../../assets/tauro.jpg' },
    { signo: 'gemini', imagen: './../../../assets/gemini.jpg' },
    { signo: 'cancer', imagen: './../../../assets/cancer.jpg' },
    { signo: 'leo', imagen: './../../../assets/leo.jpg' },
    { signo: 'virgo', imagen: './../../../assets//virgo.jpg' },
    { signo: 'libra', imagen: './../../../assets/libra.jpg' },
    { signo: 'scorpio', imagen: './../../../assets/scorpio.jpg' },
    { signo: 'sagittarius', imagen: './../../../assets/sagitario.jpg' },
    { signo: 'capricorn', imagen: './../../../assets/capricornio.jpg' }
    ];
  }

  public getHoroscopo(signo: SignoZodiacal): Observable<any> {


    const httpOptions = {
      headers: new HttpHeaders({
        "x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
        "x-rapidapi-key": "53fbd7df1bmshfbc9e82c2eceae3p152332jsn1989bacfc48e",
        "content-type": "application/x-www-form-urlencoded"
      })
    };

    
    return this._http.post('https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=' + signo.nameSigno + '&day=today', ɵɵresolveBody, httpOptions);
  }

  getNombreSignos() {
    return this.signos;
  }

}
