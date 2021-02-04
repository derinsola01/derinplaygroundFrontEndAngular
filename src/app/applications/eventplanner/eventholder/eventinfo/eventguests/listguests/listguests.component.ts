import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { EventService } from 'src/app/applications/eventplanner/service/event.service';
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
  dataSource: MatTableDataSource<ListGuestElement>; // new MatTableDataSource<ListEventElement>(this.listElements);
  selection = new SelectionModel<ListGuestElement>(false, []);
  selectedGuest: Guest;
  private paginator: MatPaginator;

  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<ListGuestElement>(this.eventService.completeUserGuestList);
    this.isLoading = false;
  }

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    console.log('mp holds: ', mp);
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

  get formLoading() {
    return this.isLoading;
  }

  onSelect(guest: Guest): void {
    console.log('selected event is: ', guest);
    this.selectedGuest = guest;
    // this.eventService.selectedGuestByUser(this.selectedGuest);
    this.router.navigate(['/event/guest/viewGuest']);
  }

}
