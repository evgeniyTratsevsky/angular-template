import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { UserService, User } from '../../services/user.service';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';
import { TooltipDirective } from '../../directives/tooltip.directive';

/**
 * COMPONENT - Компонент для отображения списка пользователей
 * Компоненты состоят из:
 * 1. Класс TypeScript (@Component decorator)
 * 2. HTML шаблон (template/templateUrl)
 * 3. Стили (styles/styleUrls)
 */
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    CommonModule, // Для *ngIf, *ngFor, pipes и т.д.
    TruncatePipe,
    HighlightDirective,
    TooltipDirective
  ],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.less']
})
export class UserListComponent implements OnInit, OnDestroy {
  users: User[] = [];
  selectedUser: User | null = null;
  private subscription: Subscription = new Subscription();

  // Dependency Injection - внедрение зависимостей
  constructor(private userService: UserService) {}

  // Lifecycle Hook - хук жизненного цикла
  ngOnInit(): void {
    // Подписка на данные из сервиса (сохраняем для последующей отписки)
    this.subscription.add(
      this.userService.users$.subscribe(users => {
        this.users = users;
      })
    );
  }

  // Lifecycle Hook - очистка ресурсов при уничтожении компонента
  ngOnDestroy(): void {
    // Отписываемся от всех подписок, чтобы избежать утечек памяти
    this.subscription.unsubscribe();
  }

  // Метод для выбора пользователя
  selectUser(user: User): void {
    this.selectedUser = user;
  }

  // Метод для удаления пользователя
  deleteUser(id: number): void {
    if (confirm('Вы уверены, что хотите удалить пользователя?')) {
      this.userService.deleteUser(id);
      if (this.selectedUser?.id === id) {
        this.selectedUser = null;
      }
    }
  }

  // Метод для получения CSS класса в зависимости от роли
  getRoleClass(role: string): string {
    const roleClasses: { [key: string]: string } = {
      'admin': 'badge-admin',
      'moderator': 'badge-moderator',
      'user': 'badge-user'
    };
    return roleClasses[role] || 'badge-default';
  }
}

