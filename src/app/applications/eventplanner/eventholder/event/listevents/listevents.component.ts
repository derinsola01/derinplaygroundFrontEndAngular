import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { EventService } from '../../../service/event.service';
import { Router } from '@angular/router';
import { CompleteEvent } from '../model/complete.event.holder';
import { EventResponseModel } from '../model/event.response.model';
import { Guest } from '../model/guest.model';
import { Location } from '../model/location.model';
import { UserEvent } from '../model/userevent.model';
import { ListEventElement } from './listevents.elements';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-listevents',
  templateUrl: './listevents.component.html',
  styleUrls: ['./listevents.component.css']
})
export class ListEventsComponent implements OnInit { // AfterViewInit
  displayedColumns: string[] = [ 'name', 'description', 'startTime', 'endTime' ];
  isLoading = false;
  allUserEvents: Array<CompleteEvent> = [];
  listEventElements: ListEventElement[] = [];
  dataSource: MatTableDataSource<ListEventElement>; // new MatTableDataSource<ListEventElement>(this.listElements);
  selection = new SelectionModel<ListEventElement>(false, []);
  selectedEvent: UserEvent;
  private paginator: MatPaginator;

  // initialSelection = [];
  // allowMultiSelect = true;
  // selection = new SelectionModel<UserEvent>(this.allowMultiSelect, this.initialSelection);

  // @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    if (mp) {
      this.paginator = mp;
      this.setDataSourceAttributes();
    }
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

  constructor(private eventService: EventService, private router: Router) { }

  // ngAfterViewInit() {
  //   setTimeout(() => this.dataSource.paginator = this.paginator);
  //   this.dataSource.paginator = this.paginator;
  // }

  ngOnInit(): void {
    this.isLoading = true;
    this.eventService.getCompleteEvents().subscribe( (res: EventResponseModel) => {
      console.log('res after all said and done is: ', res);
      this.populateAllUserEvents(res.allUserEvents);
      this.dataSource = new MatTableDataSource<ListEventElement>(this.listElements);
      this.isLoading = false;
    });
  }

  onSelect(event: UserEvent): void {
    console.log('selected event is: ', event);
    this.selectedEvent = event;
    this.eventService.selectedEventByUser(this.selectedEvent);
    this.router.navigate(['/event/viewEvent']);
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => console.log('what does row hold?', row) /*this.selection.select(row) */);
  }

  viewEvent(event: any) {
    console.log('row details is: ', event);
  }

  get listElements() {
    console.log('listElements holds: ', this.listEventElements);
    return this.listEventElements;
  }

  populateLocation(data: Location) {
    let location = null;
    if (data) {
      location = new Location(data.eventLocationId, data.eventLocationName,
                              data.eventLocationAddress, data.eventLocationState,
                              data.eventLocationZipCode, data.eventLocationCountry);
    }
    return location;
  }

  populateGuests(data: Guest[]) {
    const guests = [];
    if (data) {
      data.forEach(element => {
        const guest = new Guest(element.eventGuestId, element.eventGuestResponse,
                                element.eventGuestFirstName, element.eventGuestLastName,
                                element.eventGuestEmailAddress, element.eventGuestResponseDate, element.eventGuestRequestDate);
        guests.push(guest);
      });
    }
    return guests;
  }

  populateEvent(data: UserEvent) {
    let event = null;
    if (data) {
      event = new UserEvent(data.eventId, data.eventName, data.eventDescription, data.eventStartTime, data.eventEndTime);
      this.listEventElements.push(event);
    }
    return event;
  }

  populateAllUserEvents(data: CompleteEvent[]) {
    data.forEach(element => {
      const location = this.populateLocation(element.locationDTO);
      const guests = this.populateGuests(element.guestDTO);
      const event = this.populateEvent(element.eventDTO);
      const eventDeets = new CompleteEvent(event, location, guests);
      this.allUserEvents.push(eventDeets);
    });
  }

  get userEvents() {
    return this.allUserEvents;
  }

  get formLoading() {
    return this.isLoading;
  }
}
