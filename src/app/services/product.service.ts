import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  http = inject(HttpClient)
  url = 'localhost:4000/product'

  constructor() {}

  addNewProduct(product: Product) {
    return this.http.post(this.url,{product})
  }
}
