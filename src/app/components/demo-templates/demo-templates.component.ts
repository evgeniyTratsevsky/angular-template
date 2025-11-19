import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightPipe } from '../../pipes/highlight.pipe';

/**
 * COMPONENT - Демонстрация различных возможностей шаблонов Angular
 */
@Component({
  selector: 'app-demo-templates',
  standalone: true,
  imports: [CommonModule, FormsModule, HighlightPipe],
  templateUrl: './demo-templates.component.html',
  styleUrls: ['./demo-templates.component.less']
})
export class DemoTemplatesComponent {
  // Данные для демонстрации
  title = 'Демонстрация шаблонов Angular';
  isVisible = true;
  counter = 0;
  inputValue = '';
  searchText = '';
  selectedColor = '#3f51b5';
  
  // Массив для *ngFor
  items = [
    { id: 1, name: 'Angular', icon: '🅰️' },
    { id: 2, name: 'TypeScript', icon: '📘' },
    { id: 3, name: 'RxJS', icon: '🔄' },
    { id: 4, name: 'HTML', icon: '📄' },
    { id: 5, name: 'CSS', icon: '🎨' }
  ];

  // Объект для демонстрации
  user = {
    firstName: 'Иван',
    lastName: 'Иванов',
    age: 25,
    isActive: true
  };

  // Методы для демонстрации Event Binding
  toggleVisibility(): void {
    this.isVisible = !this.isVisible;
  }

  increment(): void {
    this.counter++;
  }

  decrement(): void {
    this.counter--;
  }

  reset(): void {
    this.counter = 0;
  }

  onInputChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    console.log('Input изменен:', target.value);
  }

  onSubmit(): void {
    alert(`Форма отправлена! Значение: ${this.inputValue}`);
  }

  addItem(): void {
    const newId = Math.max(...this.items.map(i => i.id)) + 1;
    this.items.push({
      id: newId,
      name: `Новый элемент ${newId}`,
      icon: '✨'
    });
  }

  removeItem(id: number): void {
    this.items = this.items.filter(item => item.id !== id);
  }

  trackByFn(index: number, item: any): number {
    return item.id; // Для оптимизации *ngFor
  }
}

