import { Component, OnInit } from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'app-home',
  template: `
    <div class='home'>
      <h1 class='page-title' translate>page.title.services</h1>
      <div class='header'>
        <div class='pb-3 pt-5'>
          <div class='text-header'>
            <h2 class='title' translate>company.name</h2>
            <span class='intro'>
              <p translate>company.goal</p>
              <p translate>company.history</p>
              <p translate>company.difference.with.competition</p>
            </span>
          </div>
        </div>
      </div>
      <div class='slant'></div>
      <div class='home'>
        <div class='services'>
          <div class='service card'>
            <h2 translate>service.software.development</h2>
            <span>
              <p translate>service.software.development.focus</p>
              <p translate>service.software.development.current.workstatus</p>
              <p translate>service.software.development.next.assignment</p>
            </span>
          </div>
          <div class='service card'>
            <h2 translate>service.coaching</h2>
            <span>
              <p translate>service.coaching.focus</p>
              <p translate>service.coaching.current.workstatus</p>
              <p translate>service.coaching.next.assignment</p>
            </span>
          </div>
          <div class='service card'>
            <h2 translate>service.partnership</h2>
            <span>
              <p translate>partnership.assignments</p>
              <p translate>partnership.developers</p>
              <p translate>partnership.reason</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
