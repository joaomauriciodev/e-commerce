import { Component, Input, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Ad } from '../../interfaces/ad';

@Component({
  selector: 'app-card-ads',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './card-ads.component.html',
  styleUrl: './card-ads.component.scss'
})
export class CardAdsComponent implements OnInit {
  @Input() ad: Ad

  title: string
  description: string
  price: number
  imageUrl: string

  ngOnInit(): void {      
    this.title = this.ad.title
    this.description =this.ad.description
    this.price = this.ad.price
    this.imageUrl = this.ad.imageUrl !== '' ? this.ad.imageUrl : "../../assets/images/ads-generic.jpg"
  }  
}
