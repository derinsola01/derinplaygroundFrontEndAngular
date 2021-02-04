import { Location } from './../../../event/model/location.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { EventService } from 'src/app/applications/eventplanner/service/event.service';
import { SelectionModel } from '@angular/cdk/collections';
import { ListLocationElement } from '../../../event/modelinterfaces/list.locations.element';

@Component({
  selector: 'app-listlocations',
  templateUrl: './listlocations.component.html',
  styleUrls: ['./listlocations.component.css']
})
export class ListLocationsComponent implements OnInit {

  displayedColumns: string[] = [ 'locationName', 'locationAddress', 'locationZipcode', 'locationState', 'locationCountry' ];
  isLoading = false;
  listLocationElements: ListLocationElement[] = [];
  dataSource: MatTableDataSource<ListLocationElement>; // new MatTableDataSource<ListEventElement>(this.listElements);
  selection = new SelectionModel<ListLocationElement>(false, []);
  selectedLocation: Location;
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

  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<ListLocationElement>(this.eventService.completeUserLocationList);
    this.isLoading = false;
  }

  get formLoading() {
    return this.isLoading;
  }

  onSelect(location: Location): void {
    console.log('selected location is: ', location);
    this.selectedLocation = location;
    // this.eventService.selectedGuestByUser(this.selectedGuest);
    this.router.navigate(['/event/location/viewLocation']);
  }

}
