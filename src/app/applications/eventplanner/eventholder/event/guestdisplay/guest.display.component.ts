import { GuestService } from './../../../service/guest.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompleteGuestEvent } from '../model/complete.guest.event';
import { GeocodeService } from '../../eventinfo/eventlocation/geocoding/location.geocoding.service';
import { LocationCoordinates } from '../../eventinfo/eventlocation/geocoding/location.coordinates.model';

@Component({
  selector: 'app-guest-display',
  templateUrl: './guest.display.component.html',
  styleUrls: ['./guest.display.component.css']
})
export class GuestDisplayComponent implements OnInit {

  private isLoading = false;
  private mapLoading: boolean;
  private errorMessage: string = null;
  private guestPassToken: string;
  public completeEvent: CompleteGuestEvent;
  public completeAddress: string;
  private locationCoordinateHolder: LocationCoordinates;

  constructor(
    private router: Router,
    private guestService: GuestService,
    private geocodeService: GeocodeService,
    private ref: ChangeDetectorRef ) { }

  ngOnInit(): void {
    this.displayEventToGuest(this.router.url);
  }

  get formLoading(){
    return this.isLoading;
  }

  get mapLoadingState() {
    return this.mapLoading;
  }

  get locationCoordinates() {
    return this.locationCoordinateHolder;
  }

  get guestEvent() {
    if (this.completeEvent) {
      return this.completeEvent;
    }
  }

  displayEventToGuest(invitationUrl){
    this.isLoading = true;
    const holder = invitationUrl.split('/');
    // const newUrl = 'http://localhost:8900/event/' + holder[2];
    const eventToken = holder[2];
    const guestPass = holder[3];
    this.guestService.displayEventToGuest(eventToken, guestPass).subscribe((responseData: CompleteGuestEvent) => {
      this.completeEvent = this.guestService.completGuestEvent;
      this.completeAddress = this.guestService.completeLocationAddress;
      this.addressToCoordinates(this.completeAddress);
      this.isLoading = false;
      this.guestPassToken = responseData.guestDTO.eventGuestToken;
    });
  }

  guestResponseToEvent(){
    this.isLoading = true;
    const guestResponse = false;
    this.guestService.guestResponseToEvent(this.guestPassToken, guestResponse).subscribe((responseData: CompleteGuestEvent) => {
      this.completeEvent = this.guestService.completGuestEvent;
      this.completeAddress = this.guestService.completeLocationAddress;
      this.addressToCoordinates(this.completeAddress);
      this.isLoading = false;
    });
  }

  addressToCoordinates(address: string) {
    this.mapLoading = true;
    this.geocodeService.geocodeAddress(address)
          .subscribe((location: LocationCoordinates) => {
              this.locationCoordinateHolder = location;
              this.mapLoading = false;
              this.ref.detectChanges();
          });
  }

}
