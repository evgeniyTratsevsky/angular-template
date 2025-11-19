import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/**
 * MODULE - Модуль Angular
 *
 * NgModule - это класс с декоратором @NgModule, который организует:
 * 1. declarations - компоненты, директивы, пайпы модуля
 * 2. imports - другие модули, которые нужны этому модулю
 * 3. exports - что доступно другим модулям
 * 4. providers - сервисы, доступные для Dependency Injection
 * 5. bootstrap - корневой компонент (только для AppModule)
 *
 * Типы модулей:
 * - Root Module (AppModule) - главный модуль приложения
 * - Feature Module - модули для группировки функциональности
 * - Shared Module - общие компоненты, директивы, пайпы
 * - Core Module - синглтон сервисы (импортируется один раз)
 * - Routing Module - конфигурация роутинга
 *
 * Примечание: В Angular 19+ появились standalone компоненты,
 * которые могут работать без модулей, но модули все еще полезны
 * для организации больших приложений.
 */
@NgModule({
  declarations: [
    // Здесь объявляются компоненты, директивы и пайпы,
    // которые принадлежат этому модулю
  ],
  imports: [
    // Импорт других модулей
    CommonModule // Для *ngIf, *ngFor, pipes и т.д.
  ],
  exports: [
    // Что экспортируем для использования в других модулях
  ],
  providers: [
    // Здесь можно указать сервисы, которые будут доступны
    // только в этом модуле и его дочерних компонентах
    // Пример: { provide: SERVICE_TOKEN, useClass: ServiceClass }
  ]
})
export class ExamplesModule {
  constructor() {
    console.log('ExamplesModule загружен');
  }
}

