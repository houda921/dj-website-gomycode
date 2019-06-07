import {Component, Input} from '@angular/core';
import {LanguageService} from '../translation/language-service';

@Component({
  selector: 'app-change-language-button',
  template: `
    <button class="dropdown-item changeLanguage" (click)="useLanguage(language)">{{language}}</button>
  `,
  styles: [
      `
      .dropdown-item {
        padding: .25rem 1.25rem;
      }
    `
  ]
})
export class ChangeLanguageButtonComponent {

  @Input()
  language: string;

  constructor(private languageService: LanguageService) {
  }

  useLanguage(language: string): void {
    this.languageService.setCurrentLanguage(language);
  }
}
