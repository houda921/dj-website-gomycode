import { NgModule } from '@angular/core';
import { CvComponent } from './cv.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [LazyLoadImageModule, CommonModule, TranslateModule],
  declarations: [CvComponent]
})
export class CvModule {}
