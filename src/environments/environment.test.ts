/**
 * ENVIRONMENT - Test (Тестирование)
 * 
 * Конфигурация для unit и e2e тестов
 * Используется при запуске ng test
 */

export const environment = {
  // Название окружения
  name: 'test',
  
  // Режим production
  production: false,
  
  // API endpoints
  apiUrl: 'http://localhost:3000/api',
  apiVersion: 'v1',
  
  // Базовый URL приложения
  appUrl: 'http://localhost:4200',
  
  // Настройки логирования
  logging: {
    level: 'warn', // Минимум логов при тестах
    enableConsole: false,
    enableRemote: false
  },
  
  // Настройки аналитики
  analytics: {
    enabled: false, // Выключено при тестах
    googleAnalyticsId: '',
    yandexMetrikaId: ''
  },
  
  // Feature flags
  features: {
    darkMode: true,
    notifications: false, // Выключено при тестах
    experimentalFeatures: false,
    debugPanel: false,
    mockApi: true // Всегда используем mock в тестах
  },
  
  // Настройки кэширования
  cache: {
    enabled: false, // Выключено при тестах
    ttl: 0
  },
  
  // OAuth / Авторизация
  auth: {
    tokenKey: 'auth_token_test',
    refreshTokenKey: 'refresh_token_test',
    tokenExpiry: 3600,
    loginUrl: '/login',
    logoutUrl: '/logout'
  },
  
  // Настройки API запросов
  http: {
    timeout: 5000, // Короче для тестов
    retryAttempts: 1,
    retryDelay: 100
  },
  
  // Внешние сервисы
  external: {
    googleMapsApiKey: 'TEST_KEY',
    stripePublicKey: 'pk_test_MOCK',
    firebaseConfig: {
      apiKey: 'TEST_KEY',
      authDomain: 'test.firebaseapp.com',
      projectId: 'test-project',
      storageBucket: 'test.appspot.com',
      messagingSenderId: '000000000',
      appId: '1:000000000:web:test'
    }
  },
  
  // Настройки локализации
  i18n: {
    defaultLanguage: 'ru',
    availableLanguages: ['ru', 'en'],
    fallbackLanguage: 'ru'
  },
  
  // Версия приложения
  version: '1.0.0-test',
  buildDate: new Date().toISOString()
};

