import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Builder } from 'builder-pattern/dist/src/Builder';
import { NavigationOption } from './navigation.option';
import {
  faArchive, faBlog,
  faBookReader,
  faChartLine,
  faColumns,
  faFlask,
  faIdBadge,
  faUser
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-options',
  templateUrl: './nav.options.component.html',
  styleUrls: ['./nav.options.component.scss']
})
export class NavOptionsComponent {
  navigationOptions: NavigationOption[];

  @Output()
  navigated = new EventEmitter<void>();

  constructor(private router: Router) {
    this.navigationOptions = [
      Builder<NavigationOption>().path('').text('About').icon(faUser).iconColor('#008073').build(),
      Builder<NavigationOption>().path('vision').text('Vision').icon(faChartLine).iconColor('#00bcd4').build(),
      Builder<NavigationOption>().path('cv').text('Career').icon(faIdBadge).iconColor('#3f51b5').build(),
      Builder<NavigationOption>().path('projects').text('Projects').icon(faArchive).iconColor('#9c27b0').build(),
      Builder<NavigationOption>().path('articles').text('Blog').icon(faBlog).iconColor('#ff9800').build(),
      Builder<NavigationOption>().path('books').text('Books').icon(faBookReader).iconColor('#795548').build(),
      Builder<NavigationOption>().path('data').text('Data').icon(faColumns).iconColor('#ffeb3b').build()
    ];
  }

  getActive(path: string): string {
    return this.router.url === '/' + path ? 'active' : '';
  }

  clickNavigation(): void {
    this.navigated.emit();
  }
}
