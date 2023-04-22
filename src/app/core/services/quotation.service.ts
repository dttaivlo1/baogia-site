import { Property } from './../models/property';
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
import { Quotation } from '../models/quotation';
import { BaseURL } from '../configs/constants/api-command.constant';
import { Header } from 'primeng/api';
const httpOptions ={
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
    'key': 'x-api-key',
    'value': 'NNctr6Tjrw9794gFXf3fi6zWBZ78j6Gv3UCb3y0x',
  }),
};

const apiUrl = BaseURL.BASE_API_URL + BaseURL.API_QUOTATION;
@Injectable({
  providedIn: 'root',
})

export class QuotationService {
  quotationsRef: AngularFireList<any>;
  quotationRef: AngularFireObject<any>;
  propertysRef: AngularFireList<any>;
  propertyRef: AngularFireObject<any>;
  indexesRef: AngularFireList<any>;
  indexRef: AngularFireObject<any>
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

  getAll():Observable<Quotation[]> {

    return this.httpClient.get<Quotation[]>(apiUrl+'/getAllQuotation', httpOptions).pipe(
    )
  }
  createQuotation(formData) {
    console.log(formData);
    return this.httpClient.post(apiUrl+'/create',formData,httpOptions).pipe(
  tap( // Log the result or error
  {
    next: (data) => console.log(data),
    error: (error) => console.log(error)
  }
  )
    );
  }
  selectQuotatation(id: string):Observable<Quotation> {
   return  this.httpClient.get<Quotation>(apiUrl+id).pipe(
       tap( // Log the result or error
  {
    next: (data) => console.log(data),
    error: (error) => console.log(error)
  }
  )
      )
    }
  }
  // Update Quotation Object




