import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { EventService } from 'src/app/applications/eventplanner/service/event.service';
import { GuestService } from 'src/app/applications/eventplanner/service/guest.service';
import { ListGuestElement } from '../../../event/modelinterfaces/list.guests.elements';
import { Guest } from '../guestmodel/guest.model';

@Component({
  selector: 'app-listguests',
  templateUrl: './listguests.component.html',
  styleUrls: ['./listguests.component.css']
})
export class ListGuestsComponent implements OnInit {

  displayedColumns: string[] = [ 'firstName', 'lastName', 'emailAddress' ];
  isLoading = false;
  listGuestElements: ListGuestElement[] = [];
  dataSource: MatTableDataSource<ListGuestElement>;
  selection = new SelectionModel<ListGuestElement>(false, []);
  // userGuests: Guest[] = [];
  selectedGuest: Guest;
  private paginator: MatPaginator;

  constructor(private guestService: GuestService, private router: Router) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.guestService.getAllUserGuests().subscribe( res => {
      console.log('res after all said and done is: ', res);
      // this.populateAllUserEvents(res.userGuests);
      res.userGuests.forEach(element => {
        this.populateGuest(element);
      });
      this.dataSource = new MatTableDataSource<ListGuestElement>(this.listGuestElements);
      this.isLoading = false;
    });
  }

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    console.log('mp holds: ', mp);
    if (mp) {
      this.paginator = mp;
      this.setDataSourceAttributes();
    }
  }

  populateGuest(guest: any) {
    const guestHolder = new Guest(guest.eventGuestId, guest.eventGuestFirstName, guest.eventGuestLastName, guest.eventGuestEmailAddress);
    this.listGuestElements.push(guestHolder);
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

  get formLoading() {
    return this.isLoading;
  }

  onSelect(guest: Guest): void {
    console.log('selected event is: ', guest);
    this.selectedGuest = guest;
    // this.guestService.selectedGuestByUser(this.selectedGuest);
    this.router.navigate(['/event/guest/viewGuest']);
  }

}
