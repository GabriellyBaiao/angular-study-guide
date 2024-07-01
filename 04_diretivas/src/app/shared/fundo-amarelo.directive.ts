import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'p[fundoAmarelo]' // Atualizei o seletor para seguir a convenção do Angular
})
export class FundoAmareloDirective {

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2 // Atualizado Renderer para Renderer2
  ) {
    // Usando Renderer2 para definir a cor de fundo
    // console.log(this._elementRef);
    // this._elementRef.nativeElement.style.backgroundColor = 'yellow';
    this._renderer.setStyle(
      this._elementRef.nativeElement,
      'background-color',
      'yellow'
    );
  }
}
