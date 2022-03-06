import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais2.interface'; //Consideracion Reemplazo InTERFACE V2

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  
  private apiUrl:string ='https://restcountries.com/v2';

  //Optimizing HTTP RESPONSE
  get httpParams(){
    return new HttpParams().set('fields','name,flag,capital,alpha2Code,languages,population');
  }

  constructor(private http: HttpClient) { }

  buscarPais(termino: string ): Observable<Country[]>{

    const url = `${this.apiUrl}/name/${ termino }`;
    return this.http.get<Country[]>(url,{ params:this.httpParams });

  }

  buscarCapital(termino: string ): Observable<Country[]>{

    const url = `${this.apiUrl}/capital/${ termino }`;
    return this.http.get<Country[]>(url,{ params:this.httpParams });

  }

  getPaisAlpha(id: string ): Observable<Country[]>{

    const url = `${this.apiUrl}/alpha/${ id }`;
    return this.http.get<Country[]>(url);

  } 

  getPaises(region: string ): Observable<Country[]>{
    

    const url = `${this.apiUrl}/regionalbloc/${ region }`;
    return this.http.get<Country[]>(url,{ params:this.httpParams }); 
  } 

}
