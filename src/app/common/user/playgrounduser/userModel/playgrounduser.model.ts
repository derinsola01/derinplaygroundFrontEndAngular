export class PlayGroundUser {
  public userId: string;
  public firstName: string;
  public lastName: string;
  public emailAddress: string;
  public emailAddressValidated: boolean;
  public tokenExpirationTime: number;
  private webToken: string;

  constructor(userId: string, firstName: string, lastName: string, emailAddress: string,
              emailAddressValidated: boolean, tokenExpirationTime: number, webToken: string){
    this.userId = userId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailAddress = emailAddress;
    this.emailAddressValidated = emailAddressValidated;
    this.tokenExpirationTime = tokenExpirationTime;
    this.webToken = webToken;
  }

  get userWebToken(){
    return this.webToken;
  }
}
