import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { faLinkedin, faMedium, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCopyright, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';

declare let gtag: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnDestroy {
  private routerSubscription: Subscription;

  faLinkedin = faLinkedin;
  faTwitter = faTwitter;
  faMedium = faMedium;
  faEnvelope = faEnvelope;
  faCopyRight = faCopyright;

  currentLang: string;

  private readonly LOCAL_STORAGE_LANGUAGE_KEY = 'current.language';

  constructor(private router: Router,
              private translateService: TranslateService) {
    translateService.setDefaultLang('nl');
    if(!localStorage.getItem(this.LOCAL_STORAGE_LANGUAGE_KEY)) {
      localStorage.setItem(this.LOCAL_STORAGE_LANGUAGE_KEY, 'nl');
    }
    this.currentLang = localStorage.getItem(this.LOCAL_STORAGE_LANGUAGE_KEY);
    this.translateService.use(this.currentLang);
  }

  loadGoogleAnalytics(trackingID: string): void {
    const gaScript = document.createElement('script');
    gaScript.setAttribute('async', 'true');
    gaScript.setAttribute('src', `https://www.googletagmanager.com/gtag/js?id=${trackingID}`);

    const gaScript2 = document.createElement('script');
    gaScript2.innerText = `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag(\'js\', new Date());`;

    document.documentElement.firstChild.appendChild(gaScript);
    document.documentElement.firstChild.appendChild(gaScript2);
  }

  ngAfterViewInit(): void {
    const trackingId = 'UA-169820783-1';
    this.loadGoogleAnalytics(trackingId);
    // subscribe to router events and send page views to Google Analytics
    this.routerSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        gtag('config', trackingId, {
          page_path: event.urlAfterRedirects
        });
      });
  }

  changeLanguage(language: string): void {
    localStorage.setItem(this.LOCAL_STORAGE_LANGUAGE_KEY, language);
    this.currentLang = localStorage.getItem(this.LOCAL_STORAGE_LANGUAGE_KEY);
    this.translateService.use(language);
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }
}
