import { PdfService } from './../../services/pdf.service';
import { QuotationService } from 'src/app/services/quotation.service';
import { Quotation } from 'src/app/models/quotation';
import { Property } from './../../models/property';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { USERS } from 'src/app/models/mock-user';
import { Index } from 'src/app/models';
import {templatePDF} from '../../../assets/pdf.js';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { CurrencyPipe } from '@angular/common';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  quotation: Quotation;
  properties: Property;
  pdf : any;
  dd = templatePDF;
  indexes: Index = {
    id: '',
    prop_id: '',
    name: '',
    unitPrice: 1000,
    amount: 50,
    quality: 0.8,
    totalPrice: 1000 * 50 * 0.8,
  };
  rfCreate: FormGroup = new FormGroup({});
  user = USERS;
  // playground requires you to assign document definition to a variable called dd



  constructor(
    private fb: FormBuilder,
    private quotationService: QuotationService,
    private pdfService: PdfService,
  ) {}
  ngOnInit(): void {
    this.createForm();

    //
  }
  createForm() {
    this.rfCreate = this.fb.group({
      userData: this.fb.group({
        name: new FormControl('', [Validators.required]),
        phone: new FormControl('', Validators.required),
        requestBy: new FormControl('dương tấn tài', Validators.required),
        responseBy: new FormControl('', Validators.required),
      }),
      propertyData: this.fb.array([]),
    });
    this.propertyData.valueChanges.subscribe((data) => {
      //console.log(data);
      data.forEach((element: Property) => {
        for (let i = 0; i < this.indexData(data.indexOf(element)).length; i++) {
          const val = this.indexData(data.indexOf(element)).at(i)
            .value as Index;
          // console.log(val.unitPrice*val.amount*val.quality);
          this.indexData(data.indexOf(element))
            .at(i)
            .patchValue(
              {
                totalPrice: val.unitPrice * val.amount * (val.quality/100),
              },
              { emitEvent: false }
            );
          //    console.log(this.indexData(data.indexOf(element)).at(i).value);
        }
      });
    });
  }
  propertyForm() {
    return this.fb.group({
      id: 1,
      name: 'a',
      address: 'a',
      define: 'a',
      planning: '',
      source: '',
      indexData: this.fb.array([]),
    });
  }
  indexForm(num: number) {
    return this.fb.group({
      id: num + 1,
      prop_id: '',
      name: '',
      unitPrice: 1,
      amount: 1,
      quality: 1,
      totalPrice: 0,
    });
  }
  get propertyData() {
    return this.rfCreate.get('propertyData') as FormArray;
  }
  indexData(propertyID: number): FormArray {
    const temp = this.rfCreate.get('propertyData') as FormArray;
    const index = temp.at(propertyID);
    const temp2 = index.get('indexData') as FormArray;
    return temp2 as FormArray;
  }
  addProperty() {
    this.propertyData.push(this.propertyForm());
  }
  addIndex(propertyID: number, num: number) {
    this.indexData(propertyID).push(this.indexForm(num));
  }
  delIndex(indexData: FormArray, indexID: number) {
    indexData.removeAt(indexID);
  }
  delProperty(id: any) {
    this.propertyData.removeAt(id);
  }
  onSubmit(): void {
    this.quotation = this.rfCreate.value.userData as Quotation;
    this.quotationService.addQuat(this.rfCreate.value.userData as Quotation);
   // this.dd = templatePDF;
   // this.pdfService.generatePDF(this.rfCreate.value);
  // this.dd.content[5].table.body.push([{bold: true,  fontSize: 13, text: 'Tổng giá trị:', alignment: 'center', colSpan: 3 },
  // {},{},{bold: true,  fontSize: 13, text: '124,488,000,000' + 'VNĐ', alignment: 'center',colSpan: 2},{}]);
  // this.pdf = this.dd;
  //console.log(JSON.stringify(this.dd));
   pdfMake.createPdf(this.pdfService.generatePDF(this.rfCreate.value)).open();
  }
  setPropertyID() {
    return 'dâd';
  }
  demo() {
    return { text: 'tài', fontSize: 15 };
  }
}
