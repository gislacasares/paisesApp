import { Component } from '@angular/core';
import { PaisResponse } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent {

  termino: string = ''; //el término que busca la persona
  hayError: boolean = false;
  paises: PaisResponse[] = [];

  constructor( private paisService: PaisService){ }

  buscar( termino: string){

    this.hayError=false;
    this.termino = termino;
    
    this.paisService.buscarCapital( termino )
      .subscribe( paises => { //esto se ejecuta si devuelve resultados, sino va por el lado del error
        console.log(paises)
        this.paises = paises;
            
      }, (err) =>{
        this.hayError=true;
        this.paises = [];
      } );
  }

}
