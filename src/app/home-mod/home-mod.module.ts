import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModRoutingModule } from './home-mod-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent
    
  ],
  imports: [
    CommonModule,
    HomeModRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModModule { }
