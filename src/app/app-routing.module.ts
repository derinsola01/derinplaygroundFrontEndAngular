import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppsLandingComponent } from './applications/appslanding/appslanding.component';
import { LandingPageComponent } from './applications/appslanding/landingpage/landingpage.component';
import { AuthGuardService } from './auth/service/routeguards/authguard.service';
import { RouteGuardService } from './auth/service/routeguards/routeguard.service';
import { AboutComponent } from './common/commonpages/about/about.component';
import { HomeComponent } from './common/commonpages/home/home.component';
import { PageNotFoundComponent } from './common/navigation/navigationheader/pagenotfound/pagenotfound.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {
    path: 'auth',
    loadChildren: () => import('./auth/module/auth/auth.module').then(m => m.AuthModule)
  },
  {path: 'landingPage', component: LandingPageComponent, canActivate: [ AuthGuardService ] },
  {path: 'appsPage', component: AppsLandingComponent, canActivate: [ RouteGuardService ] },
  {
    path: 'diary',
    loadChildren: () => import('./applications/diary/diary/diary.module').then(m => m.DiaryModule)
  },
  {
    path: 'event',
    loadChildren: () => import('./applications/eventplanner/eventholder/event/eventrouting/event/event.module').then(m => m.EventModule)
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
