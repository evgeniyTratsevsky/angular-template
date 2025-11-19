# 📁 Assets - Руководство по использованию

Полное руководство по использованию ресурсов и стилей в проекте.

## 📂 Структура

```
assets/
├── data/               # JSON данные
│   └── sample-data.json
├── fonts/              # Шрифты
│   └── .gitkeep
├── icons/              # SVG иконки
│   ├── angular-logo.svg
│   └── typescript-logo.svg
├── images/             # Изображения
│   └── .gitkeep
├── styles/             # LESS стили
│   ├── _variables.less    # Переменные
│   ├── _mixins.less       # Миксины
│   ├── _utilities.less    # Утилиты
│   └── _animations.less   # Анимации
├── README.md
└── USAGE.md (этот файл)
```

---

## 🎨 Использование стилей

### Переменные (_variables.less)

Все переменные цветов, размеров, отступов и других параметров.

#### Пример использования в компонентах:

```less
// В файле component.less
@import '../../../assets/styles/variables';

.my-component {
  color: @primary-color;
  padding: @spacing-md;
  border-radius: @border-radius-md;
  box-shadow: @shadow-md;
}
```

#### Доступные переменные:

**Цвета:**
- `@primary-color` - #667eea
- `@secondary-color` - #764ba2
- `@success-color` - #4caf50
- `@warning-color` - #ff9800
- `@danger-color` - #f44336
- `@info-color` - #2196f3

**Градиенты:**
- `@gradient-primary`
- `@gradient-success`
- `@gradient-warning`
- `@gradient-danger`

**Отступы:**
- `@spacing-xs` - 4px
- `@spacing-sm` - 8px
- `@spacing-md` - 16px
- `@spacing-lg` - 24px
- `@spacing-xl` - 32px

**Радиусы:**
- `@border-radius-sm` - 4px
- `@border-radius-md` - 8px
- `@border-radius-lg` - 12px
- `@border-radius-xl` - 16px

**Тени:**
- `@shadow-sm` - легкая тень
- `@shadow-md` - средняя тень
- `@shadow-lg` - большая тень
- `@shadow-xl` - экстра тень

---

### Миксины (_mixins.less)

Переиспользуемые наборы стилей.

#### Примеры использования:

```less
@import '../../../assets/styles/mixins';

.my-card {
  .card-base();        // Базовые стили карточки
  .card-hover();       // Эффект при наведении
}

.my-button {
  .button-variant(@primary-color);  // Кнопка с цветом
}

.centered-content {
  .flex-center();      // Центрирование flex
}

.gradient-text {
  .text-gradient(@gradient-primary);  // Градиентный текст
}

.responsive-grid {
  .grid-responsive(250px, @spacing-md);  // Адаптивная сетка
}
```

#### Популярные миксины:

**Flexbox:**
- `.flex-center()` - центрирование
- `.flex-between()` - space-between
- `.flex-column()` - колонка
- `.flex-center-column()` - центрированная колонка

**Кнопки:**
- `.button-base()` - базовая кнопка
- `.button-variant(@color)` - кнопка с цветом
- `.button-gradient(@gradient)` - градиентная кнопка

**Карточки:**
- `.card-base()` - базовая карточка
- `.card-hover()` - hover эффект

**Текст:**
- `.text-ellipsis()` - многоточие
- `.text-clamp(2)` - обрезание на N строк
- `.text-gradient()` - градиентный текст

**Позиционирование:**
- `.absolute-center()` - абсолютное центрирование
- `.absolute-full()` - на весь контейнер

**Сетки:**
- `.grid(@columns, @gap)` - фиксированная сетка
- `.grid-responsive(@min-width, @gap)` - адаптивная

---

### Утилиты (_utilities.less)

Готовые CSS классы для быстрого применения.

#### Примеры использования в HTML:

