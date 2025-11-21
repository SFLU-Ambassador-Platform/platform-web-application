import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import {Button} from '../shared/button/button';
import {TextField} from '../shared/text-field/text-field';

interface Task {
  id: number;
  title: string;
  description: string;
  credits: number;
  deadline: Date;
  status: 'pending' | 'in-progress' | 'completed';
  category: string;
}

interface Event {
  id: number;
  title: string;
  description: string;
  date: Date;
  location: string;
  attendees: number;
  maxAttendees: number;
  type: 'online' | 'offline';
}

interface LeaderboardUser {
  id: number;
  name: string;
  avatar: string;
  credits: number;
  rank: number;
  tasksCompleted: number;
}

interface Prize {
  id: number;
  title: string;
  description: string;
  credits: number;
  image: string;
  category: string;
  available: boolean;
}

interface ChatMessage {
  id: number;
  sender: string;
  message: string;
  timestamp: Date;
  avatar: string;
  isOwn: boolean;
}

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, RouterLink, Button, TextField],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  standalone: true
})
export class Dashboard {
  userName: string = 'Олександр';
  totalCredits: number = 1250;
  completedTasks: number = 15;
  pendingTasks: number = 8;
  currentView: 'tasks' | 'events' | 'leaderboard' | 'prizes' | 'chat' = 'tasks';
  chatMessage: string = '';

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
    }
  ];

  events: Event[] = [
    {
      id: 1,
      title: 'Зустріч амбасадорів',
      description: 'Щомісячна зустріч команди амбасадорів для обміну досвідом',
      date: new Date('2025-11-28 18:00'),
      location: 'Zoom',
      attendees: 45,
      maxAttendees: 100,
      type: 'online'
    },
    {
      id: 2,
      title: 'Майстер-клас з контент-маркетингу',
      description: 'Навчання створенню ефективного контенту',
      date: new Date('2025-11-25 15:00'),
      location: 'Київ, вул. Хрещатик 10',
      attendees: 28,
      maxAttendees: 30,
      type: 'offline'
    },
    {
      id: 3,
      title: 'Презентація нового продукту',
      description: 'Ознайомлення з новими можливостями платформи',
      date: new Date('2025-12-01 19:00'),
      location: 'YouTube Live',
      attendees: 120,
      maxAttendees: 200,
      type: 'online'
    }
  ];

  leaderboard: LeaderboardUser[] = [
    {id: 1, name: 'Марія Коваленко', avatar: 'М', credits: 2850, rank: 1, tasksCompleted: 38},
    {id: 2, name: 'Дмитро Петренко', avatar: 'Д', credits: 2340, rank: 2, tasksCompleted: 32},
    {id: 3, name: 'Анна Шевченко', avatar: 'А', credits: 2100, rank: 3, tasksCompleted: 28},
    {id: 4, name: 'Олександр Іваненко', avatar: 'О', credits: 1250, rank: 4, tasksCompleted: 15},
    {id: 5, name: 'Юлія Сидоренко', avatar: 'Ю', credits: 980, rank: 5, tasksCompleted: 12},
    {id: 6, name: 'Іван Мельник', avatar: 'І', credits: 850, rank: 6, tasksCompleted: 10},
    {id: 7, name: 'Ольга Ткаченко', avatar: 'О', credits: 720, rank: 7, tasksCompleted: 9},
    {id: 8, name: 'Сергій Бондаренко', avatar: 'С', credits: 650, rank: 8, tasksCompleted: 8}
  ];

  prizes: Prize[] = [
    {
      id: 1,
      title: 'AirPods Pro',
      description: 'Бездротові навушники Apple',
      credits: 5000,
      image: '🎧',
      category: 'Електроніка',
      available: true
    },
    {
      id: 2,
      title: 'Сертифікат Amazon',
      description: 'Подарунковий сертифікат на $100',
      credits: 2000,
      image: '🎁',
      category: 'Сертифікати',
      available: true
    },
    {
      id: 3,
      title: 'MacBook Air',
      description: 'Ноутбук Apple MacBook Air M2',
      credits: 15000,
      image: '💻',
      category: 'Електроніка',
      available: true
    },
    {
      id: 4,
      title: 'Курс Udemy',
      description: 'Будь-який курс на платформі Udemy',
      credits: 800,
      image: '📚',
      category: 'Навчання',
      available: true
    },
    {
      id: 5,
      title: 'Фітнес-браслет',
      description: 'Xiaomi Mi Band 8',
      credits: 1200,
      image: '⌚',
      category: 'Електроніка',
      available: true
    },
    {
      id: 6,
      title: 'Преміум підписка',
      description: 'Річна підписка на платформу',
      credits: 3000,
      image: '⭐',
      category: 'Підписки',
      available: false
    }
  ];

  chatMessages: ChatMessage[] = [
    {
      id: 1,
      sender: 'Марія Коваленко',
      message: 'Привіт всім! Хто вже виконав завдання з відео-оглядом?',
      timestamp: new Date('2025-11-21 14:30'),
      avatar: 'М',
      isOwn: false
    },
    {
      id: 2,
      sender: 'Дмитро Петренко',
      message: 'Я вже зробив, дуже цікаве завдання!',
      timestamp: new Date('2025-11-21 14:32'),
      avatar: 'Д',
      isOwn: false
    },
    {
      id: 3,
      sender: 'Олександр',
      message: 'Поділіться порадами, будь ласка',
      timestamp: new Date('2025-11-21 14:35'),
      avatar: 'О',
      isOwn: true
    },
    {
      id: 4,
      sender: 'Анна Шевченко',
      message: 'Головне - бути природним і показати реальні емоції',
      timestamp: new Date('2025-11-21 14:37'),
      avatar: 'А',
      isOwn: false
    },
    {
      id: 5,
      sender: 'Юлія Сидоренко',
      message: 'А хто йде на майстер-клас у п\'ятницю?',
      timestamp: new Date('2025-11-21 14:40'),
      avatar: 'Ю',
      isOwn: false
    },
    {
      id: 6,
      sender: 'Іван Мельник',
      message: 'Я точно буду! Дуже цікава тема контент-маркетингу',
      timestamp: new Date('2025-11-21 14:42'),
      avatar: 'І',
      isOwn: false
    },
    {
      id: 7,
      sender: 'Ольга Ткаченко',
      message: 'Підкажіть, як краще оформити пост для соціальних мереж?',
      timestamp: new Date('2025-11-21 14:45'),
      avatar: 'О',
      isOwn: false
    },
    {
      id: 8,
      sender: 'Сергій Бондаренко',
      message: 'Використовуйте яскраві зображення та хештеги',
      timestamp: new Date('2025-11-21 14:47'),
      avatar: 'С',
      isOwn: false
    },
    {
      id: 9,
      sender: 'Марія Коваленко',
      message: 'Дякую всім за активність! Ви супер команда 🎉',
      timestamp: new Date('2025-11-21 14:50'),
      avatar: 'М',
      isOwn: false
    },
    {
      id: 10,
      sender: 'Олександр',
      message: 'Так, команда справді чудова!',
      timestamp: new Date('2025-11-21 14:52'),
      avatar: 'О',
      isOwn: true
    },
    {
      id: 11,
      sender: 'Дмитро Петренко',
      message: 'До речі, хтось уже набрав 3000 кредитів?',
      timestamp: new Date('2025-11-21 15:00'),
      avatar: 'Д',
      isOwn: false
    },
    {
      id: 12,
      sender: 'Анна Шевченко',
      message: 'Я майже досягла цієї позначки! Ще трохи і буде 😊',
      timestamp: new Date('2025-11-21 15:02'),
      avatar: 'А',
      isOwn: false
    },
    {
      id: 13,
      sender: 'Юлія Сидоренко',
      message: 'Які завдання найбільш прибуткові?',
      timestamp: new Date('2025-11-21 15:05'),
      avatar: 'Ю',
      isOwn: false
    },
    {
      id: 14,
      sender: 'Іван Мельник',
      message: 'Реферальна програма дає найбільше кредитів',
      timestamp: new Date('2025-11-21 15:07'),
      avatar: 'І',
      isOwn: false
    },
    {
      id: 15,
      sender: 'Олександр',
      message: 'Дякую за пораду! Спробую залучити друзів',
      timestamp: new Date('2025-11-21 15:10'),
      avatar: 'О',
      isOwn: true
    },
    {
      id: 16,
      sender: 'Ольга Ткаченко',
      message: 'Чи є якісь поради щодо проходження вебінарів?',
      timestamp: new Date('2025-11-21 15:15'),
      avatar: 'О',
      isOwn: false
    },
    {
      id: 17,
      sender: 'Сергій Бондаренко',
      message: 'Робіть нотатки та ставте запитання спікерам',
      timestamp: new Date('2025-11-21 15:17'),
      avatar: 'С',
      isOwn: false
    },
    {
      id: 18,
      sender: 'Марія Коваленко',
      message: 'Не забудьте зареєструватися на наступний івент!',
      timestamp: new Date('2025-11-21 15:20'),
      avatar: 'М',
      isOwn: false
    },
    {
      id: 19,
      sender: 'Дмитро Петренко',
      message: 'Уже зареєструвався, буде цікаво 👍',
      timestamp: new Date('2025-11-21 15:22'),
      avatar: 'Д',
      isOwn: false
    },
    {
      id: 20,
      sender: 'Анна Шевченко',
      message: 'Успіхів всім у виконанні завдань! До зустрічі на івентах',
      timestamp: new Date('2025-11-21 15:25'),
      avatar: 'А',
      isOwn: false
    }
  ];

  get activeTasks(): Task[] {
    return this.tasks.filter(task => task.status !== 'completed');
  }

  get completedTasksList(): Task[] {
    return this.tasks.filter(task => task.status === 'completed');
  }

  get upcomingEvents(): Event[] {
    return this.events.filter(event => event.date > new Date()).sort((a, b) => a.date.getTime() - b.date.getTime());
  }

  get availablePrizes(): Prize[] {
    return this.prizes.filter(prize => prize.available);
  }

  get topLeaderboard(): LeaderboardUser[] {
    return this.leaderboard.slice(0, 5);
  }

  setView(view: 'tasks' | 'events' | 'leaderboard' | 'prizes' | 'chat'): void {
    this.currentView = view;
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

  formatDateTime(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(date).toLocaleDateString('uk-UA', options);
  }

  formatTime(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(date).toLocaleTimeString('uk-UA', options);
  }

  getDaysUntilDeadline(deadline: Date): number {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate.getTime() - today.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  getRankColor(rank: number): string {
    if (rank === 1) return 'gold';
    if (rank === 2) return 'silver';
    if (rank === 3) return 'bronze';
    return 'default';
  }

  canAffordPrize(credits: number): boolean {
    return this.totalCredits >= credits;
  }

  sendMessage(): void {
    if (this.chatMessage.trim()) {
      this.chatMessages.push({
        id: this.chatMessages.length + 1,
        sender: this.userName,
        message: this.chatMessage,
        timestamp: new Date(),
        avatar: this.userName.charAt(0),
        isOwn: true
      });
      this.chatMessage = '';
    }
  }

  attendEvent(eventId: number): void {
    const event = this.events.find(e => e.id === eventId);
    if (event && event.attendees < event.maxAttendees) {
      event.attendees++;
    }
  }

  redeemPrize(prizeId: number): void {
    const prize = this.prizes.find(p => p.id === prizeId);
    if (prize && this.canAffordPrize(prize.credits)) {
      this.totalCredits -= prize.credits;
      // Add logic to handle prize redemption
    }
  }
}

