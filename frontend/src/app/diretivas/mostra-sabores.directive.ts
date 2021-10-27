import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMostraSabores]'
})
export class MostraSaboresDirective {

  constructor(private _elementRef: ElementRef, evento: Event) {
    //console.log(this._elementRef)
    this.mostraElemento(evento)
   }

   mostraElemento(evento: Event){
    var salgada = (<HTMLInputElement>document.getElementById('calcula_valor-sim')).checked
     console.log(salgada)
  
     
     if(salgada === true){
      this._elementRef.nativeElement.hidden = false
     }
     
    
    console.log(this._elementRef)
   }
  
}
