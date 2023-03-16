import { Quotation } from 'src/app/models/quotation';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuotationService {
  private listQuot: Quotation[] = [];


  constructor(private http: HttpClient) {}

  getListQuat() {
    return this.listQuot;
  }
  getQuat(int: number) {
    return this.listQuot[int];
  }
  addQuat(element: Quotation){
    element.status ="chưa phản hồi";
    element.propertyValues = 0;
    this.listQuot.push(element);
  }
}
