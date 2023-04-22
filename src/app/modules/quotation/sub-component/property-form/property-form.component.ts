import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Property } from 'src/app/core/models/property';
import { Quotation } from 'src/app/core/models/quotation';
import Swal from 'sweetalert2';
import { CLIENT_RENEG_LIMIT } from 'tls';

@Component({
  selector: 'app-property-form',
  templateUrl: './property-form.component.html',
  styleUrls: ['./property-form.component.css']
})
export class PropertyFormComponent  implements OnInit {
  @Input()quotation: Quotation;
  @Output() addProps: EventEmitter<any> = new EventEmitter<any>();
  propertyList: any = [];
  propertyForm: FormGroup;
  property : Property;
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
   
    this.propertyForm = this.fb.group({
      propertyName: ['', [Validators.required]],
      propertyAddress: ['', [Validators.required]],
      propertyDef: ['', [Validators.required]],
      propertySource: ['', [Validators.required]],
      propertyPlanning: ['', [Validators.required]],
      indexData : new FormArray([], [Validators.required]),
    });
  }
  addProperty(){
    this.property  = this.propertyForm.value;
    this.propertyList.push(this.property);
    this.propertyForm.reset();
  }
  onSubmit() {
    this.addProps.emit(this.propertyList);
    console.log(this.propertyList);
    Swal.fire(
      'Good job!',
      'You clicked the button!',
      'success'
    )
  }
  
}
