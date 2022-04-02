import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModRoutingModule } from './home-mod-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeModRoutingModule
  ]
})
export class HomeModModule { }
