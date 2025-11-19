import { Pipe, PipeTransform } from '@angular/core';

/**
 * PIPE - Кастомный пайп для подсветки текста
 * Пайпы используются для трансформации данных в шаблонах
 * Примеры встроенных пайпов: date, uppercase, lowercase, currency, json
 */
@Pipe({
  name: 'highlight',
  standalone: true // Standalone pipe для Angular 19+
})
export class HighlightPipe implements PipeTransform {
  /**
   * Подсвечивает искомый текст в строке
   * @param value - исходная строка
   * @param searchText - текст для поиска
   * @param className - CSS класс для подсветки (по умолчанию 'highlight')
   */
  transform(value: string, searchText: string, className: string = 'highlight'): string {
    if (!searchText || !value) {
      return value;
    }

    // Экранирование специальных символов regex
    const escapedSearch = searchText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escapedSearch, 'gi');

    // Оборачиваем найденный текст в span с классом
    return value.replace(regex, match => `<span class="${className}">${match}</span>`);
  }
}

