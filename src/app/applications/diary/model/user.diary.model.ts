import { UserDiaryEntries } from './user.diary.entries.model';

export class UserDiary {
  userId: string;
  dairyEntries: UserDiaryEntries[];

  constructor(userId: string, dairyEntries: UserDiaryEntries[]) {
    this.userId = userId;
    this.dairyEntries = dairyEntries;
  }

}
