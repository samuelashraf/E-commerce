import { Component, OnInit, viewChild } from '@angular/core';
import { Icategory } from '../../models/icategory';
import { ProductsService } from '../../services/products.service';
import { AllProductsComponent } from '../all.products/all.products.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order',
  imports: [AllProductsComponent, CommonModule, FormsModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
})
export class OrderComponent implements OnInit {
  selectCat: string = 'All';
  category: Icategory[] = [];

  constructor(private product: ProductsService) {}
  ngOnInit(): void {
    this.getCategory();
  }
  getCategory() {
    this.product.getAllcategory().subscribe({
      next: (res: any) => {
        this.category = res;
      },
      error: (error) => {
        console.log(error.message);
      },
    });
  }
}
