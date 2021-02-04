export class Location {
  locationId: number;
  locationName: string;
  locationAddress: string;
  locationState: string;
  locationZipCode: string;
  locationCountry: string;

  constructor(locationId: number, locationName: string, locationAddress: string,
              locationState: string, locationZipCode: string, locationCountry: string) {
    this.locationId = locationId;
    this.locationName = locationName;
    this.locationAddress = locationAddress;
    this.locationState = locationState;
    this.locationZipCode = locationZipCode;
    this.locationCountry = locationCountry;
  }
}
