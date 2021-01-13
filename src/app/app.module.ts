import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigationbar/navigationbar.component';
import { PlayGroundUserComponent } from './playgrounduser/playgrounduser.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationComponent } from './auth/confirmation/confirmation.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    PlayGroundUserComponent,
    HomeComponent,
    ConfirmationComponent,
    PageNotFoundComponent
  ],
  imports: [
    RouterModule,
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
