import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
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
  constructor(private fb: FormBuilder) {}
quotation : Quotation;
  ngOnInit(): void {
    this.customerForm = this.fb.group({
    name: ['a', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    phone: ['a', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    requestBy:  ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    responseBy:  ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    status: false,
    createAt : new Date(),
    propertyData : new FormArray([], [Validators.required]),
    });
  }
  onSubmit() {
    this.quotation = new Quotation(this.customerForm.value);
    this.addCustomer.emit(this.quotation);
    Swal.fire(
      'Good job!',
      'You clicked the button!',
      'success'
    )
  }
  
}