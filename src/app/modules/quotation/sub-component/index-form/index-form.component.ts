import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Quotation } from 'src/app/core/models/quotation';
import Swal from 'sweetalert2';
import { CLIENT_RENEG_LIMIT } from 'tls';

@Component({
  selector: 'app-index-form',
  templateUrl: './index-form.component.html',
  styleUrls: ['./index-form.component.css']
})
export class IndexFormComponent implements OnInit {
  @Input() quotation: Quotation;
  @Output() addIndexes: EventEmitter<any> = new EventEmitter<any>();
  indexList:any [];
  selected: number = 0;
  indexForm: FormGroup;
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    console.log(this.quotation);
    this.indexForm = this.fb.group({
      indexName: ['', [Validators.required, Validators.minLength(3)]],
      unitPrice: ['', [Validators.required, Validators.minLength(3)]],
      area: ['', [Validators.required]],
      CLCL: ['', [Validators.required]],
      totalPrice: ['', [Validators.required, Validators.minLength(3)]],
    });
    this.indexForm.valueChanges.subscribe(val => {
      this.indexForm.value.totalPrice = val.unitPrice * val.unitPrice * val.CLCL;
      console.log(this.indexForm.value.totalPrice);
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
getIndexList():any[]{
  return this.quotation.propertyData[this.selected].indexData;
}
}