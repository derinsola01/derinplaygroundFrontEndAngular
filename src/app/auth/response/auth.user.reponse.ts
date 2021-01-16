export interface AuthenticatedUserResponse {
  responseMessage: string;
  userId: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
  webToken: string;
  httpStatusCode: string;
  emailAddressValidated: boolean;
}
