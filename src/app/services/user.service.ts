import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

// Интерфейс для типизации данных
export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

/**
 * SERVICE - Сервис для управления пользователями
 * Сервисы используются для:
 * - Бизнес-логики
 * - Работы с данными
 * - HTTP запросов
 * - Общения между компонентами
 */
@Injectable({
  providedIn: 'root' // Сервис доступен во всем приложении
})
export class UserService {
  // Приватное хранилище данных
  private usersSubject = new BehaviorSubject<User[]>([
    { id: 1, name: 'Иван Иванов', email: 'ivan@example.com', role: 'admin' },
    { id: 2, name: 'Петр Петров', email: 'petr@example.com', role: 'user' },
    { id: 3, name: 'Мария Сидорова', email: 'maria@example.com', role: 'moderator' }
  ]);

  // Публичный Observable для подписки компонентов
  public users$: Observable<User[]> = this.usersSubject.asObservable();

  constructor() {
    console.log('UserService инициализирован');
  }

  // Получить всех пользователей
  getUsers(): User[] {
    return this.usersSubject.value;
  }

  // Получить пользователя по ID
  getUserById(id: number): User | undefined {
    return this.usersSubject.value.find(user => user.id === id);
  }

  // Добавить нового пользователя
  addUser(user: User): void {
    const users = [...this.usersSubject.value, user];
    this.usersSubject.next(users);
  }

  // Удалить пользователя
  deleteUser(id: number): void {
    const users = this.usersSubject.value.filter(user => user.id !== id);
    this.usersSubject.next(users);
  }

  // Обновить пользователя
  updateUser(updatedUser: User): void {
    const users = this.usersSubject.value.map(user =>
      user.id === updatedUser.id ? updatedUser : user
    );
    this.usersSubject.next(users);
  }
}

