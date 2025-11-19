# 🌍 Environments - Быстрый справочник

## Файлы окружений

| Файл | Описание | Команда |
|------|----------|---------|
| `environment.ts` | Development (разработка) | `npm start` |
| `environment.prod.ts` | Production (продакшн) | `npm run build:prod` |
| `environment.staging.ts` | Staging (тестирование) | `npm run build:staging` |
| `environment.test.ts` | Testing (тесты) | `npm test` |

## 🚀 Команды запуска

```bash
# Development (по умолчанию)
npm start
npm run start:dev

# Staging
npm run start:staging

# Production
npm run start:prod
```

## 📦 Команды сборки

```bash
# Production сборка
npm run build
npm run build:prod

# Development сборка
npm run build:dev

# Staging сборка
npm run build:staging
```

## 💻 Использование в коде

### Прямой импорт

```typescript
import { environment } from '../environments/environment';

const apiUrl = environment.apiUrl;
const isProd = environment.production;

if (environment.features.darkMode) {
  // Включить темную тему
}
```

### Через сервис (рекомендуется)

```typescript
import { EnvironmentService } from './services/environment.service';

constructor(private envService: EnvironmentService) {}

// API URL
const api = this.envService.getApiUrl();

// Полный endpoint
const endpoint = this.envService.getApiEndpoint('users');

// Проверка режима
if (this.envService.isProduction()) { }
if (this.envService.isDevelopment()) { }

// Feature flags
if (this.envService.hasFeature('darkMode')) { }

// Конфигурация
const config = this.envService.getLoggingConfig();
```

## 📝 Доступные конфигурации

### API
- `apiUrl` - Базовый URL API
- `apiVersion` - Версия API
- `appUrl` - URL приложения

### Features
- `darkMode` - Темная тема
- `notifications` - Уведомления
- `experimentalFeatures` - Экспериментальные функции
- `debugPanel` - Панель отладки
- `mockApi` - Mock данные

### Логирование
- `level` - Уровень логов (trace | debug | info | warn | error)
- `enableConsole` - Консоль
- `enableRemote` - Отправка на сервер

### HTTP
- `timeout` - Таймаут запросов
- `retryAttempts` - Количество повторов
- `retryDelay` - Задержка между повторами

## 🔧 EnvironmentService методы

```typescript
// Информация об окружении
getEnvironmentName(): string
isProduction(): boolean
isDevelopment(): boolean
isStaging(): boolean
isTest(): boolean

// API
getApiUrl(): string
getApiEndpoint(path): string
getAppUrl(): string

// Features
hasFeature(name): boolean
isFeatureEnabled(name): boolean

// Конфигурация
getLoggingConfig()
getAnalyticsConfig()
getCacheConfig()
getAuthConfig()
getHttpConfig()
getExternalServices()
getI18nConfig()

// Версия
getVersion(): string
getBuildDate(): string
```

## 📊 Отличия окружений

| Параметр | Development | Staging | Production | Test |
|----------|-------------|---------|------------|------|
| Production | ❌ | ✅ | ✅ | ❌ |
| Логирование | Debug | Info | Error | Warn |
| Консоль | ✅ | ✅ | ❌ | ❌ |
| Mock API | ✅ | ❌ | ❌ | ✅ |
| Debug Panel | ✅ | ✅ | ❌ | ❌ |
| Аналитика | ❌ | ❌ | ✅ | ❌ |
| Кэш | ❌ | ✅ | ✅ | ❌ |

## 🎯 Примеры

### HTTP Interceptor

```typescript
intercept(req: HttpRequest<any>, next: HttpHandler) {
  const url = this.envService.getApiEndpoint(req.url);
  const apiReq = req.clone({ url });
  return next.handle(apiReq).pipe(
    timeout(this.envService.getHttpConfig().timeout)
  );
}
```

### Logger

```typescript
log(message: string, level: string) {
  if (this.envService.getLoggingConfig().enableConsole) {
    console[level](message);
  }
  
  if (this.envService.getLoggingConfig().enableRemote) {
    this.sendToServer(message);
  }
}
```

### Feature Guard

```typescript
canActivate(): boolean {
  return this.envService.hasFeature('experimentalFeatures');
}
```

## 🔒 Безопасность

⚠️ **ВАЖНО:**
- НЕ коммитьте реальные API ключи
- Используйте переменные окружения для секретов
- Не храните пароли в environment файлах
- Создайте `.env` файлы для локальных секретов

## 📚 Полная документация

- `src/environments/README.md` - Подробная документация
- `src/app/services/environment.service.ts` - Код сервиса
- `src/app/components/environment-info/` - Демо компонент

---

**Angular App - Environment Configuration** 🚀

