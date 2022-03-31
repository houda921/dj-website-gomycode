import { Component } from '@angular/core';

@Component({
  selector: 'app-cv',
  template: `
    <h1 class='page-title' translate='career.title'></h1>
    <div class='header'>
      <h2 class='title'>
        {{ 'career.subtitle' | translate | titlecase }}
      </h2>
      <span class='intro' translate='career.intro'></span>
    </div>
    <div class='download-button-container'>
      <a class='btn btn-dark btn-lg download-button' href='/assets/cv.pdf' download>Download CV</a>
    </div>
    <iframe class='cv-frame' src='/assets/cv.pdf' width='100%' height='600px'></iframe>
  `,
  styleUrls: ['./cv.component.scss']
})
export class CvComponent {
}
