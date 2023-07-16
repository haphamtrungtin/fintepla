import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() content: string;
  
  @Input() type: string ='button';

  @Input() styleClass: string;

  @Input() url: string;
}
