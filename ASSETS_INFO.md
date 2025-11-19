# 📁 Assets - Быстрый справочник

## Структура

```
src/assets/
├── data/             JSON данные
├── fonts/            Шрифты
├── icons/            SVG иконки
├── images/           Изображения
└── styles/           LESS стили
    ├── _variables    Переменные
    ├── _mixins       Миксины
    ├── _utilities    Utility классы
    └── _animations   Анимации
```

## 🎨 Быстрый доступ к переменным

### Цвета
```less
@primary-color: #667eea
@secondary-color: #764ba2
@success-color: #4caf50
@warning-color: #ff9800
@danger-color: #f44336
@info-color: #2196f3
```

### Градиенты
```less
@gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
@gradient-success: linear-gradient(135deg, #4caf50 0%, #45a049 100%)
```

### Отступы
```less
@spacing-xs: 4px
@spacing-sm: 8px
@spacing-md: 16px
@spacing-lg: 24px
@spacing-xl: 32px
@spacing-xxl: 48px
```

### Тени
```less
@shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.1)
@shadow-md: 0 4px 8px rgba(0, 0, 0, 0.1)
@shadow-lg: 0 4px 12px rgba(0, 0, 0, 0.15)
@shadow-xl: 0 8px 24px rgba(0, 0, 0, 0.2)
```

## 🔧 Популярные миксины

```less
.flex-center()              // Flexbox центрирование
.flex-between()             // space-between + center
.card-base()                // Базовая карточка
.button-variant(@color)     // Кнопка с цветом
.text-gradient(@gradient)   // Градиентный текст
.grid-responsive(@min, @gap)// Адаптивная сетка
```

## 🎯 Utility классы

### Отступы
```html
<div class="mt-lg mb-md p-xl"></div>
```

### Текст
```html
<p class="text-center text-bold text-primary"></p>
```

### Flex
```html
<div class="d-flex justify-between align-center gap-md"></div>
```

### Фон и тени
```html
<div class="bg-gradient-primary shadow-lg rounded"></div>
```

### Анимации
```html
<div class="animate-fade-in"></div>
<div class="animate-bounce animation-infinite"></div>
```

## 📖 Полная документация

- **Подробное руководство:** `src/assets/USAGE.md`
- **О структуре:** `src/assets/README.md`
- **Основы Angular:** `ANGULAR_BASICS_RU.md`

---

**Создано для Angular App** 🚀

