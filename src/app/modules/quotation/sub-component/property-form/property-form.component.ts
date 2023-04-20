import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
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
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
   
    this.propertyForm = this.fb.group({
      propertyName: ['', [Validators.required]],
      propertyAddress: ['', [Validators.required]],
      propertyDef: ['', [Validators.required]],
      propertySourse: ['', [Validators.required]],
      propertyPlaning: ['', [Validators.required]],
      indexData : new FormArray([], [Validators.required]),
    });
  }
  addProperty(){
    this.propertyList.push(this.propertyForm.value);
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
