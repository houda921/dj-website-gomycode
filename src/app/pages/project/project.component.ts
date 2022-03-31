import { Component } from '@angular/core';
import { Project } from './project';
import { ProjectService } from './project.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  template: `
    <h1 class='page-title' translate>projects.title</h1>
    <div class='header'>
      <h2 class='title'>
        {{ "projects.subtitle" | translate | titlecase }}
      </h2>
      <span class='intro' translate>projects.intro</span>
    </div>
    <div class="projects" *ngIf="projects$ | async as projects">
      <div class="projects-line"></div>
      <ng-container *ngFor="let project of projects; let index = index">
        <app-projects-card
          [left]="isEven(index)"
          [project]="project"
        ></app-projects-card>
      </ng-container>
    </div>
  `,
  styles: [
    `
      .projects {
        padding: 2rem;
        position: relative;
      }

      .projects:before,
      .projects:after {
        content: ' ';
        display: table;
      }

      .projects:after {
        clear: both;
      }

      /* This is the vertical line: didn't put this in a ::before so we can hide it on a small screen using bootstrap class. */
      .projects-line {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 50%;
        margin-left: -0.25%;
        height: 100%;
        width: 0.5%;
        background: #757575;
      }

      li a:hover {
        text-decoration: none;
      }

      /* Small Devices */
      @media only screen and (max-width: 768px) {
        .projects-line {
          display: none;
        }
      }

      .page-title {
        font-weight: 200;
        padding: 2rem 5rem;
        text-transform: uppercase;
        margin: 0;
        background-color: #008073 !important;
        color: #FFFFFF !important;
      }

      .header {
        background-color: #31525b;
        color: #fff;
        padding-bottom: 3rem;
        padding-top: 3rem;
      }

      .title {
        font-size: 3rem;
        font-family: Roboto, serif;
      }

      .intro {
        font-family: Roboto, sans-serif;
        line-height: 1.7rem;
      }

      @media only screen and (max-width: 400px) {
        .header {
          padding-left: 1rem;
          padding-right: 1rem;
        }
      }

      @media only screen and (min-width: 401px) and (max-width: 1000px) {
        .header {
          padding-left: 2rem;
          padding-right: 2rem;
        }
      }

      @media only screen and (min-width: 1001px) {
        .header {
          padding-left: 5rem;
          padding-right: 5rem;
        }
      }
    `
  ]
})
export class ProjectComponent {
  projects$: Observable<Project[]>;

  constructor(private projectService: ProjectService) {
    this.projects$ = projectService.getProjects$();
  }

  isEven(index: number): boolean {
    return index % 2 === 0;
  }
}
