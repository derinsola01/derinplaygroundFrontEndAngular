import { UserDiaryEntry } from './user.diary.entry.model';

export class UserDiary {
  userId: string;
  dairyEntries: UserDiaryEntry[];

  constructor(userId: string, dairyEntries: UserDiaryEntry[]) {
    this.userId = userId;
    this.dairyEntries = dairyEntries;
  }

}
