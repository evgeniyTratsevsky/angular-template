# 🅰️ Основы Angular - Руководство

Этот проект демонстрирует все основные концепции Angular Framework с подробными примерами и комментариями на русском языке.

## 📚 Содержание

- [Modules (Модули)](#modules-модули)
- [Components (Компоненты)](#components-компоненты)
- [Services (Сервисы)](#services-сервисы)
- [Pipes (Пайпы)](#pipes-пайпы)
- [Directives (Директивы)](#directives-директивы)
- [Templates (Шаблоны)](#templates-шаблоны)
- [Структура проекта](#структура-проекта)
- [Запуск проекта](#запуск-проекта)

---

## Modules (Модули)

### Что такое модуль?

**NgModule** - это класс с декоратором `@NgModule`, который организует связанные компоненты, директивы, пайпы и сервисы в логические блоки.

### Структура @NgModule

```typescript
@NgModule({
  declarations: [],  // Компоненты, директивы, пайпы этого модуля
  imports: [],       // Другие модули, которые нужны
  exports: [],       // Что экспортируем для других модулей
  providers: [],     // Сервисы (Dependency Injection)
  bootstrap: []      // Корневой компонент (только для AppModule)
})
export class MyModule { }
```

### Типы модулей

1. **Root Module** - главный модуль приложения (AppModule)
2. **Feature Module** - модули функциональности
3. **Shared Module** - модуль с общими компонентами
4. **Core Module** - синглтон сервисы (импортируется один раз)
5. **Routing Module** - конфигурация маршрутизации

### Пример в проекте

📁 `src/app/features/examples/examples.module.ts` - Feature модуль с примерами

### Standalone компоненты (Angular 14+)

В современных версиях Angular можно создавать компоненты без модулей:

```typescript
@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [CommonModule],
  template: '...'
})
export class MyComponent { }
```

---

## Components (Компоненты)

### Что такое компонент?

**Component** - это основной строительный блок Angular приложений. Компонент управляет частью экрана (view).

### Структура компонента

Компонент состоит из трех частей:

1. **TypeScript класс** - логика компонента
2. **HTML шаблон** - структура отображения
3. **CSS стили** - внешний вид

```typescript
@Component({
  selector: 'app-user-list',        // Как использовать: <app-user-list>
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.less']
})
export class UserListComponent implements OnInit {
  // Свойства
  users: User[] = [];
  
  // Конструктор для Dependency Injection
  constructor(private userService: UserService) {}
  
  // Lifecycle Hook
  ngOnInit(): void {
    this.loadUsers();
  }
  
  // Методы
  loadUsers(): void {
    this.users = this.userService.getUsers();
  }
}
```

### Lifecycle Hooks (Хуки жизненного цикла)

- `ngOnInit()` - инициализация после создания
- `ngOnChanges()` - изменение input свойств
- `ngOnDestroy()` - перед уничтожением компонента
- `ngAfterViewInit()` - после инициализации view
- `ngDoCheck()` - на каждую проверку изменений

### Примеры в проекте

📁 `src/app/components/user-list/` - Компонент списка пользователей  
📁 `src/app/components/demo-templates/` - Компонент демонстрации шаблонов

---

## Services (Сервисы)

### Что такое сервис?

**Service** - это класс для бизнес-логики, работы с данными и общения между компонентами.

### Для чего нужны сервисы?

- Получение/отправка данных через HTTP
- Бизнес-логика
- Общее состояние приложения
- Валидация
- Логирование

### Создание сервиса

```typescript
@Injectable({
  providedIn: 'root' // Сервис доступен во всем приложении
})
export class UserService {
  private users: User[] = [];
  
  getUsers(): User[] {
    return this.users;
  }
  
  addUser(user: User): void {
    this.users.push(user);
  }
}
```

### Dependency Injection

Сервисы внедряются через конструктор:

```typescript
constructor(private userService: UserService) {}
```

### Пример в проекте

📁 `src/app/services/user.service.ts` - Сервис для работы с пользователями

---

## Pipes (Пайпы)

### Что такое пайп?

**Pipe** - это способ трансформации данных в шаблонах.

### Встроенные пайпы Angular

```html
{{ 'angular' | uppercase }}           <!-- ANGULAR -->
{{ 'HELLO' | lowercase }}             <!-- hello -->
{{ today | date:'dd.MM.yyyy' }}       <!-- 18.11.2024 -->
{{ 1234.56 | currency:'RUB' }}        <!-- ₽1,234.56 -->
{{ 0.75 | percent }}                  <!-- 75% -->
{{ user | json }}                     <!-- JSON строка -->
```

### Создание кастомного пайпа

```typescript
@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number = 50): string {
    return value.length > limit 
      ? value.substring(0, limit) + '...'
      : value;
  }
}
```

Использование:

```html
{{ longText | truncate:30 }}
```

### Примеры в проекте

📁 `src/app/pipes/highlight.pipe.ts` - Подсветка текста  
📁 `src/app/pipes/truncate.pipe.ts` - Обрезание текста

---

## Directives (Директивы)

### Что такое директива?

**Directive** - это класс, который добавляет поведение элементам DOM.

### Типы директив

1. **Components** - компоненты (с шаблоном)
2. **Structural Directives** - структурные (*ngIf, *ngFor)
3. **Attribute Directives** - атрибутивные (изменяют вид/поведение)

### Структурные директивы (встроенные)

```html
<!-- *ngIf - условное отображение -->
<div *ngIf="isVisible">Виден только если isVisible = true</div>

<!-- *ngFor - циклы -->
<div *ngFor="let item of items; let i = index">
  {{ i + 1 }}. {{ item.name }}
</div>

<!-- *ngSwitch - переключатель -->
<div [ngSwitch]="status">
  <p *ngSwitchCase="'active'">Активен</p>
  <p *ngSwitchCase="'inactive'">Неактивен</p>
  <p *ngSwitchDefault>Неизвестно</p>
</div>
```

### Создание атрибутивной директивы

```typescript
@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  @Input() appHighlight = 'yellow';
  
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  
  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.appHighlight);
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'transparent');
  }
}
```

Использование:

```html
<div [appHighlight]="'yellow'">Наведите мышь</div>
```

### Примеры в проекте

📁 `src/app/directives/highlight.directive.ts` - Подсветка при наведении  
📁 `src/app/directives/tooltip.directive.ts` - Всплывающие подсказки

---

## Templates (Шаблоны)

### Основные концепции шаблонов

#### 1. Interpolation (Интерполяция)

```html
<p>Имя: {{ user.name }}</p>
<p>Возраст: {{ user.age }} лет</p>
<p>Результат: {{ 2 + 2 }}</p>
```

#### 2. Property Binding (Привязка свойств)

```html
<img [src]="imageUrl" [alt]="imageAlt">
<button [disabled]="isDisabled">Кнопка</button>
<div [style.color]="textColor">Цветной текст</div>
<p [class.active]="isActive">С динамическим классом</p>
```

#### 3. Event Binding (Привязка событий)

```html
<button (click)="handleClick()">Клик</button>
<input (input)="onInput($event)" (focus)="onFocus()">
```

#### 4. Two-Way Binding (Двусторонняя привязка)

```html
<input [(ngModel)]="name">
<p>Вы ввели: {{ name }}</p>
```

#### 5. Template Reference Variables

```html
<input #myInput type="text">
<button (click)="myInput.focus()">Фокус</button>
<p>Значение: {{ myInput.value }}</p>
```

#### 6. Safe Navigation Operator

```html
<p>{{ user?.address?.city }}</p>
```

### Пример в проекте

📁 `src/app/components/demo-templates/` - Полная демонстрация всех возможностей

---

## Структура проекта

```
ang-app/
├── src/
│   ├── app/
│   │   ├── components/           # Компоненты
│   │   │   ├── user-list/        # Список пользователей
│   │   │   └── demo-templates/   # Демо шаблонов
│   │   ├── services/             # Сервисы
│   │   │   └── user.service.ts   # Сервис пользователей
│   │   ├── pipes/                # Кастомные пайпы
│   │   │   ├── highlight.pipe.ts
│   │   │   └── truncate.pipe.ts
│   │   ├── directives/           # Кастомные директивы
│   │   │   ├── highlight.directive.ts
│   │   │   └── tooltip.directive.ts
│   │   ├── features/             # Feature модули
│   │   │   └── examples/
│   │   │       ├── examples.module.ts
│   │   │       └── examples.component.ts
│   │   ├── app.component.ts      # Главный компонент
│   │   ├── app.component.html
│   │   ├── app.component.less
│   │   ├── app.config.ts         # Конфигурация приложения
│   │   └── app.routes.ts         # Маршруты
│   ├── assets/                   # 📁 Ресурсы приложения
│   │   ├── data/                 # JSON данные
│   │   │   └── sample-data.json
│   │   ├── fonts/                # Шрифты
│   │   ├── icons/                # SVG иконки
│   │   │   ├── angular-logo.svg
│   │   │   └── typescript-logo.svg
│   │   ├── images/               # Изображения
│   │   ├── styles/               # LESS стили
│   │   │   ├── _variables.less   # Переменные (цвета, размеры)
│   │   │   ├── _mixins.less      # Миксины
│   │   │   ├── _utilities.less   # Utility классы
│   │   │   └── _animations.less  # Анимации
│   │   ├── README.md             # О структуре assets
│   │   └── USAGE.md              # Руководство по использованию
│   ├── styles.less               # Глобальные стили
│   └── main.ts                   # Точка входа
├── angular.json                  # Конфигурация Angular CLI
├── package.json                  # Зависимости
├── tsconfig.json                 # Конфигурация TypeScript
└── ANGULAR_BASICS_RU.md          # Это руководство
```

---

## Запуск проекта

### Установка зависимостей

```bash
npm install
```

### Запуск development сервера

```bash
npm start
# или
ng serve
```

Откройте браузер: `http://localhost:4200`

### Сборка для production

```bash
npm run build
# или
ng build
```

### Запуск тестов

```bash
npm test
# или
ng test
```

---

## 🎯 Навигация по приложению

После запуска приложения вы увидите 6 вкладок:

1. **📚 О проекте** - Обзор всех концепций
2. **🎯 Компоненты** - Демонстрация компонентов и сервисов
3. **📄 Шаблоны** - Все возможности шаблонов Angular
4. **✨ Директивы** - Кастомные директивы в действии
5. **🔄 Пайпы** - Встроенные и кастомные пайпы
6. **🧩 Модули** - Работа с NgModule

---

## 📖 Что изучено в этом проекте

### ✅ Modules
- Создание NgModule
- Типы модулей
- Standalone компоненты

### ✅ Components
- Создание компонентов
- Lifecycle hooks
- Component взаимодействие
- Input/Output

### ✅ Services
- Dependency Injection
- Создание сервисов
- Работа с Observable
- Общее состояние

### ✅ Pipes
- Встроенные пайпы
- Создание кастомных пайпов
- Параметры пайпов
- Чистые/нечистые пайпы

### ✅ Directives
- Структурные директивы (*ngIf, *ngFor)
- Атрибутивные директивы
- @HostListener
- Renderer2

### ✅ Templates
- Interpolation {{ }}
- Property Binding []
- Event Binding ()
- Two-way Binding [()]
- Template Reference Variables #
- Safe Navigation Operator ?.

---

## 🔗 Полезные ссылки

- [Официальная документация Angular](https://angular.io/docs)
- [Angular CLI](https://angular.io/cli)
- [RxJS](https://rxjs.dev/)
- [TypeScript](https://www.typescriptlang.org/)

---

## 📝 Заметки

- Проект использует Angular 19 с standalone компонентами
- Все примеры содержат подробные комментарии на русском языке
- Код оптимизирован для обучения и понимания
- Используется LESS для стилей

---

## 📁 Assets и стили

### Структура Assets

Папка `src/assets/` содержит все статические ресурсы:

- **data/** - JSON данные для демонстрации
- **fonts/** - Кастомные шрифты
- **icons/** - SVG иконки (Angular, TypeScript логотипы)
- **images/** - Изображения
- **styles/** - Переиспользуемые LESS стили

### Система стилей

Проект использует модульную систему LESS стилей:

#### 📐 Variables (_variables.less)
Переменные для:
- Цветов (primary, secondary, success, warning, danger)
- Градиентов
- Отступов (spacing)
- Радиусов скругления
- Теней
- Типографики
- Breakpoints

#### 🎨 Mixins (_mixins.less)
Переиспользуемые миксины:
- Flexbox (`.flex-center()`, `.flex-between()`)
- Кнопки (`.button-variant()`, `.button-gradient()`)
- Карточки (`.card-base()`, `.card-hover()`)
- Текст (`.text-ellipsis()`, `.text-gradient()`)
- Сетки (`.grid()`, `.grid-responsive()`)
- И многое другое...

#### 🔧 Utilities (_utilities.less)
Готовые CSS классы:
- Отступы: `.mt-lg`, `.mb-md`, `.p-xl`
- Текст: `.text-center`, `.text-bold`, `.text-primary`
- Flex: `.d-flex`, `.justify-between`, `.align-center`
- Фон: `.bg-gradient-primary`, `.bg-white`
- Hover: `.hover-lift`, `.hover-scale`

#### ✨ Animations (_animations.less)
CSS анимации:
- Появление: `fadeIn`, `slideInUp`
- Масштабирование: `scaleIn`, `pulse`
- Вращение: `spin`, `rotate`
- Прыжки: `bounce`
- Встряхивание: `shake`, `wiggle`

### Использование

```less
// В компоненте
@import '../../../assets/styles/variables';
@import '../../../assets/styles/mixins';

.my-component {
  padding: @spacing-lg;
  background: @primary-color;
  .card-base();
  .flex-center();
}
```

```html
<!-- В шаблоне -->
<div class="d-flex justify-between align-center gap-md">
  <span class="text-primary text-bold">Текст</span>
  <button class="bg-gradient-primary rounded shadow-lg">Кнопка</button>
</div>
```

Подробнее: `src/assets/USAGE.md`

---

**Создано для изучения основ Angular Framework** 🚀

