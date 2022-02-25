import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais2.interface';

import { PaisService } from '../../services/pais.service';



@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})

export class VerPaisComponent implements OnInit {

  //TS Confis en mi = propiedad+ *' ! '*
  pais!: Country;

  constructor(
    private activateRoute:ActivatedRoute,
    private paisService:PaisService    
    ) { }

  ngOnInit(): void {

    this.activateRoute.params
    .pipe(  //param.id es reservado para indices, asi que se accede entre llaves ['id']especificado como un string
      //Desestructurado de objeto
      switchMap( ({ id }) => this.paisService.getPaisAlpha( id ) ),
      tap(console.log) //tap imprime el resultado de switchmap
    )
    .subscribe( pais => this.pais = pais );
    
  }

}
