
import { Component, Input, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import Stepper from 'bs-stepper';

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { Index } from 'src/app/core/models';
import { USERS } from 'src/app/core/models/mock-user';
import { Property } from 'src/app/core/models/property';
import { Quotation } from 'src/app/core/models/quotation';
import { PdfService } from 'src/app/core/services/pdf.service';
import { QuotationService } from 'src/app/core/services/quotation.service';
import { CLIENT_RENEG_LIMIT } from 'tls';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
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

