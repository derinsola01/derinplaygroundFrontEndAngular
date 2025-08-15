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
  private mapLoading = false;
  private errorMessage: string | null = null;
  private guestPassToken!: string;

  public completeEvent!: CompleteGuestEvent;
  public completeAddress!: string;

  // keep your holder if you still use it elsewhere
  private locationCoordinateHolder!: LocationCoordinates;

  // ✅ needed by <google-map>
  public zoom = 14;
  public center: google.maps.LatLngLiteral | null = null;
  public markerPosition: google.maps.LatLngLiteral | null = null;

  constructor(
    private router: Router,
    private guestService: GuestService,
    private geocodeService: GeocodeService,
    private ref: ChangeDetectorRef ) {}

  ngOnInit(): void {
    this.displayEventToGuest(this.router.url);
  }

  get formLoading(){ return this.isLoading; }
  get mapLoadingState() { return this.mapLoading; }
  get locationCoordinates() { return this.locationCoordinateHolder; }
  get guestEvent() { return this.completeEvent; }

  displayEventToGuest(invitationUrl: string){
    this.isLoading = true;
    const holder = invitationUrl.split('/');
    const eventToken = holder[2];
    const guestPass = holder[3];

    this.guestService.displayEventToGuest(eventToken, guestPass)
      .subscribe((responseData: CompleteGuestEvent) => {
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
    this.guestService.guestResponseToEvent(this.guestPassToken, guestResponse)
      .subscribe((responseData: CompleteGuestEvent) => {
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

        // ✅ set fields used by <google-map> / <map-marker>
        this.center = { lat: location.lat, lng: location.lng };
        this.markerPosition = { lat: location.lat, lng: location.lng };

        this.mapLoading = false;
        this.ref.detectChanges();
      });
  }
}