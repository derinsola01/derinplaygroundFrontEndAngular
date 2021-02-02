import { EventService } from 'src/app/applications/eventplanner/service/event.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CompleteEvent } from '../model/complete.event.holder';
import { ListGuestElement } from '../modelinterfaces/listguests.element';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { Guest } from '../model/guest.model';

@Component({
  selector: 'app-viewevent',
  templateUrl: './viewevent.component.html',
  styleUrls: ['./viewevent.component.css']
})
export class ViewEventComponent implements OnInit {

  private completeEventDetails: CompleteEvent = this.eventService.selectedEvent;
  private isLoading = false;

  displayedColumns: string[] = [ 'name', 'description', 'startTime', 'endTime' ];
  dataSource: MatTableDataSource<ListGuestElement> = new MatTableDataSource<ListGuestElement>(this.guests);
  selection = new SelectionModel<ListGuestElement>(false, []);
  private paginator: MatPaginator;

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

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
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

  onSelect(guest: Guest): void {
    console.log('selected event is: ', guest);
    // this.selectedEvent = event;
    // this.eventService.selectedEventByUser(this.selectedEvent);
    // this.router.navigate(['/event/viewEvent']);
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

}
