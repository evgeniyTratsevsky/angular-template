import { Pipe, PipeTransform } from '@angular/core';

/**
 * PIPE - Пайп для обрезания длинного текста
 */
@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {
  /**
   * Обрезает текст до указанной длины
   * @param value - исходный текст
   * @param limit - максимальная длина (по умолчанию 50)
   * @param trail - окончание (по умолчанию '...')
   */
  transform(value: string, limit: number = 50, trail: string = '...'): string {
    if (!value) {
      return '';
    }
    
    return value.length > limit 
      ? value.substring(0, limit) + trail 
      : value;
  }
}

