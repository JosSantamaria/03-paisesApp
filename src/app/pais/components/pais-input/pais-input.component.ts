import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent  {

  termino:string = '';

  @Output() onEnter: EventEmitter<string> = new EventEmitter(); //Creamos una salida ('@Outoput') que mandara los datos hacioa afuera del componente.

  buscar(){
    
    this.onEnter.emit(this.termino); 
  }
}
