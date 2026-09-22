import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Directive, ElementRef, HostListener } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

@Directive({
  selector: '[appResaltarPokemon]',
  standalone: true
})
export class ResaltarPokemonDirective {

  private el = inject(ElementRef);

  colorBorde = input<string>('#FFFF00');

  @HostListener('mouseenter') onMouseEnter(){
    this.aplicarEfecto(`3px solid ${this.colorBorde()}`, `scale(1.03)`, `0 8px 16px rgba (0,0,0,0.15)`);

  }

  @HostListener('mouseenter') onMouseEnter(){
    this.aplicarEfecto(`3px solid ${this.colorBorde()}`, `scale(1.03)`, `0 8px 16px rgba (0,0,0,0.15)`);
    
  }
    aplicarEfecto(borde: String, escala: String, sombra: String){
      const elemento = this.el.nativeElement;
      elemento.style.border = borde;
      elemento.style.transform = escala;
      elemento.style.boxShadow = sombra;
      elemento.style.transition = 'all 0.25s ease-in-out'
    }
  }



