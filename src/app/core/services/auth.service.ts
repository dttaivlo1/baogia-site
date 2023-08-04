import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5/dist/esm/md5';

import { BaseURL } from '../configs/constants/api-command.constant';
import { tap } from 'rxjs/internal/operators/tap';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
const apiUrl = BaseURL.BASE_API_URL + BaseURL.API_AUTHENTICATION;
const httpOptions ={
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
    'key': 'x-api-key',
    'value': 'NNctr6Tjrw9794gFXf3fi6zWBZ78j6Gv3UCb3y0x',
  }),
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;
  MD5 = new Md5();
a = '';
  //
 constructor(private httpClient: HttpClient,  private router: Router){
 }
  //////////////////////////////
  get isLoggedIn(): boolean {
    const user = localStorage.getItem('status_login');
    if (user === "true") {return true}  
    else return false;
 }
 register(data){
data.hashPW = this.MD5.appendStr(data.hashPW).end()
  return this.httpClient.post(apiUrl + '/register', data, httpOptions).pipe(
    tap(
   {
    next:(response: any) => {
      if (response.data ==="0"){
      Swal.fire(
        'Thành cônng',

        
        'Tài khoản đã được tạo thành công',
      'success'
      )
      this.router.navigate(['./login']);
      }
      else{
         Swal.fire(
            'Dăng kí thất bại',
             response.errorCode + ':  '+ response.errorDesc,
            'error')
      }
     },
     error: (err) => {
      return err.status
     }
   }
    )
  );
 }
login(email, password){
  

 this.a = this.MD5.appendStr(password).end() as string;

return this.httpClient.post(apiUrl + '/login',{email, password: this.a} , httpOptions).pipe(
    tap(
   {
    next:(response: any) => {
      this.MD5 = new Md5();

      if (response.data.errorCode ==="0"){
       localStorage.setItem("status_login", "true")
       this.router.navigate(['/']);
      }
      else{
        Swal.fire(
          'Thất Bại',
          'Thông tin đăng nhập không chính xác, vui lòng thử lại',
          'error'
        )
      }
     },
     error: (err) => {
      Swal.fire(
        'Thất Bại',
        err.message,
        'error'
      )
     }
   }
    )
  );
}
SignOut(){
  localStorage.clear();this.router.navigate(['/login']);
}
}
