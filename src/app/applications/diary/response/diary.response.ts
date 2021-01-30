import { UserDiaryEntry } from '../model/user.diary.entry.model';

export interface UserDiaryResponse {
  userId: string;
  dairyEntries: UserDiaryEntry[];
}
