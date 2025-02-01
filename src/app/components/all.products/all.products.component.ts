import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../../app.component';
import { Iproduct } from '../../models/iproduct';
import { ProductComponent } from '../product/product.component';
import { Icart } from '../../models/icart';

@Component({
  selector: 'app-allproducts',
  imports: [CommonModule, AppComponent, ProductComponent],
  templateUrl: './all.products.component.html',
  styleUrl: './all.products.component.css',
})
export class AllProductsComponent implements OnInit, OnChanges {
  products: Iproduct[] = [];
  filterProduct: Iproduct[] = [];
  @Input() recivedCatId: string = '';

  cartProduct: Iproduct[] = [];
  constructor(private product: ProductsService) {}
  ngOnChanges(): void {
    this.filtercategory();
  }

  ngOnInit(): void {
    this.getProduct();
  }
  getProduct() {
    this.product.getAllProducts().subscribe({
      next: (res: Iproduct[]) => {
        this.products = res;
        // this.filterProduct = this.products;
      },
      error: (error) => {
        console.log(error.message);
      },
    });
  }

  filtercategory() {
    let value = this.recivedCatId;

    if (value == 'All') {
      this.getProduct();
    } else {
      this.getProdctBycategory(this.recivedCatId);
    }
  }
  getProdctBycategory(keyword: string) {
    this.product.getProdctByCatogry(keyword).subscribe({
      next: (res: Iproduct[]) => {
        this.products = res;
        // if (keyword == 'All') {
        //   this.filterProduct = this.products;
        // } else {
        //   this.filterProduct = res;
        // }
      },
    });
  }
  addToCart(event: any) {
    //
    if (event.quantity != 0) {
      if ('cart' in localStorage) {
        this.cartProduct = JSON.parse(localStorage.getItem('cart')!);
        let exist = this.cartProduct.find(
          (item: any) => item.item.id == event.item.id
        );

        if (exist) {
          alert('product alrady in your cart');
        } else {
          this.cartProduct.push(event);
          localStorage.setItem('cart', JSON.stringify(this.cartProduct));
        }
      } else {
        this.cartProduct.push(event);
        localStorage.setItem('cart', JSON.stringify(this.cartProduct));
      }
    } else {
      alert('PlZ Enter the quantity of products');
    }
  }
}
