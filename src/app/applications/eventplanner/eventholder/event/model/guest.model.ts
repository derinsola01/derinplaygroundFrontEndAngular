export class Guest {
  guestId: number;
  guestResponse: boolean;
  guestFirstName: string;
  guestLastName: string;
  guestEmailAddress: string;
  guestResponseDate: Date;
  guestRequestDate: Date;

  constructor(guestId: number, guestResponse: boolean, guestFirstName: string, guestLastName: string,
              guestEmailAddress: string, guestResponseDate: Date, guestRequestDate: Date) {
    this.guestId = guestId;
    this.guestResponse = guestResponse;
    this.guestFirstName = guestFirstName;
    this.guestLastName = guestLastName;
    this.guestEmailAddress = guestEmailAddress;
    this.guestResponseDate = guestResponseDate;
    this.guestRequestDate = guestRequestDate;
  }
}
