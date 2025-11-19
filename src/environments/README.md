# 🌍 Environments - Окружения Angular

Система управления конфигурациями для разных окружений.

## 📁 Структура

```
environments/
├── environment.ts          # Development (по умолчанию)
├── environment.prod.ts     # Production
├── environment.staging.ts  # Staging
└── environment.test.ts     # Testing
```

## 🎯 Файлы окружений

### environment.ts (Development)
- Локальная разработка
- Полное логирование
- Debug панель включена
- Mock API данные
- Используется: `ng serve` или `npm start`

### environment.prod.ts (Production)
- Боевое окружение
- Минимальное логирование
- Оптимизация включена
- Реальный API
- Используется: `ng build --configuration production`

### environment.staging.ts (Staging)
- Тестовый сервер
- Промежуточное тестирование
- Тестовые API ключи
- Используется: `ng build --configuration staging`

### environment.test.ts (Testing)
- Unit и E2E тесты
- Mock данные
- Без логирования
- Используется: `ng test`

## 🚀 Использование

### В коде приложения

```typescript
import { environment } from '../environments/environment';

// Прямой доступ
const apiUrl = environment.apiUrl;
const isProduction = environment.production;

// Проверка feature flags
if (environment.features.darkMode) {
  // Включить темную тему
}
```

### Через EnvironmentService (рекомендуется)

```typescript
import { EnvironmentService } from './services/environment.service';

constructor(private envService: EnvironmentService) {}

ngOnInit() {
  // Получить API URL
  const apiUrl = this.envService.getApiUrl();
  
  // Построить полный endpoint
  const endpoint = this.envService.getApiEndpoint('users');
  // Результат: http://localhost:3000/api/v1/users
  
  // Проверить режим
  if (this.envService.isProduction()) {
    console.log('Production mode');
  }
  
  // Проверить доступность функции
  if (this.envService.hasFeature('darkMode')) {
    this.enableDarkMode();
  }
  
  // Получить конфигурацию
  const loggingConfig = this.envService.getLoggingConfig();
  const authConfig = this.envService.getAuthConfig();
}
```

## 🛠️ Команды

### Development (разработка)
```bash
npm start
# или
ng serve
# или
ng serve --configuration development
```

### Production (сборка)
```bash
npm run build
# или
ng build --configuration production
```

### Staging (тестовая сборка)
```bash
npm run build:staging
# или
ng build --configuration staging
```

### Запуск с разными окружениями
```bash
# Development
ng serve --configuration development

# Staging
ng serve --configuration staging

# Production
ng serve --configuration production
```

## 📝 Структура конфигурации

### Основные параметры
```typescript
{
  name: string;           // Название окружения
  production: boolean;    // Production режим?
  apiUrl: string;         // Базовый URL API
  apiVersion: string;     // Версия API
  appUrl: string;         // URL приложения
}
```

### Логирование
```typescript
logging: {
  level: 'trace' | 'debug' | 'info' | 'warn' | 'error';
  enableConsole: boolean;
  enableRemote: boolean;
}
```

### Feature Flags
```typescript
features: {
  darkMode: boolean;
  notifications: boolean;
  experimentalFeatures: boolean;
  debugPanel: boolean;
  mockApi: boolean;
}
```

### Авторизация
```typescript
auth: {
  tokenKey: string;
  refreshTokenKey: string;
  tokenExpiry: number;
  loginUrl: string;
  logoutUrl: string;
}
```

### HTTP конфигурация
```typescript
http: {
  timeout: number;        // Таймаут в миллисекундах
  retryAttempts: number;  // Количество повторных попыток
  retryDelay: number;     // Задержка между попытками
}
```

### Внешние сервисы
```typescript
external: {
  googleMapsApiKey: string;
  stripePublicKey: string;
  firebaseConfig: {...};
}
```

### Локализация
```typescript
i18n: {
  defaultLanguage: string;
  availableLanguages: string[];
  fallbackLanguage: string;
}
```

## 🔒 Безопасность

### ⚠️ Важно!

1. **НЕ коммитьте** реальные API ключи в Git
2. **Используйте** переменные окружения для чувствительных данных
3. **Не храните** пароли и токены в environment файлах
4. **Создайте** `.env` файлы для локальных секретов

### Пример использования .env (если нужно)

```bash
# .env (не коммитится в Git!)
API_KEY=your-secret-key
STRIPE_KEY=pk_live_xxxxx
```

## 📊 Примеры использования

### 1. HTTP Interceptor с environment

```typescript
import { environment } from '../environments/environment';

export class ApiInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const apiReq = req.clone({
      url: `${environment.apiUrl}${req.url}`
    });
    return next.handle(apiReq);
  }
}
```

### 2. Logger Service с environment

```typescript
export class LoggerService {
  private logLevel = environment.logging.level;
  
  debug(message: string) {
    if (this.shouldLog('debug')) {
      console.debug(message);
    }
  }
  
  error(message: string) {
    if (this.shouldLog('error')) {
      console.error(message);
      
      if (environment.logging.enableRemote) {
        this.sendToServer(message);
      }
    }
  }
}
```

### 3. Feature Guard

```typescript
import { EnvironmentService } from './services/environment.service';

export class FeatureGuard implements CanActivate {
  constructor(private envService: EnvironmentService) {}
  
  canActivate(): boolean {
    return this.envService.hasFeature('experimentalFeatures');
  }
}
```

### 4. API Service

```typescript
export class UserApiService {
  constructor(
    private http: HttpClient,
    private envService: EnvironmentService
  ) {}
  
  getUsers() {
    const endpoint = this.envService.getApiEndpoint('users');
    return this.http.get(endpoint, {
      timeout: this.envService.getHttpConfig().timeout
    });
  }
}
```

## 🔄 Добавление нового окружения

1. Создайте файл `environment.newenv.ts`
2. Скопируйте структуру из существующего файла
3. Обновите `angular.json`:

```json
"configurations": {
  "newenv": {
    "fileReplacements": [
      {
        "replace": "src/environments/environment.ts",
        "with": "src/environments/environment.newenv.ts"
      }
    ]
  }
}
```

4. Добавьте скрипт в `package.json`:

```json
"scripts": {
  "serve:newenv": "ng serve --configuration newenv",
  "build:newenv": "ng build --configuration newenv"
}
```

## 📚 Полезные ссылки

- [Angular Environments](https://angular.io/guide/build#configuring-application-environments)
- [Angular Build Configuration](https://angular.io/guide/workspace-config)

---

**Создано для Angular App** 🚀

