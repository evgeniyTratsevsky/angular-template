/**
 * ENVIRONMENT - Staging (Тестовый сервер)
 * 
 * Конфигурация для staging окружения
 * Используется для тестирования перед деплоем в продакшн
 * Сборка: ng build --configuration staging
 */

export const environment = {
  // Название окружения
  name: 'staging',
  
  // Режим production (для оптимизации)
  production: true,
  
  // API endpoints
  apiUrl: 'https://staging-api.your-domain.com/api',
  apiVersion: 'v1',
  
  // Базовый URL приложения
  appUrl: 'https://staging.your-domain.com',
  
  // Настройки логирования
  logging: {
    level: 'info', // Больше информации чем в prod
    enableConsole: true,
    enableRemote: true
  },
  
  // Настройки аналитики
  analytics: {
    enabled: false, // Обычно выключено на staging
    googleAnalyticsId: '',
    yandexMetrikaId: ''
  },
  
  // Feature flags
  features: {
    darkMode: true,
    notifications: true,
    experimentalFeatures: true, // Тестируем новые функции
    debugPanel: true, // Для отладки
    mockApi: false
  },
  
  // Настройки кэширования
  cache: {
    enabled: true,
    ttl: 300000 // 5 минут
  },
  
  // OAuth / Авторизация
  auth: {
    tokenKey: 'auth_token_staging',
    refreshTokenKey: 'refresh_token_staging',
    tokenExpiry: 3600,
    loginUrl: '/login',
    logoutUrl: '/logout'
  },
  
  // Настройки API запросов
  http: {
    timeout: 30000,
    retryAttempts: 3,
    retryDelay: 1000
  },
  
  // Внешние сервисы
  external: {
    googleMapsApiKey: 'YOUR_STAGING_GOOGLE_MAPS_KEY',
    stripePublicKey: 'pk_test_XXXXXXXXXXXXXXXX', // Тестовый ключ
    firebaseConfig: {
      apiKey: 'YOUR_STAGING_FIREBASE_API_KEY',
      authDomain: 'your-app-staging.firebaseapp.com',
      projectId: 'your-project-staging',
      storageBucket: 'your-app-staging.appspot.com',
      messagingSenderId: '123456789',
      appId: '1:123456789:web:staging123456'
    }
  },
  
  // Настройки локализации
  i18n: {
    defaultLanguage: 'ru',
    availableLanguages: ['ru', 'en'],
    fallbackLanguage: 'ru'
  },
  
  // Версия приложения
  version: '1.0.0-staging',
  buildDate: new Date().toISOString()
};

