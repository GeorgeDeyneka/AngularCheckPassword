import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { InfoCardComponent } from './info-card/info-card.component';

@NgModule({
  declarations: [MainPageComponent, InfoCardComponent],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
})
export class MainPageModule {}
