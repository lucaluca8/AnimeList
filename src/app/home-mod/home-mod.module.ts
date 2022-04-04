import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModRoutingModule } from './home-mod-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from '../header/header.component';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HomeModRoutingModule
  ]
})
export class HomeModModule { }
