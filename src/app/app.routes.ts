import { Routes } from '@angular/router';
import { Landing } from './landing/landing';
import { Register } from './register/register';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { Profile } from './profile/profile';
import { EditProfile } from './edit-profile/edit-profile';

export const routes: Routes = [
  { path: '', component: Landing },
  { path: 'register', component: Register },
  { path: 'login', component: Login },
  { path: 'dashboard', component: Dashboard },
  { path: 'profile', component: Profile },
  { path: 'edit-profile', component: EditProfile },
  { path: '**', redirectTo: '' }
];
