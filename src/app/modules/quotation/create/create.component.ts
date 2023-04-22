
import { Component, OnInit } from '@angular/core';
import Stepper from 'bs-stepper';

import { Quotation } from 'src/app/core/models/quotation';
import { QuotationService } from 'src/app/core/services/quotation.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  constructor(private quotationService: QuotationService){}
  myData: Quotation;
  submitCustomer = true;
  submitProperty = true;
  submitIndex = true;
  private stepper: Stepper; 
  next() {
  this.stepper.next();
}
getCustomer(data){
  console.log(data);
  this.myData = data;
  this.submitCustomer = false;
}
getProps(data){
  this.myData.propertyData = data;
  console.log(this.myData);
  this.submitProperty = false;
}
getIndex(data){
  this.myData = data;
  console.log(this.myData);
  this.submitIndex = false;
  this.quotationService.createQuotation(this.myData).subscribe(data => {
    console.log(data);
  })
  this.next();
}
onSubmit() {
  console.log("a");
}
ngOnInit() {
  var a =document.querySelector('#stepper1') as HTMLElement;
  this.stepper = new Stepper(a, {
    linear: false,
    animation: true
  })
}

  }

