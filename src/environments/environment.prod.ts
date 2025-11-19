/**
 * ENVIRONMENT - Production (Продакшн)
 * 
 * Конфигурация для production окружения
 * Используется при сборке: ng build --configuration production
 */

export const environment = {
  // Название окружения
  name: 'production',
  
  // Режим production
  production: true,
  
  // API endpoints
  apiUrl: 'https://api.your-domain.com/api',
  apiVersion: 'v1',
  
  // Базовый URL приложения
  appUrl: 'https://your-domain.com',
  
  // Настройки логирования
  logging: {
    level: 'error', // Только ошибки в продакшене
    enableConsole: false,
    enableRemote: true // Отправка логов на сервер
  },
  
  // Настройки аналитики
  analytics: {
    enabled: true,
    googleAnalyticsId: 'G-XXXXXXXXXX', // Замените на ваш ID
    yandexMetrikaId: '12345678' // Замените на ваш ID
  },
  
  // Feature flags
  features: {
    darkMode: true,
    notifications: true,
    experimentalFeatures: false, // Выключено в продакшене
    debugPanel: false, // Выключено в продакшене
    mockApi: false // Реальный API в продакшене
  },
  
  // Настройки кэширования
  cache: {
    enabled: true,
    ttl: 600000 // 10 минут
  },
  
  // OAuth / Авторизация
  auth: {
    tokenKey: 'auth_token',
    refreshTokenKey: 'refresh_token',
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
    googleMapsApiKey: 'YOUR_PRODUCTION_GOOGLE_MAPS_KEY',
    stripePublicKey: 'pk_live_XXXXXXXXXXXXXXXX',
    firebaseConfig: {
      apiKey: 'YOUR_FIREBASE_API_KEY',
      authDomain: 'your-app.firebaseapp.com',
      projectId: 'your-project-id',
      storageBucket: 'your-app.appspot.com',
      messagingSenderId: '123456789',
      appId: '1:123456789:web:abcdef123456'
    }
  },
  
  // Настройки локализации
  i18n: {
    defaultLanguage: 'ru',
    availableLanguages: ['ru', 'en'],
    fallbackLanguage: 'en'
  },
  
  // Версия приложения
  version: '1.0.0',
  buildDate: new Date().toISOString()
};

