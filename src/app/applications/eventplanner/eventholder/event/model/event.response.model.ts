import { CompleteEvent } from './complete.event.holder';

export class EventResponseModel {
  httpStatusCode: string;
  responseMessage: string;
  userId: string;
  allUserEvents: CompleteEvent[];

  constructor(httpStatusCode: string, responseMessage: string, userId: string, allUserEvents: CompleteEvent[]) {
    this.httpStatusCode = httpStatusCode;
    this.responseMessage = responseMessage;
    this.userId = userId;
    this.allUserEvents = allUserEvents;
  }
}
