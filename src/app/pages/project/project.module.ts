import { NgModule } from '@angular/core';
import { ProjectComponent } from './project.component';
import { ProjectCardComponent } from './project.card.component';
import { ProjectTriangleComponent } from './project.triangle.component';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProjectHttpInterceptor } from './project.http.interceptor';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  declarations: [
    ProjectComponent,
    ProjectCardComponent,
    ProjectTriangleComponent
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ProjectHttpInterceptor,
    multi: true
  }]
})
export class ProjectModule {}
