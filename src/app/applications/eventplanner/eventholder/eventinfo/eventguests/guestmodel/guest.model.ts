export class Guest {
  guestId: number | null;
  firstName: string;
  lastName: string;
  emailAddress: string;

  constructor(guestId: number, firstName: string, lastName: string, emailAddress: string){
    this.guestId = guestId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailAddress = emailAddress;
  }
}
