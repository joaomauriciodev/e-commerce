import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms'; 
import { MatInputModule } from '@angular/material/input';

import { Product } from '../../models/product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule,FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  productService = inject(ProductService)
  product: Product = {
    id: 0,
    description: '',
    imageUrl: '',
    price: 0
  }
  
  constructor(){}

  addNewProduct(){
  }

}
