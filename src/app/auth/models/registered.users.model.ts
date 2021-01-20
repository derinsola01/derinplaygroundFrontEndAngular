export class RegisteredUsers {
  public userIds: string[];
  public emailAddresses: string[];

  constructor(userIds: string[], emailAddresses: string[]){
    this.userIds = userIds;
    this.emailAddresses = emailAddresses;
  }
}