```html
<!-- Отступы -->
<div class="mt-lg mb-md p-xl">Контент</div>

<!-- Текст -->
<p class="text-center text-bold text-primary">Заголовок</p>

<!-- Flex -->
<div class="d-flex justify-between align-center gap-md">
  <span>Текст</span>
  <button>Кнопка</button>
</div>

<!-- Фон и тени -->
<div class="bg-gradient-primary shadow-lg rounded">Карточка</div>

<!-- Hover эффекты -->
<div class="hover-lift">Поднимается при наведении</div>
```

#### Категории утилит:

**Margin/Padding:**
- `.mt-{size}`, `.mb-{size}`, `.ml-{size}`, `.mr-{size}` - margins
- `.pt-{size}`, `.pb-{size}`, `.pl-{size}`, `.pr-{size}` - paddings
- Размеры: `0, xs, sm, md, lg, xl`

**Текст:**
- `.text-left`, `.text-center`, `.text-right`
- `.text-bold`, `.text-medium`, `.text-normal`
- `.text-xs`, `.text-sm`, `.text-md`, `.text-lg`, `.text-xl`
- `.text-primary`, `.text-success`, `.text-danger`, и т.д.

**Flex:**
- `.d-flex`, `.flex-column`, `.flex-row`
- `.justify-center`, `.justify-between`, `.justify-around`
- `.align-center`, `.align-start`, `.align-end`
- `.gap-xs`, `.gap-sm`, `.gap-md`, `.gap-lg`

**Фон:**
- `.bg-white`, `.bg-light`, `.bg-gray`, `.bg-dark`
- `.bg-primary`, `.bg-success`, `.bg-warning`, `.bg-danger`
- `.bg-gradient-primary`, `.bg-gradient-success`

**Тени:**
- `.shadow-none`, `.shadow-sm`, `.shadow`, `.shadow-lg`, `.shadow-xl`

**Границы:**
- `.border`, `.border-0`
- `.rounded`, `.rounded-sm`, `.rounded-lg`, `.rounded-full`

**Hover:**
- `.hover-opacity` - меняет прозрачность
- `.hover-scale` - увеличивает размер
- `.hover-lift` - поднимает элемент

---

### Анимации (_animations.less)

Готовые CSS анимации.

#### Примеры использования:

```html
<!-- Готовые классы -->
<div class="animate-fade-in">Плавное появление</div>
<div class="animate-slide-in-up">Выезд снизу</div>
<div class="animate-bounce">Прыгает</div>
<div class="animate-pulse">Пульсирует</div>
<div class="animate-spin">Вращается</div>

<!-- С задержкой -->
<div class="animate-fade-in animation-delay-2">
  Появится с задержкой
</div>

<!-- Бесконечная анимация -->
<div class="animate-pulse animation-infinite">
  Пульсирует постоянно
</div>
```

#### Кастомное использование в LESS:

```less
.my-element {
  animation: fadeInUp 0.5s ease-out;
}

.loading-spinner {
  animation: spin 1s linear infinite;
}

.glow-effect {
  animation: glow 2s ease-in-out infinite;
}
```

#### Доступные анимации:

**Появление:**
- `fadeIn`, `fadeOut`
- `fadeInUp`, `fadeInDown`, `fadeInLeft`, `fadeInRight`
- `slideInUp`, `slideInDown`, `slideInLeft`, `slideInRight`

**Масштабирование:**
- `scaleIn`, `scaleOut`
- `pulse`, `heartbeat`

**Вращение:**
- `rotate`, `rotateIn`, `spin`

**Прыжки:**
- `bounce`, `bounceIn`

**Встряхивание:**
- `shake`, `shakeY`, `wiggle`

**Переворот:**
- `flipX`, `flipY`

**Специальные:**
- `glow` - свечение
- `gradientShift` - движение градиента
- `skeleton` - скелетон загрузка

---

## 🖼️ Использование изображений

### В HTML шаблонах:

```html
<!-- Простое изображение -->
<img src="assets/images/logo.png" alt="Логотип">

<!-- С привязкой -->
<img [src]="imagePath" alt="Динамическое изображение">
```

### В TypeScript:

