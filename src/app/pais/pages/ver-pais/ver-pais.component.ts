import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators';
import { PaisResponse } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit{

  pais!: PaisResponse; //le digo con ! que puede ser nulo

  constructor( 
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
    ){ }

  ngOnInit(): void {
    
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.paisService.getPaisPorCodigo( id )  ),
        tap( console.log )
      )
      .subscribe( pais => this.pais = pais );

    // this.activatedRoute.params
    //   .subscribe( ( {id} ) => {
    //     console.log(id);

    //     this.paisService.getPaisPorCodigo( id )
    //       .subscribe( pais => {
    //         console.log(pais);          
    //     })
        
    //   }
    // )
  }
}
