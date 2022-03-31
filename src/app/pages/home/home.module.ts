import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../../app-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    TranslateModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule {}
