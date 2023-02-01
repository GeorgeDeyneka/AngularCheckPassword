import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { InfoCardComponent } from './info-card/info-card.component';
import { HeaderComponent } from '../header/header.component';

@NgModule({
  declarations: [MainPageComponent, HeaderComponent, InfoCardComponent],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
})
export class MainPageModule {}
