export class UserDiaryEntry {
  diaryEntryDate: Date;
  diaryEntry: string;

  constructor(diaryEntryDate: Date, diaryEntry: string) {
    this.diaryEntry = diaryEntry;
    this.diaryEntryDate = diaryEntryDate;
  }
}
