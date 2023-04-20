import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form:FormGroup;

  constructor(private fb:FormBuilder,
               private authService: AuthService,
               private router: Router) {

      this.form = this.fb.group({
          username: ['',Validators.required],
          password: ['',Validators.required]
      });
  }
onSubmit(){
  const val = this.form.value;
  this.authService.SignIn(val.username, val.password)
 // this.login();
}

}
