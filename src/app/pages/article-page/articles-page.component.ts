import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Article} from './article';
import {ArticleService} from './article.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'my-articles',
  template: `
    <h1 class='page-title'>Blog</h1>
    <div class='header'>
      <h2 class='title'>{{"blog.subtitle" | translate | titlecase }}</h2>
      <span class='intro' translate='blog.intro'></span>
    </div>
    <ng-container *ngIf="articles$ | async as articles">
      <div class="articles-container">
        <article *ngFor="let article of articles"
          class="article-container"
          [article]="article">
        </article>
      </div>
    </ng-container>
  `,
  styleUrls: ['./articles-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticlesPageComponent implements OnInit {
  articles$: Observable<Article[]>;

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articles$ = this.articleService.getArticles$();
  }
}
