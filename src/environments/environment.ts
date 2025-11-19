/**
 * ENVIRONMENT - Development (Разработка)
 * 
 * Конфигурация для локальной разработки
 * Используется по умолчанию при запуске ng serve
 */

export const environment = {
  // Название окружения
  name: 'development',
  
  // Режим production (false для разработки)
  production: false,
  
  // API endpoints
  apiUrl: 'http://localhost:3000/api',
  apiVersion: 'v1',
  
  // Базовый URL приложения
  appUrl: 'http://localhost:4200',
  
  // Настройки логирования
  logging: {
    level: 'debug', // trace | debug | info | warn | error
    enableConsole: true,
    enableRemote: false
  },
  
  // Настройки аналитики
  analytics: {
    enabled: false,
    googleAnalyticsId: '',
    yandexMetrikaId: ''
  },
  
  // Feature flags (флаги функциональности)
  features: {
    darkMode: true,
    notifications: true,
    experimentalFeatures: true,
    debugPanel: true,
    mockApi: true // Использовать mock данные
  },
  
  // Настройки кэширования
  cache: {
    enabled: false,
    ttl: 300000 // 5 минут в миллисекундах
  },
  
  // OAuth / Авторизация
  auth: {
    tokenKey: 'auth_token',
    refreshTokenKey: 'refresh_token',
    tokenExpiry: 3600, // 1 час в секундах
    loginUrl: '/login',
    logoutUrl: '/logout'
  },
  
  // Настройки API запросов
  http: {
    timeout: 30000, // 30 секунд
    retryAttempts: 3,
    retryDelay: 1000
  },
  
  // Внешние сервисы
  external: {
    googleMapsApiKey: '',
    stripePublicKey: '',
    firebaseConfig: {
      apiKey: '',
      authDomain: '',
      projectId: '',
      storageBucket: '',
      messagingSenderId: '',
      appId: ''
    }
  },
  
  // Настройки локализации
  i18n: {
    defaultLanguage: 'ru',
    availableLanguages: ['ru', 'en'],
    fallbackLanguage: 'ru'
  },
  
  // Версия приложения
  version: '1.0.0',
  buildDate: new Date().toISOString()
};

/*
 * Для более простой отладки в режиме разработки можно импортировать
 * следующий файл для отображения ошибок в консоли:
 * import 'zone.js/plugins/zone-error';
 */

