import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Iproduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private _httpclint: HttpClient) {}

  getAllProducts() {
    return this._httpclint.get<Iproduct[]>(`${environment.urlPath}products`);
  }
  getAllcategory() {
    return this._httpclint.get(`${environment.urlPath}products/categories`);
  }
  getProdctByCatogry(value: string) {
    return this._httpclint.get<Iproduct[]>(
      `${environment.urlPath}products/category/${value}`
    );
  }
  getProductByid(id: number) {
    return this._httpclint.get<Iproduct>(
      `${environment.urlPath}products/${id}`
    );
  }
}
