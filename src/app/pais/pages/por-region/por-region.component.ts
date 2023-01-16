import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PaisResponse } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button {
      margin-right: 5px;
    }
  `]
})
export class PorRegionComponent {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: PaisResponse[] = []

  constructor( private PaisService: PaisService){}

  getClaseCSS( region: string ){
    return (region === this.regionActiva) 
              ? 'btn btn-rpimary'
              : 'btn btn-outline-primary';
  }

  activarRegion( region: string){

    if(region === this.regionActiva){
      return ;
    }

    this.regionActiva = region;    
    this.paises = [];

    this.PaisService.buscarRegion( region )
      .subscribe( paises => this.paises = paises)
  }


}
