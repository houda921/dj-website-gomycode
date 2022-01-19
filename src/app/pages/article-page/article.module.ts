import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesPageComponent } from './articles-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataModule } from '../data/data.module';
import { DateModule } from '../../common/date.module';
import { ImageModule } from '../../common/image.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { ArticleComponent } from './article.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ArticleHttpInterceptor } from './article.http.interceptor';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    DataModule,
    DateModule,
    ImageModule,
    LazyLoadImageModule
  ],
  declarations: [
    ArticlesPageComponent,
    ArticleComponent
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ArticleHttpInterceptor,
    multi: true
  }],
})
export class ArticleModule {}
