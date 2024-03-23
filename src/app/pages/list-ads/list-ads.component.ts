import { Component, OnInit, inject } from '@angular/core';
import { CardAdsComponent } from '../../components/card-ads/card-ads.component';
import { Observable } from 'rxjs';
import { AdService } from '../../services/ad.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-ads',
  standalone: true,
  imports: [CardAdsComponent, CommonModule],
  templateUrl: './list-ads.component.html',
  styleUrl: './list-ads.component.scss'
})
export class ListAdsComponent implements OnInit {
  adService = inject(AdService)
  listAds$ = this.adService.getAllAds()

  ngOnInit(): void {      
  }
}
