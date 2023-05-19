import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { format } from 'path';
import { Quotation } from 'src/app/core/models/quotation';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-index-form',
  templateUrl: './index-form.component.html',
  styleUrls: ['./index-form.component.css']
})
export class IndexFormComponent implements OnInit {
  @ViewChild('propsType') myCheckbox;
  @Input() quotation: Quotation;
  @Output() addIndexes: EventEmitter<any> = new EventEmitter<any>();
  indexList: any[];
  selected: number = 0;
  indexForm: FormGroup;
  isChecked : any = false;
  disableCLCL = false;
  constructor(private fb: FormBuilder,private currencyPipe: CurrencyPipe,  private decimalPipe: DecimalPipe) { }
  ngOnInit(): void {
    console.log(this.quotation);
    this.initForm();
    this.indexForm.valueChanges.subscribe(val => {
      this.indexForm.controls['totalPrice'].setValue(val.area *
        val.unitPrice *
        (val.clcl/100),
        { emitEvent: false });
      console.log(this.indexForm.value);
      this.cleanForm();
    });
  }
  initForm() {
    this.indexForm = this.fb.group({
      indexName: ['', [Validators.required, Validators.minLength(3)]],
      unitPrice: [0, [Validators.required, Validators.minLength(3)]],
      area: [0, [Validators.required]],
      clcl: [100, [Validators.required]],
      totalPrice: [0, [Validators.required, Validators.minLength(3)]],
    });
  }
  addIndex() {
    this.quotation.propertyData[this.selected].indexData.push(this.indexForm.value);
    console.log(this.quotation);
    this.indexForm.reset();
  }
  onSubmit() {
    this.addIndexes.emit(this.quotation);
    Swal.fire(
      'Good job!',
      'You clicked the button!',
      'success'
    )

  }
  doAction(event:any){
    console.log(event.target.checked)
    if(event.target.checked == false){
      this.indexForm.controls['clcl'].setValue(
100,
        { emitEvent: false });
      console.log(this.indexForm.value);
      this.disableCLCL = true;
    }
    else this.disableCLCL = false;
  }
  getIndexList(): any[] {
    return this.quotation.propertyData[this.selected].indexData;
  }
  cleanForm(){
   
  }
}