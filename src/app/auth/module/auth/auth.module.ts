import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from '../../auth.component';
import { LoginComponent } from '../../login/login.component';
import { PasswordComponent } from '../../password/password.component';
import { RegisterComponent } from '../../register/register.component';


@NgModule({
  declarations: [ AuthComponent, LoginComponent, RegisterComponent, PasswordComponent ],
  imports: [ CommonModule, AuthRoutingModule ],
  exports: [ AuthComponent, LoginComponent, RegisterComponent, PasswordComponent ]
})
export class AuthModule { }
