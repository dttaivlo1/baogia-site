import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm:FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService){
    this.registerForm = this.fb.group({
        name: [null,[Validators.required]],
        department: [null,[Validators.required]],
        email: [null,[Validators.required]],
        phone: [null,[Validators.required]],
        password: [null,[Validators.required]],
        re_password: [null,[Validators.required]],
  });
  }
  onSubmit(){
    console.log(this.registerForm.value);
  }
  ValidatorsPass(a, b){
    return a==b ? true: false

  }

}
