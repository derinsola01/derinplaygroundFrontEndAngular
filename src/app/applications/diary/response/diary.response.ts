import { UserDiaryEntries } from '../model/user.diary.entries.model';

export interface UserDiaryResponse {
  userId: string;
  dairyEntries: UserDiaryEntries[];
}
