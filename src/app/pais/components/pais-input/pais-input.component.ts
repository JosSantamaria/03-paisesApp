import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter(); //Creamos una salida ('@Outoput') que mandara los datos hacioa afuera del componente.
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();//evento que ayudara con busquedas en 'real time'.
  
  @Input() placeholder: string = '';

  termino:string = '';
  
  debouncer: Subject<string> = new Subject(); //El debouncer es un Observable especial

  ngOnInit(): void {
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe(valor =>{
      this.onDebounce.emit(valor);
    })
  }
// 
  buscar(){
    this.onEnter.emit(this.termino); 
  }

  //Funcion para la carga del debouncer
  teclaPresionada(){

  this.debouncer.next(this.termino);
  }


}
