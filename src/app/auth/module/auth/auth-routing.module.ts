import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { AuthComponent } from '../../auth.component';
import { ConfirmationComponent } from '../../confirmation/confirmation.component';
import { LoginComponent } from '../../login/login.component';
import { PasswordComponent } from '../../password/password.component';
import { RegisterComponent } from '../../register/register.component';
import { RouteGuardService } from '../../service/routeguard.service';


const routes: Routes = [
  {
    path: '', component: AuthComponent,
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'updatePassword', component: PasswordComponent, canActivate: [ RouteGuardService ] },
      {path: 'logout', component: HomeComponent, canActivate: [ RouteGuardService ] },
      {path: 'registerUser', component: RegisterComponent},
      {path: 'confirmEmailAddress/:token', component: ConfirmationComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
