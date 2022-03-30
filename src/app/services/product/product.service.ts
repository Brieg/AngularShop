import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, map, BehaviorSubject } from "rxjs";

import { IProduct } from "../../interfaces/product";

@Injectable({
  providedIn: "root"
})
export class ProductService {

  products: BehaviorSubject<IProduct[]> = new BehaviorSubject<IProduct[]>([]);

  constructor(private httpClient: HttpClient) {
  }

  getProducts(): Observable<any> {
    return this.httpClient.get('https://product-api2.herokuapp.com/api/v1/products')
  }
}
