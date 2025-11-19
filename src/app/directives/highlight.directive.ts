import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

/**
 * DIRECTIVE - Директива для изменения поведения DOM элементов
 * Директивы бывают трех типов:
 * 1. Component - компоненты (с шаблоном)
 * 2. Structural - структурные (*ngIf, *ngFor)
 * 3. Attribute - атрибутивные (изменяют внешний вид или поведение)
 * 
 * Это атрибутивная директива
 */
@Directive({
  selector: '[appHighlight]', // Использование: <div appHighlight>
  standalone: true
})
export class HighlightDirective {
  // Input для настройки цвета подсветки
  @Input() appHighlight = 'yellow';
  @Input() defaultColor = 'transparent';

  constructor(
    private el: ElementRef, // Ссылка на DOM элемент
    private renderer: Renderer2 // Для безопасной работы с DOM
  ) {}

  // Событие при наведении мыши
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight);
  }

  // Событие при уходе мыши
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(this.defaultColor);
  }

  private highlight(color: string) {
    // Используем Renderer2 вместо прямого доступа к DOM
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'background-color 0.3s');
  }
}

