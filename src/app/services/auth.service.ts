import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {
  }
  login(email:string, password:string ) {
     if(email == 'admin' && password == '123')
    {
      localStorage.setItem("section", "activated")
      return true
    }
   else  return false;
  }
  getState(){
   if(localStorage.getItem("section")=="activated")
   return true
   else return false;
  }
}
