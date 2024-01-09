import { Component, Input } from '@angular/core';
import { techType } from '../types/global';

@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrl: './tech-stack.component.css'
})
export class TechStackComponent {
  @Input() title: string = ''
  @Input() stackList: Array<techType> = []
}