```typescript
export class MyComponent {
  logoPath = 'assets/images/logo.png';
  
  getImagePath(name: string): string {
    return `assets/images/${name}.png`;
  }
}
```

### В LESS/CSS:

```less
.background {
  background-image: url('/assets/images/background.jpg');
  background-size: cover;
}

.logo {
  content: url('/assets/images/logo.svg');
}
```

---

## 🎯 Использование иконок (SVG)

### В HTML:

```html
<!-- Встроенный SVG -->
<img src="assets/icons/angular-logo.svg" alt="Angular" width="50">

<!-- С привязкой -->
<img [src]="'assets/icons/' + iconName + '.svg'" alt="Icon">
```

### В TypeScript:

```typescript
export class MyComponent {
  icons = {
    angular: 'assets/icons/angular-logo.svg',
    typescript: 'assets/icons/typescript-logo.svg'
  };
}
```

### В LESS/CSS:

```less
.icon-angular {
  background-image: url('/assets/icons/angular-logo.svg');
  background-size: contain;
  width: 24px;
  height: 24px;
}
```

---

## 📊 Использование JSON данных

### Импорт в TypeScript:

```typescript
import sampleData from '../assets/data/sample-data.json';

export class MyComponent {
  users = sampleData.users;
  products = sampleData.products;
  settings = sampleData.settings;
}
```

### Через HTTP сервис:

```typescript
import { HttpClient } from '@angular/common/http';

export class DataService {
  constructor(private http: HttpClient) {}
  
  loadData() {
    return this.http.get('assets/data/sample-data.json');
  }
}
```

---

## 🔤 Использование шрифтов

### Добавление web-шрифтов:

1. Поместите файлы шрифтов в `assets/fonts/`
2. Подключите в `styles.less`:

```less
@font-face {
  font-family: 'MyCustomFont';
  src: url('/assets/fonts/MyFont.woff2') format('woff2'),
       url('/assets/fonts/MyFont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

body {
  font-family: 'MyCustomFont', sans-serif;
}
```

---

## 💡 Лучшие практики

### 1. Используйте переменные для цветов

```less
// ❌ Плохо
.button { background: #667eea; }

// ✅ Хорошо
.button { background: @primary-color; }
```

### 2. Используйте миксины для повторяющихся стилей

```less
// ❌ Плохо
.card1 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.card2 {
  display: flex;
  justify-content: center;
  align-items: center;
}

// ✅ Хорошо
.card1 { .flex-center(); }
.card2 { .flex-center(); }
```

### 3. Используйте utility классы в HTML

```html
<!-- ❌ Плохо - создавать класс для простых стилей -->
<div class="my-centered-text">Текст</div>

<!-- ✅ Хорошо - использовать утилиты -->
<div class="text-center text-bold text-primary">Текст</div>
```

### 4. Оптимизация изображений

- Используйте WebP для фото
- Используйте SVG для иконок и логотипов
- Сжимайте изображения перед добавлением

### 5. Именование файлов

- `kebab-case` для всех файлов
- Понятные имена: `user-avatar.png`, не `img1.png`
- Группируйте по папкам: `icons/`, `photos/`, `backgrounds/`

---

## 🚀 Быстрый старт

### Создание нового компонента со стилями:

```typescript
// my-component.component.ts
@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.less']
})
export class MyComponent {}
```

```less
// my-component.component.less
@import '../../../assets/styles/variables';
@import '../../../assets/styles/mixins';

.my-component {
  padding: @spacing-lg;
  background: @bg-white;
  .card-base();
  
  .title {
    color: @primary-color;
    .text-gradient(@gradient-primary);
  }
  
  .content {
    .flex-center-column();
    gap: @spacing-md;
  }
}
```

```html
<!-- my-component.component.html -->
<div class="my-component animate-fade-in">
  <h2 class="title">Заголовок</h2>
  <div class="content">
    <img src="assets/icons/angular-logo.svg" alt="Angular" width="50">
    <p class="text-center">Контент компонента</p>
  </div>
</div>
```

---

**Создано для проекта Angular App** 🚀

