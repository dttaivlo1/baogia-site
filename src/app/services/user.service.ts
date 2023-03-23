import { User } from 'src/app/models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  usersRef: AngularFireList<any>;
  userRef: AngularFireObject<any>;

  propertysRef: AngularFireList<any>;
  propertyRef: AngularFireObject<any>;

  indexesRef: AngularFireList<any>;
  indexRef: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) {}
  // Create User
  AddUser(user: User) {
this.usersRef= this.db.list('users');
    this.usersRef.push({
      uid: 'staff',
      photoURL: 'none',
      name: user.name,
      department: user.department,
      email: user.email,
      phone: user.phone,
    });
  }
  // Fetch Single User Object
  GetUser(id: string) {
    this.userRef = this.db.object('users-list/' + id);
    return this.userRef;
  }
  // Fetch Users List
  GetUsersList() {
    this.usersRef = this.db.list('users-list');
    return this.usersRef;
  }
  // Update User Object
  UpdateUser(user: User) {
    this.userRef.update({
      uid: user.uid,
      photoURL: user.photoURL,
      name: user.name,
      department: user.department,
      email: user.email,
      phone: user.phone,
    });
  }
  // Delete User Object
  DeleteUser(id: string) {
    this.userRef = this.db.object('users-list/' + id);
    this.userRef.remove();
  }

}
