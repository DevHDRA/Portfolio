import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  @Input() title: string = ''
  @Input() flex: string = 'flex-row'
}
