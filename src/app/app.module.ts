import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { HomeModule } from './pages/home/home.module';
import { CvModule } from './pages/cv/cv.module';
import { ProjectModule } from './pages/project/project.module';
import { VisionModule } from './pages/vision/vision.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ArticleModule } from './pages/article-page/article.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BookModule } from './pages/book-page/book.module';
import { CertificateModule } from './pages/certificate/certificate.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    HeaderModule,
    AppRoutingModule,
    CvModule,
    ArticleModule,
    BookModule,
    CertificateModule,
    HomeModule,
    ProjectModule,
    VisionModule,
    FontAwesomeModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}

export function httpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
