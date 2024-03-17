import { Component, OnInit, inject } from '@angular/core';
import { AdService } from '../../services/ad.service';
import { Ad } from '../../interfaces/ad';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';



@Component({
  selector: 'app-form-new-ad',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule ,ReactiveFormsModule, MatButtonModule, MatCardModule],
  templateUrl: './form-new-ad.component.html',
  styleUrl: './form-new-ad.component.scss'
})
export class FormNewAdComponent implements OnInit {
  private adService = inject(AdService)
  private formBuilder = inject(FormBuilder)

  adForm: FormGroup;

  ngOnInit(): void {
    this.adForm = this.formBuilder.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      urlImage: ['', Validators.required]
    })
  }

  onAddNewAd() {
    const ad: Ad = {id: 1, title: 'ii', description: 'ijdsi', price: 10, urlImage: 'uu'}
    this.adService.addNewAd(ad)
  }


}
