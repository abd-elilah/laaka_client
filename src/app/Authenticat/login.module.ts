import { LoginComponent } from './login/login.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';


import { LoginRoutingModule } from './login-routing.module';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';


@NgModule({
  declarations: [LoginComponent, WelcomeComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule
  ]
})
export class LoginModule { }
