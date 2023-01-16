import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {
  
  @Output() onEnter: EventEmitter<string> = new EventEmitter();   //este es el evento que se va a emitir, cuando presionan enter en el input
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();//este evento es para que se emita cuando la persona deja de escribir en la caja de input de busqueda
  
  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();
  termino: string = '';

  ngOnInit() {
   this.debouncer
    .pipe(
      debounceTime( 300 ) //le digo que emita el valor a partir de los 300ms
    )
    .subscribe( valor => {
      this.onDebounce.emit( valor )
      
    })
  }

  buscar(){
    this.onEnter.emit ( this.termino );
  }

  teclaPresionada( ){
    this.debouncer.next( this.termino) ;
        
  }
}
