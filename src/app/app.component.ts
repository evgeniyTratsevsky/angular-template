import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { DemoTemplatesComponent } from './components/demo-templates/demo-templates.component';
import { EnvironmentInfoComponent } from './components/environment-info/environment-info.component';
import { ExamplesComponent } from './features/examples/examples.component';
import { HighlightDirective } from './directives/highlight.directive';
import { TooltipDirective } from './directives/tooltip.directive';
import { TruncatePipe } from './pipes/truncate.pipe';
import { UserComponent } from './user-module/user/user.component';
/**
 * Главный компонент приложения
 * Демонстрирует все основные концепции Angular
 */
@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    UserComponent,
    RouterOutlet,
    UserListComponent,
    DemoTemplatesComponent,
    EnvironmentInfoComponent,
    ExamplesComponent,
    HighlightDirective,
    TooltipDirective,
    TruncatePipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'Изучение Angular - Основы';
  activeTab = 'about';
  Date = Date; // Для использования в шаблоне

  // Данные для демонстрации пайпа
  longText = 'Angular - это платформа и фреймворк для создания одностраничных клиентских приложений с использованием HTML и TypeScript. Angular написан на TypeScript.';

  // Навигационные вкладки
  tabs = [
    { id: 'about', name: '📚 О проекте', description: 'Обзор основных концепций' },
    { id: 'components', name: '🎯 Компоненты', description: 'Components & Services' },
    { id: 'templates', name: '📄 Шаблоны', description: 'Templates & Binding' },
    { id: 'directives', name: '✨ Директивы', description: 'Кастомные директивы' },
    { id: 'pipes', name: '🔄 Пайпы', description: 'Трансформация данных' },
    { id: 'modules', name: '🧩 Модули', description: 'NgModules' },
    { id: 'environment', name: '🌍 Environment', description: 'Окружения' }
  ];

  setActiveTab(tabId: string): void {
    this.activeTab = tabId;
    console.log('Активная вкладка:', tabId);
  }
}
