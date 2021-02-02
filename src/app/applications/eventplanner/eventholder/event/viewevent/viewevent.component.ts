import { EventService } from 'src/app/applications/eventplanner/service/event.service';
import { Component, OnInit } from '@angular/core';
import { CompleteEvent } from '../model/complete.event.holder';

@Component({
  selector: 'app-viewevent',
  templateUrl: './viewevent.component.html',
  styleUrls: ['./viewevent.component.css']
})
export class ViewEventComponent implements OnInit {

  allUserEventsMap: Map<number, CompleteEvent> = this.eventService.allUserEventsMap;
  private isLoading = false;

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    console.log('allUserEventsMap holds: ', this.allUserEventsMap);
  }

  get formLoading(){
    return this.isLoading;
  }

}
