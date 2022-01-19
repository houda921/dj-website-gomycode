import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksPageComponent } from './books-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataModule } from '../data/data.module';
import { BookComponent } from './book.component';
import { BookRatingComponent } from './book.rating.component';
import { ImageModule } from '../../common/image.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BookHttpInterceptor } from './book.http.interceptor';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    DataModule,
    ImageModule,
    LazyLoadImageModule,
    FontAwesomeModule
  ],
  declarations: [
    BookComponent,
    BooksPageComponent,
    BookRatingComponent
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: BookHttpInterceptor,
    multi: true
  }]
})
export class BookModule {
}
