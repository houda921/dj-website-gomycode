import { Component, Input } from '@angular/core';
import { faWater } from '@fortawesome/free-solid-svg-icons';
import { Project } from './project';

@Component({
  selector: 'app-projects-card',
  template: `
    <div class="date-sm mb-1">{{ project.timeSpan }}</div>
    <div class="projects-block">
      <div
        class="card projects-content-left"
        [ngClass]="left ? 'projects-content-left' : 'projects-content-right'"
      >
        <div class="card-header">
          <span
><!--<fa-icon [icon]="faWater"></fa-icon>-->
            <i class="fa" [ngClass]="project.icon"></i>
            {{ project.client }}</span
          >
        </div>
        <div class="card-body">
          <h5 class="card-title">{{ project.jobTitle }}</h5>
          <ul class="card-text" *ngIf="project.responsibilities">
            <li *ngFor="let responsibility of project.responsibilities">
              {{ responsibility }}
            </li>
          </ul>
          <div *ngIf="project.technologies" class="text-center">
            <span
              *ngFor="let technology of project.technologies"
              class="badge rounded-pill bg-dark text-white ms-1"
              >{{ technology }}</span
            >
          </div>
        </div>
        <span [ngClass]="left ? 'date-right' : 'date-left'">{{
          project.timeSpan
        }}</span>
        <app-projects-triangle [left]="left"></app-projects-triangle>
      </div>
    </div>
  `,
  styleUrls: ['project.card.component.scss']
})
export class ProjectCardComponent {
  faWater = faWater;

  @Input()
  left: boolean;

  @Input()
  project: Project;
}
