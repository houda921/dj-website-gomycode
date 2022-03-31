import { NgModule } from '@angular/core';
import { VisionComponent } from './vision.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  declarations: [VisionComponent]
})
export class VisionModule {
}
