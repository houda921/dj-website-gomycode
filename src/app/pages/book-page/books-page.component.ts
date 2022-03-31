import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Book} from './book';
import {BookService} from './book.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'my-books',
  template: `
    <h1 class='page-title' translate>books.title</h1>
    <div class='header'>
      <h2 class='title'>
        {{ "books.subtitle" | translate | titlecase }}
      </h2>
      <span class='intro' translate='books.intro'></span>
    </div>
    <ng-container *ngIf="books$ | async as books">
      <div class="books-container">
        <book *ngFor="let book of books"
                 class="book-container"
                 [book]="book">
        </book>
      </div>
    </ng-container>
  `,
  styleUrls: ['books-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksPageComponent implements OnInit {
  books$: Observable<Book[]>;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.books$ = this.bookService.getBooks$();
  }
}
