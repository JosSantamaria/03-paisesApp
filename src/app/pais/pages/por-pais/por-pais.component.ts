import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country, Name } from '../../interfaces/pais.interface'; //Consideracion Reemplazo InTERFACE V2

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})

export class PorPaisComponent  
{

      termino: string = '';
      hayError:boolean = false;
      paises: Country[] = [];
      

      constructor(private paisService:PaisService){}

  buscar(termino:string)
  {
    this.hayError=false;
    this.termino = termino;

    this.paisService.buscarPais( termino)
      .subscribe(
      {
            next: (paises) => 
            { 
              
              console.log(paises);
              this.paises = paises;
              console.dir(paises);
              
            }
            ,
            error: (err) =>
            { 
              this.hayError=true;  
              this.paises = []; 
            }
      });
  }

  sugerencias(termino:string) {

    this.hayError = false;
    //ToDo: Crear sugerencias.
  }




  get pais(){
    return this.paisService.buscarPais;
}

}
