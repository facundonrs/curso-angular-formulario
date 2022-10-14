import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTituloStyle]'
})
export class TituloStyleDirective {

  constructor(
    private elemento: ElementRef,
    private renderer: Renderer2,
  ) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.elemento.nativeElement, 'font-size', '20px');
  }
}
