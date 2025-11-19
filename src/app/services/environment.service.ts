import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

/**
 * SERVICE - Environment Service
 * 
 * Сервис для работы с переменными окружения
 * Предоставляет централизованный доступ к конфигурации
 */
@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {
  
  // Доступ к полному объекту environment
  private readonly env = environment;

  constructor() {
    this.logEnvironmentInfo();
  }

  /**
   * Получить название текущего окружения
   */
  getEnvironmentName(): string {
    return this.env.name;
  }

  /**
   * Проверка - production режим?
   */
  isProduction(): boolean {
    return this.env.production;
  }

  /**
   * Проверка - development режим?
   */
  isDevelopment(): boolean {
    return this.env.name === 'development';
  }

  /**
   * Проверка - staging режим?
   */
  isStaging(): boolean {
    return this.env.name === 'staging';
  }

  /**
   * Проверка - test режим?
   */
  isTest(): boolean {
    return this.env.name === 'test';
  }

  /**
   * Получить базовый URL API
   */
  getApiUrl(): string {
    return this.env.apiUrl;
  }

  /**
   * Получить полный URL API эндпоинта
   */
  getApiEndpoint(path: string): string {
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `${this.env.apiUrl}/${this.env.apiVersion}/${cleanPath}`;
  }

  /**
   * Получить URL приложения
   */
  getAppUrl(): string {
    return this.env.appUrl;
  }

  /**
   * Проверка - включена ли функция?
   */
  isFeatureEnabled(featureName: keyof typeof environment.features): boolean {
    return this.env.features[featureName] ?? false;
  }

  /**
   * Получить настройки логирования
   */
  getLoggingConfig() {
    return this.env.logging;
  }

  /**
   * Получить настройки аналитики
   */
  getAnalyticsConfig() {
    return this.env.analytics;
  }

  /**
   * Получить настройки кэширования
   */
  getCacheConfig() {
    return this.env.cache;
  }

  /**
   * Получить настройки авторизации
   */
  getAuthConfig() {
    return this.env.auth;
  }

  /**
   * Получить настройки HTTP
   */
  getHttpConfig() {
    return this.env.http;
  }

  /**
   * Получить внешние сервисы
   */
  getExternalServices() {
    return this.env.external;
  }

  /**
   * Получить настройки локализации
   */
  getI18nConfig() {
    return this.env.i18n;
  }

  /**
   * Получить версию приложения
   */
  getVersion(): string {
    return this.env.version;
  }

  /**
   * Получить дату сборки
   */
  getBuildDate(): string {
    return this.env.buildDate;
  }

  /**
   * Получить полную информацию об окружении
   */
  getEnvironmentInfo() {
    return {
      name: this.getEnvironmentName(),
      production: this.isProduction(),
      version: this.getVersion(),
      buildDate: this.getBuildDate(),
      apiUrl: this.getApiUrl(),
      appUrl: this.getAppUrl()
    };
  }

  /**
   * Логирование информации об окружении
   */
  private logEnvironmentInfo(): void {
    if (this.env.logging.enableConsole) {
      console.group('🌍 Environment Configuration');
      console.log('Environment:', this.env.name);
      console.log('Production:', this.env.production);
      console.log('Version:', this.env.version);
      console.log('API URL:', this.env.apiUrl);
      console.log('App URL:', this.env.appUrl);
      console.log('Build Date:', this.env.buildDate);
      console.groupEnd();
    }
  }

  /**
   * Проверка - доступна ли функция
   * Alias для isFeatureEnabled
   */
  hasFeature(featureName: keyof typeof environment.features): boolean {
    return this.isFeatureEnabled(featureName);
  }

  /**
   * Получить все настройки (только для отладки!)
   * НЕ использовать в production для безопасности
   */
  getAllSettings() {
    if (this.isProduction()) {
      console.warn('⚠️ Доступ к полным настройкам не рекомендуется в production!');
      return null;
    }
    return this.env;
  }
}

