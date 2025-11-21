import { Component } from '@angular/core';
import { TextField } from '../shared/text-field/text-field';
import { Button } from '../shared/button/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [TextField, Button, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
  standalone: true
})
export class Login {
  email: string = '';
  password: string = '';
}

