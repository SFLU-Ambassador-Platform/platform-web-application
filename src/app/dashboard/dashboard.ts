import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Button } from '../shared/button/button';

interface Task {
  id: number;
  title: string;
  description: string;
  credits: number;
  deadline: Date;
  status: 'pending' | 'in-progress' | 'completed';
  category: string;
}

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, RouterLink, Button],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  standalone: true
})
export class Dashboard {
  userName: string = 'Олександр';
  totalCredits: number = 1250;
  completedTasks: number = 15;
  pendingTasks: number = 8;

  tasks: Task[] = [
    {
      id: 1,
      title: 'Пост у соціальних мережах',
      description: 'Створити пост про новий продукт компанії',
      credits: 150,
      deadline: new Date('2025-11-25'),
      status: 'pending',
      category: 'Соціальні мережі'
    },
    {
      id: 2,
      title: 'Участь у вебінарі',
      description: 'Взяти участь у щотижневому вебінарі для амбасадорів',
      credits: 200,
      deadline: new Date('2025-11-23'),
      status: 'in-progress',
      category: 'Навчання'
    },
    {
      id: 3,
      title: 'Відгук про продукт',
      description: 'Написати детальний відгук про використання продукту',
      credits: 100,
      deadline: new Date('2025-11-28'),
      status: 'pending',
      category: 'Контент'
    },
    {
      id: 4,
      title: 'Реферальна програма',
      description: 'Залучити 3 нових користувачів через реферальне посилання',
      credits: 300,
      deadline: new Date('2025-11-30'),
      status: 'in-progress',
      category: 'Реферали'
    },
    {
      id: 5,
      title: 'Відео-огляд',
      description: 'Зняти короткий відео-огляд продукту для YouTube',
      credits: 250,
      deadline: new Date('2025-11-27'),
      status: 'pending',
      category: 'Відео'
    },
    {
      id: 6,
      title: 'Опитування клієнтів',
      description: 'Провести опитування серед 10 потенційних клієнтів',
      credits: 180,
      deadline: new Date('2025-11-24'),
      status: 'completed',
      category: 'Дослідження'
    }
  ];

  get activeTasks(): Task[] {
    return this.tasks.filter(task => task.status !== 'completed');
  }

  get completedTasksList(): Task[] {
    return this.tasks.filter(task => task.status === 'completed');
  }

  getStatusText(status: string): string {
    const statusMap: { [key: string]: string } = {
      'pending': 'Очікує',
      'in-progress': 'У процесі',
      'completed': 'Завершено'
    };
    return statusMap[status] || status;
  }

  getStatusClass(status: string): string {
    return `status-${status}`;
  }

  formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    };
    return new Date(date).toLocaleDateString('uk-UA', options);
  }

  getDaysUntilDeadline(deadline: Date): number {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate.getTime() - today.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }
}

