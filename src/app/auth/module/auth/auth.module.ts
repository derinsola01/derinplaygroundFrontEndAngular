import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from '../../auth.component';
import { LoginComponent } from '../../login/login.component';
import { PasswordComponent } from '../../password/password.component';
import { RegisterComponent } from '../../register/register.component';
import { AuthLoadingSpinnersComponent } from 'src/app/common/authloadingspinners/authloadingspinners.component';
import { ConfirmationComponent } from '../../confirmation/confirmation.component';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    PasswordComponent,
    AuthLoadingSpinnersComponent,
    ConfirmationComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    AuthRoutingModule
  ],
  exports: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    PasswordComponent,
    AuthLoadingSpinnersComponent,
    ConfirmationComponent
  ]
})
export class AuthModule { }
