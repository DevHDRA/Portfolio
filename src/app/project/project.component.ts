import { Component, Input } from '@angular/core';
import { repoArrayData } from '../types/global';
import { Router } from '@angular/router';
import { gitHubService } from '../services/gitHub.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {

  constructor(
    private router: Router,
    private gitHubService: gitHubService
  ) {}

  @Input() repoData: repoArrayData = {
    name: '',
    html_url: '',
    description: '',
    language: '',
    created_at: '',
    updated_at: '',
  }
  
  openRepo(url: string) {
    window.open(url, '_blank');
  }

  showDetails() {
    this.gitHubService.setCurrentRepo(this.repoData)
    this.router.navigate([`repo/${this.repoData.name}`])
  }
}
