import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais2.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
    button{
      margin-right: 5px;
    }
    `
  ]
})
export class PorRegionComponent  {

  regiones: string[]=['EU','EFTA','CARICOM', 'PA', 'AU','USAN','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC'];

  regionActiva: string = '';
  paises:Country[]=[];

  constructor(private paisService:PaisService) { }

    //Se pasa la logica al lado del componente a travez de una funcion que evalua las clases CSS de un boton en este caso.
    getClaseCSS(region:string):string{
      return (region === this.regionActiva) ? 'btn btn-primary':'btn btn-outline-primary'
    }

  activarRegion( region:string ){
    if(region === this.regionActiva){return;} //Si llamamos a la region con el boton dos veces, no recargar datos.
    this.regionActiva = region
    this.paises = [];
    //Con el subscribe mantenemos la escucha/monitorio de la url y cambios.
    this.paisService.getPaises(region)
      .subscribe(paises => this.paises = paises) //Paises usado en el front como [paises]="paises" como parametro de app-tabla
  }

}
