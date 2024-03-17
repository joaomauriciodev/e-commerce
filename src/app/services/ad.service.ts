import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Ad } from '../interfaces/ad';

@Injectable({
  providedIn: 'root'
})
export class AdService {
  http: HttpClient = inject(HttpClient)
  url: string = 'localhost:8080'

  constructor() { }

  addNewAd(ad: Ad) {
    console.log(ad);
    
    this.http.post(this.url, {ad})
  }
}
