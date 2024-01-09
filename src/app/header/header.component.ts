import { Component } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  openLinkedin() {
    window.open(environment.LINKEDIN, '_blank');
  }

  openGithub() {
    window.open(environment.GITHUB, '_blank');
  }

  openResume() {
    window.open(environment.CV, '_blank');
  }
}
