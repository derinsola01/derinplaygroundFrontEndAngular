export class Location {
  eventLocationId: number;
  eventLocationName: string;
  eventLocationAddress: string;
  eventLocationState: string;
  eventLocationZipCode: string;
  eventLocationCountry: string;

  constructor(eventLocationId: number, eventLocationName: string, eventLocationAddress: string,
              eventLocationState: string, eventLocationZipCode: string, eventLocationCountry: string) {
    this.eventLocationId = eventLocationId;
    this.eventLocationName = eventLocationName;
    this.eventLocationAddress = eventLocationAddress;
    this.eventLocationState = eventLocationState;
    this.eventLocationZipCode = eventLocationZipCode;
    this.eventLocationCountry = eventLocationCountry;
  }
}
