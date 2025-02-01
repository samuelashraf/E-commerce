import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { Icart } from '../../models/icart';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit, OnChanges {
  cartProduct!: any[];
  totalPrice: any = 0;
  countOfProduct: number = 0;
  succsse: boolean = false;
  constructor(private cartservice: CartService) {
    this.cartProduct = JSON.parse(localStorage.getItem('cart')!);
  }

  ngOnInit(): void {
    this.getCartProduct();
    this.countOfProduct = this.cartProduct.length;
  }
  ngOnChanges(): void {
    this.getCartProduct();
  }
  getCartProduct() {
    if ('cart' in localStorage) {
      this.cartProduct = JSON.parse(localStorage.getItem('cart')!);
    }
    this.getTotalCartprice();
  }
  getTotalCartprice() {
    this.totalPrice = 0;
    for (let index in this.cartProduct) {
      this.totalPrice +=
        this.cartProduct[index].item.price * this.cartProduct[index].quantity;
    }
  }
  updatecart() {
    localStorage.setItem('cart', JSON.stringify(this.cartProduct));
  }
  minsAmount(index: number) {
    if (this.cartProduct[index].quantity >= 2) {
      this.cartProduct[index].quantity--;
    }
    this.updatecart();
    this.getTotalCartprice();
  }
  plusAmount(index: number) {
    this.cartProduct[index].quantity++;
    this.updatecart();
    this.getTotalCartprice();
  }
  detectInput(count: number, index: number) {
    this.cartProduct[index].quantity = count;
    this.updatecart();
    this.getTotalCartprice();
  }
  deleteProduct(index: number) {
    this.cartProduct.splice(index, 1);
    this.updatecart();
    this.getTotalCartprice();

    this.countOfProduct = this.cartProduct.length;
  }
  clearCart() {
    this.cartProduct.splice(0, this.cartProduct.length);
    this.updatecart();
    this.getTotalCartprice();
    this.countOfProduct = this.cartProduct.length;
  }
  addCart() {
    let products = this.cartProduct.map((item) => {
      return { productId: item.item.id, quantity: item.quantity };
    });
    const model = {
      userId: 5,
      date: new Date(),
      products: products,
    };
    this.cartservice.creatNewCart(model).subscribe({
      next: (res) => {
        this.succsse = true;
        this.cartProduct = [];
        this.updatecart();
        this.getTotalCartprice();
        this.countOfProduct = this.cartProduct.length;
      },
    });
  }
}
