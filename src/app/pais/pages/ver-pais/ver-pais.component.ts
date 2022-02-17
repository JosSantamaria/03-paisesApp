import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { PaisService } from '../../services/pais.service';



@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {
  

  constructor(
    private activateRoute:ActivatedRoute,
    private paisService:PaisService    
    ) { }

  ngOnInit(): void {

    // this.activateRoute.params
    // .pipe(      //desestructurado de id dentro de arreglo country[]
    //   switchMap( (param) => this.paisService.getPaisAlpha( param[0] ) )
    // )
    // .subscribe( resp =>{
    //   console.log(resp)
    // });

    this.activateRoute.params
    .subscribe( ( {id} ) =>{
      console.log('Codigo Alpha: '+ id);

      this.paisService.getPaisAlpha( id )
      .subscribe( pais=>{
        console.log(pais);
      })

    });

  }

}
