import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

/**
 * DIRECTIVE - Директива для отображения подсказок
 */
@Directive({
  selector: '[appTooltip]',
  standalone: true
})
export class TooltipDirective {
  @Input() appTooltip = ''; // Текст подсказки
  private tooltipElement: HTMLElement | null = null;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  @HostListener('mouseenter') onMouseEnter() {
    if (!this.tooltipElement) {
      this.createTooltip();
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.removeTooltip();
  }

  private createTooltip() {
    // Создаем элемент подсказки
    this.tooltipElement = this.renderer.createElement('span');
    const text = this.renderer.createText(this.appTooltip);
    
    this.renderer.appendChild(this.tooltipElement, text);
    this.renderer.appendChild(document.body, this.tooltipElement);
    
    // Стилизация
    this.renderer.setStyle(this.tooltipElement, 'position', 'absolute');
    this.renderer.setStyle(this.tooltipElement, 'background-color', '#333');
    this.renderer.setStyle(this.tooltipElement, 'color', 'white');
    this.renderer.setStyle(this.tooltipElement, 'padding', '5px 10px');
    this.renderer.setStyle(this.tooltipElement, 'border-radius', '4px');
    this.renderer.setStyle(this.tooltipElement, 'font-size', '12px');
    this.renderer.setStyle(this.tooltipElement, 'z-index', '1000');
    
    // Позиционирование
    const hostPos = this.el.nativeElement.getBoundingClientRect();
    const top = hostPos.bottom + 5;
    const left = hostPos.left + hostPos.width / 2;
    
    this.renderer.setStyle(this.tooltipElement, 'top', `${top}px`);
    this.renderer.setStyle(this.tooltipElement, 'left', `${left}px`);
    this.renderer.setStyle(this.tooltipElement, 'transform', 'translateX(-50%)');
  }

  private removeTooltip() {
    if (this.tooltipElement) {
      this.renderer.removeChild(document.body, this.tooltipElement);
      this.tooltipElement = null;
    }
  }
}

