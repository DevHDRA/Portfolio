import { NgModule, SecurityContext } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { TechStackComponent } from './tech-stack/tech-stack.component';
import { HomeComponent } from './home/home.component';
import { ExperienceTimelineComponent } from './experience-timeline/experience-timeline.component';
import { ProjectComponent } from './project/project.component';
import { gitHubService } from './services/gitHub.service';
import { HttpClientModule } from '@angular/common/http';
import { RepoComponent } from './repo/repo.component';
import { MarkdownModule } from 'ngx-markdown';
import { NgChartsModule } from 'ng2-charts';
import { LoadingComponent } from './loading/loading.component';

import 'prismjs';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';
import { ErrorMessageComponent } from './error-message/error-message.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutComponent,
    TechStackComponent,
    HomeComponent,
    ExperienceTimelineComponent,
    ProjectComponent,
    RepoComponent,
    LoadingComponent,
    ErrorMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
    NgChartsModule,
  ],
  providers: [
    provideClientHydration(),
    gitHubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
