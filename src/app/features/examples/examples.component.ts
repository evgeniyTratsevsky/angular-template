import { Component, OnInit, OnDestroy } from '@angular/core';

/**
 * Компонент для демонстрации работы с модулями
 * и жизненного цикла компонентов
 */
@Component({
  selector: 'app-examples',
  template: `
    <div class="examples-container">
      <h2>Feature Module Example</h2>
      <p>Этот компонент является частью отдельного feature модуля (ExamplesModule)</p>
      
      <div class="lifecycle-info">
        <h3>Жизненный цикл компонента:</h3>
        <ul>
          <li *ngFor="let hook of lifecycleHooks">
            {{ hook }}
          </li>
        </ul>
      </div>

      <div class="module-info">
        <h3>О модулях Angular:</h3>
        <p>Модули помогают организовать приложение в логические блоки</p>
        <p>Компонент времени: {{ currentTime | date:'HH:mm:ss' }}</p>
        <p>Счетчик обновлений: {{ updateCounter }}</p>
      </div>
    </div>
  `,
  styles: [`
    .examples-container {
      padding: 20px;
      background: #f5f5f5;
      border-radius: 8px;
      margin: 20px 0;
    }

    h2 {
      color: #673ab7;
      margin-top: 0;
    }

    h3 {
      color: #512da8;
      margin-top: 15px;
    }

    .lifecycle-info,
    .module-info {
      background: white;
      padding: 15px;
      margin: 15px 0;
      border-radius: 4px;
      border-left: 4px solid #673ab7;
    }

    ul {
      margin: 10px 0;
      padding-left: 20px;
    }

    li {
      margin: 5px 0;
      color: #666;
    }

    p {
      margin: 8px 0;
      line-height: 1.6;
    }
  `]
})
export class ExamplesComponent implements OnInit, OnDestroy {
  lifecycleHooks: string[] = [];
  currentTime = new Date();
  updateCounter = 0;
  private intervalId: any;

  constructor() {
    this.lifecycleHooks.push('1. constructor() вызван');
    console.log('ExamplesComponent: constructor');
  }

  ngOnInit(): void {
    this.lifecycleHooks.push('2. ngOnInit() вызван');
    console.log('ExamplesComponent: ngOnInit');
    
    // Запускаем таймер для демонстрации
    this.intervalId = setInterval(() => {
      this.currentTime = new Date();
      this.updateCounter++;
    }, 1000);
  }

  ngOnDestroy(): void {
    this.lifecycleHooks.push('3. ngOnDestroy() вызван');
    console.log('ExamplesComponent: ngOnDestroy');
    
    // Очищаем таймер при уничтожении компонента
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}

