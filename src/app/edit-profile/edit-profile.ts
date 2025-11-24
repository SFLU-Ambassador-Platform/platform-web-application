import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink, Router} from '@angular/router';
import {Button} from '../shared/button/button';
import {TextField} from '../shared/text-field/text-field';
import {FormsModule} from '@angular/forms';

interface ProfileData {
  userName: string;
  userEmail: string;
  userPhone: string;
  userLocation: string;
  userBio: string;
  avatar: string;
}

@Component({
  selector: 'app-edit-profile',
  imports: [CommonModule, RouterLink, Button, TextField, FormsModule],
  templateUrl: './edit-profile.html',
  styleUrl: './edit-profile.scss',
  standalone: true
})
export class EditProfile {
  // Profile Data
  profileData: ProfileData = {
    userName: 'Олександр',
    userEmail: 'oleksandr@example.com',
    userPhone: '+380 XX XXX XX XX',
    userLocation: 'Київ, Україна',
    userBio: 'Амбасадор SFLU з вересня 2024. Захоплююсь маркетингом та комунікаціями.',
    avatar: 'О'
  };

  // Form fields
  userName: string = '';
  userEmail: string = '';
  userPhone: string = '';
  userLocation: string = '';
  userBio: string = '';

  // Social links
  facebookUrl: string = '';
  instagramUrl: string = '';
  twitterUrl: string = '';
  linkedinUrl: string = '';

  // Password change
  currentPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  // Validation
  isFormDirty: boolean = false;
  isSaving: boolean = false;
  showSuccessMessage: boolean = false;
  showErrorMessage: boolean = false;
  errorMessage: string = '';

  constructor(private router: Router) {
    this.loadProfileData();
  }

  loadProfileData(): void {
    this.userName = this.profileData.userName;
    this.userEmail = this.profileData.userEmail;
    this.userPhone = this.profileData.userPhone;
    this.userLocation = this.profileData.userLocation;
    this.userBio = this.profileData.userBio;
  }

  onFormChange(): void {
    this.isFormDirty = true;
  }

  validateForm(): boolean {
    if (!this.userName.trim()) {
      this.errorMessage = 'Будь ласка, введіть ім\'я';
      return false;
    }

    if (!this.userEmail.trim() || !this.isValidEmail(this.userEmail)) {
      this.errorMessage = 'Будь ласка, введіть коректну електронну пошту';
      return false;
    }

    if (this.newPassword && this.newPassword !== this.confirmPassword) {
      this.errorMessage = 'Паролі не співпадають';
      return false;
    }

    if (this.newPassword && this.newPassword.length < 6) {
      this.errorMessage = 'Пароль повинен містити мінімум 6 символів';
      return false;
    }

    return true;
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  saveProfile(): void {
    if (this.isSaving || !this.isFormDirty) {
      return;
    }

    if (!this.validateForm()) {
      this.showErrorMessage = true;
      setTimeout(() => {
        this.showErrorMessage = false;
      }, 3000);
      return;
    }

    this.isSaving = true;

    // Simulate API call
    setTimeout(() => {
      this.profileData.userName = this.userName;
      this.profileData.userEmail = this.userEmail;
      this.profileData.userPhone = this.userPhone;
      this.profileData.userLocation = this.userLocation;
      this.profileData.userBio = this.userBio;

      this.isSaving = false;
      this.isFormDirty = false;
      this.showSuccessMessage = true;

      // Clear password fields
      this.currentPassword = '';
      this.newPassword = '';
      this.confirmPassword = '';

      setTimeout(() => {
        this.showSuccessMessage = false;
      }, 3000);
    }, 1500);
  }

  cancelEdit(): void {
    if (this.isFormDirty) {
      const confirmed = confirm('У вас є незбережені зміни. Ви впевнені, що хочете вийти?');
      if (!confirmed) return;
    }
    this.router.navigate(['/profile']);
  }

  uploadAvatar(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) => {
        // Handle avatar upload
        console.log('Avatar uploaded:', file.name);
        this.onFormChange();
      };

      reader.readAsDataURL(file);
    }
  }

  removeAvatar(): void {
    this.profileData.avatar = this.userName.charAt(0);
    this.onFormChange();
  }

  getAvatarInitial(): string {
    return this.userName.charAt(0).toUpperCase() || 'О';
  }
}

