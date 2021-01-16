export class PlayGroundUser {
  public userId: string;
  public firstName: string;
  public lastName: string;
  public emailAddress: string;
  public emailAddressValidated: boolean;
  private webToken: string;

  constructor(userId: string, firstName: string, lastName: string, emailAddress: string,
              emailAddressValidated: boolean, webToken: string){
    this.userId = userId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailAddress = emailAddress;
    this.emailAddressValidated = emailAddressValidated;
    this.webToken = webToken;
  }

  get userWebToken(){
    return this.webToken;
  }
}
