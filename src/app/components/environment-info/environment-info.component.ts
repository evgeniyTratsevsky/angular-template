import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnvironmentService } from '../../services/environment.service';
import { environment } from '../../../environments/environment';

/**
 * Компонент для отображения информации об окружении
 * Демонстрация использования EnvironmentService
 */
@Component({
  selector: 'app-environment-info',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="environment-info">
      <h2>🌍 Информация об окружении</h2>
      
      <div class="info-card" [class.production]="envService.isProduction()">
        <div class="header">
          <span class="badge" [class]="getBadgeClass()">
            {{ envService.getEnvironmentName().toUpperCase() }}
          </span>
          <span class="version">v{{ envService.getVersion() }}</span>
        </div>

        <div class="info-grid">
          <div class="info-item">
            <span class="label">Режим:</span>
            <span class="value">{{ envService.isProduction() ? 'Production' : 'Development' }}</span>
          </div>

          <div class="info-item">
            <span class="label">API URL:</span>
            <span class="value code">{{ envService.getApiUrl() }}</span>
          </div>

          <div class="info-item">
            <span class="label">App URL:</span>
            <span class="value code">{{ envService.getAppUrl() }}</span>
          </div>

          <div class="info-item">
            <span class="label">Дата сборки:</span>
            <span class="value">{{ envService.getBuildDate() | date:'dd.MM.yyyy HH:mm' }}</span>
          </div>
        </div>

        <div class="features">
          <h3>Доступные функции:</h3>
          <div class="feature-list">
            <div *ngFor="let feature of getFeatures()" class="feature-item">
              <span [class.enabled]="feature.enabled" [class.disabled]="!feature.enabled">
                {{ feature.enabled ? '✅' : '❌' }}
              </span>
              <span>{{ feature.name }}</span>
            </div>
          </div>
        </div>

        <div class="config-section" *ngIf="!envService.isProduction()">
          <h3>Конфигурация:</h3>
          <div class="config-grid">
            <div class="config-item">
              <strong>Логирование:</strong>
              <span>{{ loggingConfig.level }}</span>
            </div>
            <div class="config-item">
              <strong>Кэш:</strong>
              <span>{{ cacheConfig.enabled ? 'Включен' : 'Выключен' }}</span>
            </div>
            <div class="config-item">
              <strong>Язык:</strong>
              <span>{{ i18nConfig.defaultLanguage }}</span>
            </div>
          </div>
        </div>

        <div class="warning" *ngIf="envService.isProduction()">
          ⚠️ Production режим - детальная информация скрыта
        </div>
      </div>
    </div>
  `,
  styles: [`
    .environment-info {
      padding: 20px;

      h2 {
        color: #333;
        margin-bottom: 20px;
      }
    }

    .info-card {
      background: white;
      border-radius: 12px;
      padding: 25px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      border-left: 4px solid #667eea;

      &.production {
        border-left-color: #f44336;
      }
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      padding-bottom: 15px;
      border-bottom: 2px solid #f0f0f0;
    }

    .badge {
      padding: 6px 16px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: bold;
      text-transform: uppercase;

      &.development {
        background: #4caf50;
        color: white;
      }

      &.production {
        background: #f44336;
        color: white;
      }

      &.staging {
        background: #ff9800;
        color: white;
      }

      &.test {
        background: #2196f3;
        color: white;
      }
    }

    .version {
      color: #666;
      font-family: monospace;
      font-size: 14px;
    }

    .info-grid {
      display: grid;
      gap: 15px;
      margin-bottom: 20px;
    }

    .info-item {
      display: flex;
      justify-content: space-between;
      padding: 10px;
      background: #f9f9f9;
      border-radius: 6px;

      .label {
        font-weight: 600;
        color: #666;
      }

      .value {
        color: #333;

        &.code {
          font-family: monospace;
          font-size: 13px;
          color: #667eea;
        }
      }
    }

    .features {
      margin-top: 20px;
      padding-top: 20px;
      border-top: 2px solid #f0f0f0;

      h3 {
        color: #333;
        margin-bottom: 15px;
        font-size: 16px;
      }
    }

    .feature-list {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 10px;
    }

    .feature-item {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 12px;
      background: #f9f9f9;
      border-radius: 6px;
      font-size: 14px;

      span:first-child {
        font-size: 16px;
      }
    }

    .config-section {
      margin-top: 20px;
      padding: 15px;
      background: #e8eaf6;
      border-radius: 8px;

      h3 {
        margin-top: 0;
        margin-bottom: 15px;
        color: #667eea;
        font-size: 16px;
      }
    }

    .config-grid {
      display: grid;
      gap: 10px;
    }

    .config-item {
      display: flex;
      justify-content: space-between;
      padding: 8px;
      background: white;
      border-radius: 4px;

      strong {
        color: #666;
      }

      span {
        color: #333;
        font-family: monospace;
      }
    }

    .warning {
      margin-top: 20px;
      padding: 12px;
      background: #fff3e0;
      border-left: 4px solid #ff9800;
      border-radius: 4px;
      color: #f57c00;
      font-weight: 500;
    }
  `]
})
export class EnvironmentInfoComponent implements OnInit {
  loggingConfig = environment.logging;
  cacheConfig = environment.cache;
  i18nConfig = environment.i18n;

  constructor(public envService: EnvironmentService) {}

  ngOnInit(): void {
    console.log('Environment Info:', this.envService.getEnvironmentInfo());
  }

  getBadgeClass(): string {
    return this.envService.getEnvironmentName();
  }

  getFeatures() {
    return [
      { name: 'Dark Mode', enabled: this.envService.hasFeature('darkMode') },
      { name: 'Notifications', enabled: this.envService.hasFeature('notifications') },
      { name: 'Experimental', enabled: this.envService.hasFeature('experimentalFeatures') },
      { name: 'Debug Panel', enabled: this.envService.hasFeature('debugPanel') },
      { name: 'Mock API', enabled: this.envService.hasFeature('mockApi') }
    ];
  }
}

