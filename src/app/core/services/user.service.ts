import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
import { User } from '../models/user';
import { BaseURL } from '../configs/constants/api-command.constant';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}
  // Create User

  getAll() { 
    return this.httpClient.post(BaseURL.BASE_API_URL+BaseURL.API_USER+'/getLs',{}).pipe(
    )
  }
  getUser() {
    return this.httpClient.post('https://63e36e8465ae4931770ec117.mockapi.io/api/uipath/user',{}).pipe()
  }
}
