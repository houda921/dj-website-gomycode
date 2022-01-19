import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataModule } from '../data/data.module';
import { DateModule } from '../../common/date.module';
import { CertificateOverviewComponent } from './certificate.overview.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CertificateHttpInterceptor } from './certificate.http.interceptor';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    DataModule,
    DateModule,
    FontAwesomeModule
  ],
  declarations: [CertificateOverviewComponent],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: CertificateHttpInterceptor,
    multi: true
  }]
})
export class CertificateModule {
}
