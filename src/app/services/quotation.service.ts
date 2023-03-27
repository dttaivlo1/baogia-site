import { Property } from './../models/property';
import { Quotation } from 'src/app/models/quotation';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
import { Index } from '../models';
import { JsonPipe } from '@angular/common';
const httpOptions ={
  headers:{'method':'POST' }
}
const apiUrl = 'https://backendhth.up.railway.app/api/v1/quotation/';
@Injectable({
  providedIn: 'root',
})

export class QuotationService {
  quotationsRef: AngularFireList<any>;
  quotationRef: AngularFireObject<any>;
  propertysRef: AngularFireList<any>;
  propertyRef: AngularFireObject<any>;
  indexesRef: AngularFireList<any>;
  indexRef: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase, private httpClient:HttpClient) {}
  // Create Quotation
  AddQuotation(quotation: Quotation) {
this.quotationsRef= this.db.list('quotations');
    this.quotationsRef.push({
      name: quotation.name,
      phone: quotation.phone,
      requestBy: quotation.requestBy,
      responseBy: quotation.responseBy,
      propertyData: quotation.propertyData,
      status: quotation.status
    });
  }
  // Fetch Single Quotation Object
  GetQuotation(id: string) {
    this.quotationRef = this.db.object('quotations-list/' + id);
    return this.quotationRef;
  }
  // Fetch Quotations List
  GetQuotationsList() {
    this.quotationsRef = this.db.list('quotations-list');
    return this.quotationsRef;
  }
  getAll():Observable<Quotation[]> {

    return this.httpClient.get<Quotation[]>(apiUrl+'getAllQuotation').pipe(
    )
  }
  createQuotation(formData) {
    console.log(formData);
    return this.httpClient.post(apiUrl+'create',formData,httpOptions).pipe(
  tap( // Log the result or error
  {
    next: (data) => console.log(data),
    error: (error) => console.log(error)
  }
  )
    );
  }
  // Update Quotation Object
  UpdateQuotation(quotation: Quotation) {
    this.quotationRef.update({
      name: quotation.name,
      phone: quotation.phone,
      requestBy: quotation.requestBy,
      responseBy: quotation.responseBy,
      propertyData: quotation.propertyData,
      status: quotation.status
    });
  }
  // Delete Quotation Object
  DeleteQuotation(id: string) {
    this.quotationRef = this.db.object('quotations-list/' + id);
    this.quotationRef.remove();
  }

}
