import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
  standalone: true
})
export class Button {
  @Input() disabled: boolean = false;
}
