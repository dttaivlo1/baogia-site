import { Component } from '@angular/core';
import Stepper from 'bs-stepper';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  private stepper: Stepper;

  next() {
    this.stepper.next();

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
