import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaisResponse } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})

export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  get httpParams(){
    return  new HttpParams().set( 'fields', 'name,capital,flag,population,alpha2Code');
  }

  constructor( private http: HttpClient) { }

  buscarPais( termino: string): Observable<PaisResponse[]>{

    const url = `${ this.apiUrl}/name/${ termino }`;
    return this.http.get<PaisResponse[]>( url, {params: this.httpParams} );
  }

  buscarCapital( termino: string): Observable<PaisResponse[]>{

    const url = `${ this.apiUrl}/capital/${ termino }`;
    return this.http.get<PaisResponse[]>( url, {params: this.httpParams} );
  }

  getPaisPorCodigo( id: string): Observable<PaisResponse>{

    const url = `${ this.apiUrl}/alpha/${ id }`;
    return this.http.get<PaisResponse>( url );
  }

  buscarRegion( region: string): Observable<PaisResponse[]>{

    const url = `${ this.apiUrl}/region/${ region }`;
    return this.http.get<PaisResponse[]>( url, { params: this.httpParams } )          
  }

}
