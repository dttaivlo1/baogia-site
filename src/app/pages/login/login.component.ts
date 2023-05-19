import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { CLIENT_RENEG_LIMIT } from 'tls';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoading
  form:FormGroup;
  constructor(private fb:FormBuilder,
               private authService: AuthService,
              ) {

      this.form = this.fb.group({
          username: ['',Validators.required],
          password: ['',Validators.required]
      });
  }
onSubmit(){this.isLoading = " is-loading";
  const val = this.form.value;

  this.authService.login(val.username, val.password).subscribe(
   data =>{
    this.isLoading = '';

   },
   (error) => {
    console.log('error') 
    this.isLoading = '';
  });
  

}

}
