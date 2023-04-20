import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const httpOptions ={
  headers:{'method':'POST' }
}
const apiUrl = 'http://localhost:8080/api/v1/quotation/';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private httpClient:HttpClient) {


    
   }
}
