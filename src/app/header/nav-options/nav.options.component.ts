import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { faArchive, faBlog, faBookReader, faChartLine, faIdBadge, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-options',
  templateUrl: './nav.options.component.html',
  styleUrls: ['./nav.options.component.scss']
})
export class NavOptionsComponent {

  faUser = faUser;
  faChartLine = faChartLine;
  faArchive = faArchive;
  faBlog = faBlog;
  faBookReader = faBookReader;
  faIdBadge = faIdBadge;

  @Output()
  navigated = new EventEmitter<void>();

  constructor(private router: Router) {
  }

  getActive(path: string): string {
    return this.router.url === '/' + path ? 'active' : '';
  }

  clickNavigation(): void {
    this.navigated.emit();
  }
}
