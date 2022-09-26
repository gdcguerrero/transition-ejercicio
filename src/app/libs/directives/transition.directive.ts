import { Directive, ElementRef, Input, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appTransition]'
})
export class TransitionDirective{

  @Input('entrada') entrada: string ='';
  
  @HostListener('mouseenter') mouseE (){ //entra al elemeto cabia
    this.element.nativeElement.style.transition = this.entrada;
  }

  constructor(private element: ElementRef) {    
  }

  ngOnInit(): void {
    
  }
}
