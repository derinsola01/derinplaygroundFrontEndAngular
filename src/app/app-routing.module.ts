import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmationComponent } from './auth/confirmation/confirmation.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {
    path: 'auth',
    loadChildren: () => import('./auth/module/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'email',
    children: [
      {path: 'confirmEmailAddress/:token', component: ConfirmationComponent},
      {path: '**', component: PageNotFoundComponent}
    ]
  },
  {
    path: 'diary',
    loadChildren: () => import('./applications/diary/diary/diary.module').then(m => m.DiaryModule)
  },
  {
    path: 'event',
    loadChildren: () => import('./applications/eventplanner/eventplanner/eventplanner.module').then(m => m.EventPlannerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
