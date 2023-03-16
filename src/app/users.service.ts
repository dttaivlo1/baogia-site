import { Injectable } from '@angular/core';
import { USERS } from './models/mock-user';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

 array: User[] = [];
 user: User = {id: "4",
 name: "Harjas Malhotra",
 email: "harjas@gmail.com",
 job_title: "CEO&Founder",
 created_at: "2021-01-31 00:07:38",
 updated_at: "2021-01-31 00:07:38"}
  constructor() { this.array = USERS }
  getUsers(){
  return this.array;
  }
  addUser(){

    this.array.push(this.user);
    return this.array;
  }
}
