import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-text.component.html',
  styleUrls: ['./custom-text.component.css']

})
export class CustomTextComponent {
  @Input() isUnderlined = false;

  @Input() content : string; 

  @Input() class: string; 

  @Input() type: string;
  
  @Input() header: string;
}
