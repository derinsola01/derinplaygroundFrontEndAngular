import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  validateUserId(userId: string){
    return this.httpClient.get('./src/assets/fakedb.json').pipe( // send a backend call to validate userIds.
      map((userIdList: Array<any>) =>
      userIdList.filter(user => user.userId === userId)
      ),
      map(users => !users.length)
    );
  }
}
