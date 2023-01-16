import { Component, Input } from '@angular/core';
import { PaisResponse } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html'
})
export class PaisTablaComponent {

  @Input() paises: PaisResponse[] = [];

  constructor(){}
}
