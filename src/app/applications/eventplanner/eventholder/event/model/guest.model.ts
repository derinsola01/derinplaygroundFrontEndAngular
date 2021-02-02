export class Guest {
  eventGuestId: number;
  eventGuestResponse: boolean;
  eventGuestFirstName: string;
  eventGuestLastName: string;
  eventGuestEmailAddress: string;
  eventGuestResponseDate: Date;
  eventGuestRequestDate: Date;

  constructor(eventGuestId: number, eventGuestResponse: boolean, eventGuestFirstName: string, eventGuestLastName: string,
              eventGuestEmailAddress: string, eventGuestResponseDate: Date, eventGuestRequestDate: Date) {
    this.eventGuestId = eventGuestId;
    this.eventGuestResponse = eventGuestResponse;
    this.eventGuestFirstName = eventGuestFirstName;
    this.eventGuestLastName = eventGuestLastName;
    this.eventGuestEmailAddress = eventGuestEmailAddress;
    this.eventGuestResponseDate = eventGuestResponseDate;
    this.eventGuestRequestDate = eventGuestRequestDate;
  }
}
