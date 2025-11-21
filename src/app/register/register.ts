import { Component } from '@angular/core';
import { TextField } from '../shared/text-field/text-field';
import { Button } from '../shared/button/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [TextField, Button, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.scss',
  standalone: true
})
export class Register {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
}

