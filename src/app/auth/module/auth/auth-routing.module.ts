import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { AuthComponent } from '../../auth.component';
import { LoginComponent } from '../../login/login.component';
import { PasswordComponent } from '../../password/password.component';
import { RegisterComponent } from '../../register/register.component';


const routes: Routes = [
  {
    path: '', component: AuthComponent,
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'updatePassword', component: PasswordComponent},
      {path: 'logout', component: HomeComponent},
      {path: 'registerUser', component: RegisterComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
