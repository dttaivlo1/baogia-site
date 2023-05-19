import { Component } from '@angular/core';
import Stepper from 'bs-stepper';
import {Md5} from 'ts-md5/dist/md5';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  private stepper: Stepper;
  private MD5: Md5 = new Md5();
  next() {
    this.stepper.next();

  }

  onSubmit() {
  }

  ngOnInit() {
    var a =document.querySelector('#stepper1') as HTMLElement;
    this.stepper = new Stepper(a, {
      linear: false,
      animation: true
    })
    
  }
}
