import { Location } from './../model/location.model';
import { LocationCoordinates } from './../../eventinfo/eventlocation/geocoding/location.coordinates.model';
import { EventService } from 'src/app/applications/eventplanner/service/event.service';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { CompleteEvent } from '../model/complete.event.holder';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { EventGuest } from '../model/event.guest.model';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { GeocodeService } from '../../eventinfo/eventlocation/geocoding/location.geocoding.service';
import { Guest } from '../../eventinfo/eventguests/guestmodel/guest.model';
import { ListEventGuestElement } from '../modelinterfaces/list.eventguests.element';
import { GuestService } from '../../../service/guest.service';
import { LocationService } from '../../../service/location.service';

@Component({
  selector: 'app-viewevent',
  templateUrl: './viewevent.component.html',
  styleUrls: ['./viewevent.component.css']
})
export class ViewEventComponent implements OnInit {

  private completeEventDetails: CompleteEvent = this.eventService.selectedEvent;
  private isLoading = false;
  private mapLoading: boolean;
  displayedColumns: string[] = [ 'name', 'description', 'startTime', 'endTime' ];
  dataSource: MatTableDataSource<ListEventGuestElement> = new MatTableDataSource<ListEventGuestElement>(this.guests);
  selection = new SelectionModel<ListEventGuestElement>(false, []);
  private paginator: MatPaginator;
  private locationCoordinateHolder: LocationCoordinates;
  completeAddress: string;

  locationControl = new FormControl('', Validators.required);
  guestsControl = new FormControl('', Validators.required);

  userGuests: Guest[] = this.guestService.completeUserGuestList;
  userLocations: Location[] = this.locationService.completeUserLocationList;

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    if (mp) {
      this.paginator = mp;
      this.setDataSourceAttributes();
    }
  }

  createGuestFormGroup() {
    return this.formBuilder.group({
      guestFirstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      guestLastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      guestEmailAddress: ['', [Validators.required, Validators.email]]
    });
  }

  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;

    // if (this.paginator) {
    //   this.applyFilter('');
    // }
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  constructor(private geocodeService: GeocodeService,
              private formBuilder: FormBuilder,
              private ref: ChangeDetectorRef,
              private guestService: GuestService,
              private locationService: LocationService,
              private eventService: EventService) { }

  ngOnInit(): void {
    this.computeEventAddressForDisplay();
    this.showLocation();
  }

  computeEventAddressForDisplay() {
    if ( this.eventService.selectedEvent.locationDTO ) {
      const completeLocationAddress = this.eventService.selectedEvent.locationDTO;
      const completeAddress = completeLocationAddress.locationAddress + ' ' + completeLocationAddress.locationState
          + ' ' + completeLocationAddress.locationZipCode + ' ' + completeLocationAddress.locationCountry;
      this.completeAddress = completeAddress;
    }
  }

  get dataSourceLength() {
    return this.dataSource.data.length;
  }
  get formLoading(){
    return this.isLoading;
  }

  get completeEvent() {
    return this.completeEventDetails;
  }

  get event() {
    return this.completeEventDetails.eventDTO;
  }

  get guests() {
    return this.completeEventDetails.guestDTO;
  }

  get location() {
    return this.completeEventDetails.locationDTO;
  }

  onSelect(guest: EventGuest): void {
    console.log('selected event is: ', guest);
    // this.selectedEvent = event;
    // this.eventService.selectedEventByUser(this.selectedEvent);
    // this.router.navigate(['/event/viewEvent']);
  }

  onSubmitEventGuests(selectGuests) {
    console.log('select Length is: ', selectGuests.value.length);
    console.log('this.completeEventDetails.eventDTO.eventId is: ', this.completeEventDetails.eventDTO.eventId);
    this.guestService.addGuestsToEvent(selectGuests.value, this.completeEventDetails.eventDTO.eventId)
          .subscribe(response => {
            this.sendEmailInvitations(response.guestEmailTokens);
          });
    selectGuests.reset();
  }

  sendEmailInvitations(guestTokens: string[]){
    this.eventService.notifyGuestsOfEvents(guestTokens).subscribe(
      res => { console.log('sendEmailInvitations response is: ', res); }
    );
  }

  onSubmitEventLocation(selectedLocation) {
    console.log('selected LocationId is: ', selectedLocation.value);
    console.log('this.completeEventDetails.eventDTO.eventId is: ', this.completeEventDetails.eventDTO.eventId);
    this.locationService.addLocationToEvent(selectedLocation.value, this.completeEventDetails.eventDTO.eventId).subscribe();
    selectedLocation.reset();
    this.computeEventAddressForDisplay();
    this.showLocation();
  }

  showLocation() {
    this.addressToCoordinates();
  }

  get mapLoadingState() {
    return this.mapLoading;
  }

  get locationCoordinates() {
    return this.locationCoordinateHolder;
  }

  addressToCoordinates() {
    this.mapLoading = true;
    this.geocodeService.geocodeAddress(this.completeAddress)
    .subscribe((location: LocationCoordinates) => {
        this.locationCoordinateHolder = location;
        console.log('location coordinates is: ', location);
        this.mapLoading = false;
        this.ref.detectChanges();
      }
    );
  }

}
