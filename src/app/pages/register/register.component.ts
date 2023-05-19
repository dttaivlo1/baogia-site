import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Md5 } from 'ts-md5/dist/esm/md5';


import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  MD5 = new Md5();
isLoading = '';
  registerForm :FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.registerForm = this.fb.group({
        firstName: ['',[Validators.required]],
        lastName: ['',[Validators.required]],
        email: ['',[Validators.required]],
        address: ['',[Validators.required]],
        phone: ['',[Validators.required]],
        hashPW: ['',[Validators.required]],
        re_password: ['',[Validators.required]],
  });
  }
  onSubmit(){
    this.isLoading = 'is-loading';
    this.authService.register(this.registerForm.value).subscribe(
      data =>{
       this.isLoading = '';
   
      },
      (error) => {
        Swal.fire(
          'Dăng kí thất bại',
          error,
          'error')
       this.isLoading = '';
     });
  }
  clear(){
    this.registerForm.reset();
  }
  ValidatorsPass(a, b){
    return a==b ? true: false

  }

}
