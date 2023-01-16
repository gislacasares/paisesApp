import { Component } from '@angular/core';
import { PaisResponse } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles:[
    `
      li{
        cursor: pointer;
      }
    `
  ]
})
export class PorPaisComponent {

  termino: string = ''; //el término que busca la persona
  hayError: boolean = false;
  paises: PaisResponse[] = [];
  paisesSugeridos: PaisResponse[] = [];
  mostrarSugerencias: boolean = false;

  constructor( private paisService: PaisService){ }

  buscar( termino: string){
    this.mostrarSugerencias = false;
    this.hayError=false;
    this.termino = termino;
    
    this.paisService.buscarPais( termino )
      .subscribe( paises => { //esto se ejecuta si devuelve resultados, sino va por el lado del error
        console.log(paises)
        this.paises = paises;
            
      }, (err) =>{
        this.hayError=true;
        this.paises = [];
      } );
  }

  sugerencias( termino: string){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias=true;

    this.paisService.buscarPais( termino )
      .subscribe( paises => this.paisesSugeridos = paises.splice(0,10),
                  (err) => this.paisesSugeridos = []
      )

    

  }

  buscarSugerido( termino: string ){
    this.buscar( termino );
  }
}
