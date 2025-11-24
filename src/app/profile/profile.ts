import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import {Button} from '../shared/button/button';

interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  progress?: number;
  maxProgress?: number;
}

interface Statistic {
  label: string;
  value: string;
  icon: string;
}

@Component({
  selector: 'app-profile',
  imports: [CommonModule, RouterLink, Button],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
  standalone: true
})
export class Profile {
  // Profile Data
  userName: string = 'Олександр';
  userEmail: string = 'oleksandr@example.com';
  userPhone: string = '+380 XX XXX XX XX';
  userLocation: string = 'Київ, Україна';
  joinDate: Date = new Date('2024-09-01');
  userBio: string = 'Амбасадор SFLU з вересня 2024. Захоплююсь маркетингом та комунікаціями.';

  // Level & Progress
  currentLevel: number = 5;
  levelProgress: number = 65;
  nextLevelAt: number = 100;
  totalCredits: number = 1250;

  // Experience points
  currentXP: number = 3250;
  nextLevelXP: number = 5000;
  xpProgress: number = 0;

  // Statistics
  statistics: Statistic[] = [
    { label: 'Завершені завдання', value: '15', icon: '✅' },
    { label: 'Активні завдання', value: '8', icon: '📋' },
    { label: 'Всього балів', value: '1250', icon: '💎' },
    { label: 'Місце в рейтингу', value: '#12', icon: '🏆' },
    { label: 'Події відвідано', value: '7', icon: '📅' },
    { label: 'Реферали', value: '3', icon: '👥' }
  ];

  // Achievements
  achievements: Achievement[] = [
    {
      id: 1,
      title: 'Перші кроки',
      description: 'Завершити перше завдання',
      icon: '🎯',
      unlocked: true
    },
    {
      id: 2,
      title: 'Соціальний гуру',
      description: 'Створити 10 постів у соціальних мережах',
      icon: '📱',
      unlocked: true,
      progress: 10,
      maxProgress: 10
    },
    {
      id: 3,
      title: 'Командний гравець',
      description: 'Взяти участь у 5 подіях',
      icon: '🤝',
      unlocked: true,
      progress: 7,
      maxProgress: 5
    },
    {
      id: 4,
      title: 'Колекціонер',
      description: 'Заробити 1000 кредитів',
      icon: '💰',
      unlocked: true
    },
    {
      id: 5,
      title: 'Реферальний майстер',
      description: 'Залучити 5 нових амбасадорів',
      icon: '🌟',
      unlocked: false,
      progress: 3,
      maxProgress: 5
    },
    {
      id: 6,
      title: 'Марафонець',
      description: 'Завершити 20 завдань',
      icon: '🏃',
      unlocked: false,
      progress: 15,
      maxProgress: 20
    },
    {
      id: 7,
      title: 'Легенда',
      description: 'Досягти 10 рівня',
      icon: '👑',
      unlocked: false,
      progress: 5,
      maxProgress: 10
    },
    {
      id: 8,
      title: 'Відданий',
      description: 'Бути амбасадором 6 місяців',
      icon: '💪',
      unlocked: false,
      progress: 3,
      maxProgress: 6
    }
  ];

  // Recent Activity
  recentActivities: {
    id: number;
    type: string;
    title: string;
    timestamp: Date;
    credits?: number;
  }[] = [
    {
      id: 1,
      type: 'task_completed',
      title: 'Завершено: Пост у соціальних мережах',
      timestamp: new Date('2025-11-23T14:30:00'),
      credits: 150
    },
    {
      id: 2,
      type: 'event_attended',
      title: 'Відвідано подію: Вебінар для амбасадорів',
      timestamp: new Date('2025-11-22T18:00:00'),
      credits: 200
    },
    {
      id: 3,
      type: 'level_up',
      title: 'Досягнуто 5 рівень!',
      timestamp: new Date('2025-11-20T10:15:00')
    },
    {
      id: 4,
      type: 'achievement',
      title: 'Отримано досягнення: Командний гравець',
      timestamp: new Date('2025-11-18T16:45:00')
    }
  ];

  constructor() {
    this.calculateXPProgress();
  }

  calculateXPProgress(): void {
    this.xpProgress = Math.round((this.currentXP / this.nextLevelXP) * 100);
  }

  getActivityIcon(type: string): string {
    const icons: { [key: string]: string } = {
      'task_completed': '✅',
      'event_attended': '📅',
      'level_up': '⬆️',
      'achievement': '🏆',
      'referral': '👥'
    };
    return icons[type] || '📌';
  }

  formatDate(date: Date): string {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor(diff / (1000 * 60));

    if (days > 0) return `${days} дн. тому`;
    if (hours > 0) return `${hours} год. тому`;
    if (minutes > 0) return `${minutes} хв. тому`;
    return 'Щойно';
  }

  getJoinDuration(): string {
    const now = new Date();
    const diff = now.getTime() - this.joinDate.getTime();
    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    if (months === 0) return 'Менше місяця';
    if (months === 1) return '1 місяць';
    if (months < 5) return `${months} місяці`;
    return `${months} місяців`;
  }

  // Star animation helpers
  getRandomPosition(index: number, axis: 'x' | 'y'): number {
    const seed = index * (axis === 'x' ? 137.5 : 222.5);
    return ((seed * 9301 + 49297) % 233280) / 233280 * (axis === 'x' ? 100 : 70);
  }

  getRandomDelay(index: number): number {
    return ((index * 1234) % 100) / 10;
  }

  getRandomDuration(index: number): number {
    return 15 + ((index * 5678) % 100) / 10;
  }

  getStarColor(index: number): string {
    const colors = ['#FFD700', '#FFFFFF', '#FF6B6B', '#4A89FF', '#FFD700'];
    return colors[index % colors.length];
  }
}

