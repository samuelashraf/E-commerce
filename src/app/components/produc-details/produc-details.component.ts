import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Iproduct } from '../../models/iproduct';

@Component({
  selector: 'app-produc-details',
  imports: [],
  templateUrl: './produc-details.component.html',
  styleUrl: './produc-details.component.css',
})
export class ProducDetailsComponent implements OnInit {
  id: number;
  productDetails: Iproduct = {} as Iproduct;
  constructor(
    private activatedRouter: ActivatedRoute,
    private product: ProductsService
  ) {
    this.id = Number(this.activatedRouter.snapshot.paramMap.get('id'));
  }
  ngOnInit() {
    this.getProducuByid(this.id);
  }
  getProducuByid(id: number) {
    this.product.getProductByid(id).subscribe({
      next: (res: Iproduct) => {
        this.productDetails = res;
      },
    });
  }
}
