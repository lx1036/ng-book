import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {User} from './models';

@Injectable()
export class UserService {
  currentUser = new BehaviorSubject<User>(null);

  constructor() { }

  public setCurrentUser(newUser: User): void {
    this.currentUser.next(newUser);
  }
}
