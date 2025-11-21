import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Button} from '../shared/button/button';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, Button, RouterLink],
  templateUrl: './landing.html',
  styleUrl: './landing.scss'
})
export class Landing {
  onLoginClick(): void {
    console.log('Login clicked');
    // Add login logic here
  }

  onSignUpClick(): void {
    console.log('Sign Up clicked');
    // Add sign up logic here
  }

  onGetStartedClick(): void {
    console.log('Get Started clicked');
    // Add get started logic here
  }
}

