import { Component, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { gitHubService } from '../services/gitHub.service';
import { ActivatedRoute, Router } from '@angular/router';
import { repoArrayData } from '../types/global';
import { isPlatformBrowser } from '@angular/common';
import { ChartConfiguration, ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrl: './repo.component.css'
})
export class RepoComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  codeLines: Array<number> = [100]
  languages: Array<string> = ['base']
  totalCodeLines: number = 0
  isBrowser = isPlatformBrowser(PLATFORM_ID);
  markdown = ``
  repoName: string = ''
  repo: repoArrayData = {
    name: '',
    html_url: '',
    description: '',
    language: '',
    created_at: '',
    updated_at: '',
  }
  loading: boolean = true
  showError: boolean = false

  pieChartOptions: ChartConfiguration['options'] = {
    plugins: {
      legend: {
        display: true,
        position: 'left',
        onClick: () => {},
      },
    },
  };

  pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#D4F205', '#FF00FF', '#00FFFF', '#000000'],
        hoverBackgroundColor: ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#D4F205', '#FF00FF', '#00FFFF', '#000000'],
      },
    ],
  };
  
  constructor(
    private router: Router,
    private gitHubService: gitHubService,
    private activatedRoute: ActivatedRoute
  ) {
    this.repo = gitHubService.currentRepo
  }

  ngOnInit(): void {
    this.repoName = this.activatedRoute.snapshot.params['repoName']
    this.gitHubService.getRepoMd(this.repoName)
    .subscribe({
    next: (res: any) => {
      // const newMarkdownText = res.replace(/\\n/g, "\n");
      this.markdown = res['readme']

      let lines: Array<number> = Object.values<number>(res['languages']);
      this.languages = Object.keys(res['languages']);
      this.totalCodeLines = lines.reduce((accumulator, currentObject) => accumulator + currentObject, 0);

      this.codeLines = lines.map((code: number) => {
        let percent = (code / this.totalCodeLines) * 100
        return parseFloat(percent.toFixed(2))
      })
      this.pieChartData = {
        labels: this.languages,
        datasets: [
          {
            data: this.codeLines,
            backgroundColor: ['#2f422b', '#6a994e', '#4a6b3c', '#d0d78c','#e2df9c', '#f2e8cf', '#fafaf4', '#d0d78c'],
          },
        ],
      };
      this.chart?.update()
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

  goRepo(url: string) {
    window.open(url, '_blank');
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
