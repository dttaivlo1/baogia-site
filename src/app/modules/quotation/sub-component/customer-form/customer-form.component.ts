import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Console } from 'console';
import { PageEum } from 'src/app/core/configs/enums/pagination.enum';
import { Quotation } from 'src/app/core/models/quotation';
import { User } from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent    implements OnInit {
  @Output() addCustomer: EventEmitter<any> = new EventEmitter<any>();
  customerForm: FormGroup;
  listUser: any
  constructor(private fb: FormBuilder ,private userService: UserService) {}
quotation : Quotation;
  ngOnInit(): void {
    this.fetchUser ();
    this.customerForm = this.fb.group({
    name: ['', Validators.compose([Validators.required, Validators.minLength(12), Validators.maxLength(250)])],
    phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(12)]],
    requestBy:  ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    responseBy:  ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    status: false,
    state: true,
    createAt : new Date(),
    propertyData : new FormArray([]),
    });
  }
  onSubmit() {
   var  a: any[];
    
    console.log(this.customerForm);

     this.quotation = new Quotation(this.customerForm.value);
     this.addCustomer.emit(this.quotation);
     Swal.fire(
       'Thông tin hợp lệ!',
       'Vui lòng chuyển tới bước tiếp theo!',
       'success'
     )
  }
  fetchUser(){
  this.userService.getAll().subscribe({
    next: (data: any) => {
     this.listUser = data.data;
    },
    error(e) {
      console.log(e);
    },
    complete() {
      console.log('done!');
    },
  })
  }
 get name() {
  return this.customerForm.get('name');
 }
 get phone() {
  return this.customerForm.get('phone');
 }
  
}