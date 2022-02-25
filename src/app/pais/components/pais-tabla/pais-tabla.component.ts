import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/pais2.interface'; //Consideracion Reemplazo InTERFACE V2


@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styles: [
  ]
})



export class PaisTablaComponent  {

  @Input() paises: Country[] = [];

  constructor() { }

  

}
