import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './common/navigation/navigationheader/navigationbar/navigationbar.component';
import { PlayGroundUserComponent } from './common/user/playgrounduser/playgrounduser.component';
import { HomeComponent } from './common/commonpages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageNotFoundComponent } from './common/navigation/navigationheader/pagenotfound/pagenotfound.component';
import { AppsLandingComponent } from './applications/appslanding/appslanding.component';
import { LandingPageComponent } from './applications/appslanding/landingpage/landingpage.component';
import { AboutComponent } from './common/commonpages/about/about.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    PlayGroundUserComponent,
    HomeComponent,
    PageNotFoundComponent,
    AppsLandingComponent,
    LandingPageComponent,
    AboutComponent
  ],
  imports: [
    RouterModule,
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
