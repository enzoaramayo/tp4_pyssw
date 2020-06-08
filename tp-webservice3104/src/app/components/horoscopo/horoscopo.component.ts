import { Component, OnInit } from '@angular/core';
import { SignoZodiacal } from 'src/app/models/signo-zodiacal';

import { HoroscopoService } from 'src/app/services/horoscopo.service';

@Component({
  selector: 'app-horoscopo',
  templateUrl: './horoscopo.component.html',
  styleUrls: ['./horoscopo.component.css']
})
export class HoroscopoComponent implements OnInit {

  signos: Array<any>;




  constructor(private horoscopoService: HoroscopoService) {
    this.signos = new Array<any>();
    this.getHoroscopos();
  }

  ngOnInit(): void {
  }

  getHoroscopos() {
    
    let listaSignos = this.horoscopoService.getNombreSignos();
    listaSignos.forEach(element => {
      
      let signo = new SignoZodiacal();
      signo.nameSigno = element.signo;
      signo.image = element.imagen;
      this.signos.push(signo);
    });

    this.signos.forEach(element => {
      this.horoscopoService.getHoroscopo(element).subscribe(
        (result) => {
          Object.assign(element, result);
        },
        error => { alert('Error en la petición'); }
      );
    });

    this.signos.forEach(element => {
      console.log(element);
    });
  }
}
