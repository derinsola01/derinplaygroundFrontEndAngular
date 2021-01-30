export class UserEvent {
  eventId: number;
  eventName: string;
  eventDescription: string;
  eventStartTime: Date;
  eventEndTime: Date;

  constructor(eventId: number, eventName: string, eventDescription: string, eventStartTime: Date, eventEndTime: Date) {
    this.eventId = eventId;
    this.eventName = eventName;
    this.eventDescription = eventDescription;
    this.eventStartTime = eventStartTime;
    this.eventEndTime = eventEndTime;
  }
}
