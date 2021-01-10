import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { PlaygrounduserComponent } from './playgrounduser/playgrounduser.component';
import { HomeComponent } from './home/home.component';
import { DiaryComponent } from './applications/diary/diary.component';
import { EventplannerComponent } from './applications/eventplanner/eventplanner.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavigationbarComponent,
    PlaygrounduserComponent,
    HomeComponent,
    DiaryComponent,
    EventplannerComponent
  ],
  imports: [
    RouterModule,
    NgbModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
