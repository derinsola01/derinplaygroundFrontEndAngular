import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppsLandingComponent } from './applications/appslanding/appslanding.component';
import { ConfirmationComponent } from './auth/confirmation/confirmation.component';
import { RouteGuardService } from './auth/service/routeguard.service';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {
    path: 'auth',
    loadChildren: () => import('./auth/module/auth/auth.module').then(m => m.AuthModule)
  },
  {path: 'appsPage', component: AppsLandingComponent, canActivate: [ RouteGuardService ] },
  {
    path: 'diary',
    loadChildren: () => import('./applications/diary/diary/diary.module').then(m => m.DiaryModule)
  },
  {
    path: 'event',
    loadChildren: () => import('./applications/eventplanner/eventplanner/eventplanner.module').then(m => m.EventPlannerModule)
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
