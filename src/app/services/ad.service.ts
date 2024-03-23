import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Ad } from '../interfaces/ad';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdService {
  http: HttpClient = inject(HttpClient)
  url: string = 'http://localhost:3000/ads'

  constructor() { }

  getAllAds(): Observable<any> {
    return this.http.get(this.url)
  }

  addNewAd(ad: Ad): Observable<any> {   

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    
    return this.http.post(this.url,ad, httpOptions)
  }
}
