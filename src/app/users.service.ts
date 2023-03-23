import { Injectable } from '@angular/core';
import { USERS } from './models/mock-user';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

 array: User[] = [];

  constructor() { this.array = USERS }
  getUsers(){
  return this.array;
  }
  addUser(){


    return this.array;
  }
}
