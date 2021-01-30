import { CompleteEvent } from '../model/complete.event.holder';

export interface UserEventsResponse {
  userId: string;
  userEvents: CompleteEvent[];
}
