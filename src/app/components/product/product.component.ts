import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Icart } from '../../models/icart';

@Component({
  selector: 'app-product',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input() data: Iproduct = {} as Iproduct;
  @Output() item = new EventEmitter();
  addbutton: boolean = false;
  amount: number = 0;
  constructor() {}

  add() {
    this.item.emit({ item: this.data, quantity: this.amount });
    this.addbutton = false;
  }
}
