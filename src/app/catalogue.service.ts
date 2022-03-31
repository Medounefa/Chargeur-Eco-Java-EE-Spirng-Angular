import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  constructor(private http:HttpClient) { }

  getProduct(){
    return this.http.get("http://localhost:8090/products/1");
  }
}
