import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesPageComponent } from './articles-page.component';
import { DataModule } from '../data/data.module';
import { DateModule } from '../../common/date.module';
import { ImageModule } from '../../common/image.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { ArticleComponent } from './article.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ArticleHttpInterceptor } from './article.http.interceptor';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    DataModule,
    DateModule,
    ImageModule,
    LazyLoadImageModule,
    TranslateModule
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
