import { Component, OnInit } from '@angular/core';
import { programingLanguages, databases, frameworks, others } from '../constants/techLists';
import { repoArrayData, techType } from '../types/global';
import { gitHubService } from '../services/gitHub.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(
    private gitHub: gitHubService,
  ) {}

  programingLanguageList: Array<techType> = programingLanguages
  databasesList: Array<techType> = databases
  frameworksList: Array<techType> = frameworks
  othersList: Array<techType> = others
  repos: Array<repoArrayData> = []
  loading: boolean = true
  showError: boolean = false

  ngOnInit(): void {
    this.gitHub.getAllRepos()
    .subscribe({
      next: (response: any) => {
        this.repos = response
        this.loading = false
        this.showError = false
      },
      error: (e) => {
        console.error(e)
        this.loading = false
        this.showError = true
      },
    })
  }
}
