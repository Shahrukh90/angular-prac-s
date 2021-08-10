import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  //in this eg we changed the color of the html directive through custom directives
  constructor(private el:ElementRef) { 
    el.nativeElement.style.color='green'
  }

}
