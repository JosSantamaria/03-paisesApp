import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais2.interface'; //Consideracion Reemplazo InTERFACE V2

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  `
  li{cursor:pointer;}
  `
  ]
})

export class PorPaisComponent  
{

      termino: string = '';
      hayError:boolean = false;
      paises: Country[] = [];
      paisesSugeridos: Country[] = []
      mostrarSugerencia: boolean = false;

      constructor(private paisService:PaisService){}

  buscar(termino:string)
  {
    this.mostrarSugerencia = false;
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
    this.termino = termino;
    this.hayError = false;
    this.mostrarSugerencia = true;

    //ToDo: Crear sugerencias.
    this.paisService.buscarPais( termino )
    .subscribe(
      {
        next:(paises) => 
        {
          this.paisesSugeridos = paises.splice(0,5)
        }
        ,
        error:
        (err)=> 
        {
          this.paisesSugeridos = []
        }
      });

  }




  get pais(){
    return this.paisService.buscarPais;
}


  buscarSugerido( termino:string ){
    this.buscar(termino);

  }

}
