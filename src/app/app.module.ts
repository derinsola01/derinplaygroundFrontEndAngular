import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
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
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleMapsModule } from '@angular/google-maps';
import { GuestDisplayComponent } from './applications/eventplanner/eventholder/event/guestdisplay/guest.display.component';
import { GeocodeService } from './applications/eventplanner/eventholder/eventinfo/eventlocation/geocoding/location.geocoding.service';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faUser, faHeart, faHome, faSearch, faBars, faEnvelope, faPhone, faMapMarkerAlt, faEdit, faTrash, faSave, faPlus, faMinus, faCheck, faTimes,
          faSpinner, faDownload, faUpload, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faHeart as farHeart, faUser as farUser, faEnvelope as farEnvelope } from '@fortawesome/free-regular-svg-icons';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    PlayGroundUserComponent,
    HomeComponent,
    PageNotFoundComponent,
    AppsLandingComponent,
    LandingPageComponent,
    AboutComponent,
    GuestDisplayComponent
  ],
  imports: [
    RouterModule,
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    MdbAccordionModule,
    BrowserAnimationsModule,
    GoogleMapsModule,
    FontAwesomeModule
  ],
  providers: [GeocodeService, provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary) {
    // Add solid icons
    library.addIcons(
      faUser,
      faHeart,
      faHome,
      faSearch,
      faBars,
      faEnvelope,
      faPhone,
      faMapMarkerAlt,
      faEdit,
      faTrash,
      faSave,
      faPlus,
      faMinus,
      faCheck,
      faTimes,
      faSpinner,
      faDownload,
      faUpload,
      faEye,
      faEyeSlash
    );

    // Add brand icons
    library.addIcons(
      faFacebook,
      faTwitter,
      faInstagram,
      faLinkedin,
      faGithub,
      faGoogle
    );

    // Add regular icons
    library.addIcons(
      farHeart,
      farUser,
      farEnvelope
    );
  }
}
